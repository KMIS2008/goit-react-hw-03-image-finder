
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {fetchImages} from './api';
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGalery} from './ImageGallery/ImageGallery';
import {ButtonLoadMore} from './Button/Button';
import {Loader} from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
    nameImage:"",
    page:"",
  }

//   async componentDidMount(){
//       try {
//     this.setState({ isLoading: true, error: false });
//     const listImages = await fetchImages();
//     this.setState({ images: listImages.hits });
//     // console.log(this.state.images);
//   } catch (error) {
//     this.setState({ error: true });
//   } finally {
//     this.setState({ isLoading: false });
//   }
// }


 addImages = async () => {
   const { nameImage, page } = this.state;
    try {
      this.setState({ isLoading: true, error: false });
       const listImages = await fetchImages( nameImage, page);
       this.setState({ images: listImages.hits });
       // console.log(this.state.images);
     } catch (error) {
       this.setState({ error: true });
     } finally {
       this.setState({ isLoading: false });
     }
     }

     handleSubmit = query => {
      this.setState({
        nameImage: query,
        images: [], 
        page: 1, 
      });
    };


  
// addImages = async newImages => {
//   try {
//     this.setState({ isLoading: true });
//     const addedImages = await addNewQuiz(newQuiz);
//     this.setState(prevState => ({
//       quizItems: [...prevState.quizItems, addedQuiz],
//     }));
//   } catch (error) {
//     toast.error('ERROR ADDING QUIZ!');
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };

  render(){
    const {images, isLoading, error} = this.state;

      return (
    <div>
      <Searchbar onSubmit={this.handleSubmit}/>

      {isLoading && (<Loader/>)}

      <ImageGalery images = {images}/>

      {images.length > 0 && (<ButtonLoadMore/>)}

      <GlobalStyle/>
    </div>
  )}

};
