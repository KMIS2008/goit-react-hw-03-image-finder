
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {fetchImages} from './api';
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGalery} from './ImageGallery/ImageGallery';
import {ButtonLoadMore} from './Button/Button';
import {Loader} from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
    nameImage:"",
    page:"",
  }

componentDidUpdate(prevProps, prevState) {
  if (
    prevState.nameImage !== this.state.nameImage ||
    prevState.page !== this.state.page
  ) {

    const newNameImage = this.state.nameImage.slice(this.state.nameImage.indexOf('/') + 1);
    
    this.addImages(newNameImage);
  }
}

 addImages = async (newNameImage) => {
   const { page } = this.state;
  
    try {
      this.setState({ isLoading: true, error: false });
       const listImages = await fetchImages( newNameImage, page);
       this.setState({ images: listImages.hits });
     
     } catch (error) {
      toast.error('ERORR. Please try reloading this page!');
       this.setState({ error: true });
     } finally {
       this.setState({ isLoading: false });
     }
     }

     handleSubmit = query => {
      this.setState({
        nameImage: `${Date.now()}/${query}`,
        images: [], 
        page: 1, 
      });
    };

    handleLoadMore = () => {
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
        };
      });
    };

  render(){
    const {images, isLoading, error} = this.state;

      return (
    <div>
      <Searchbar handleSubmit={this.handleSubmit}/>

      {isLoading && (<Loader/>)}

      {error && (
          <b>Oops! Something went wrong! Please try reloading this page! </b>
        )}

      <ImageGalery images = {images}/>

      {images.length > 0 && (<ButtonLoadMore onClick={this.handleLoadMore}/>)}

      <ToastContainer />

      <GlobalStyle/>
    </div>
  )}

};
