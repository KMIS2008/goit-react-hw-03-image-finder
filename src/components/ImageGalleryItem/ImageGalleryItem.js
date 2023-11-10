import {Item, Image} from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import {ImgModal} from '../Modal/Modal';

export class ImagesGalleryItem extends Component  {
    state = {
        isModalOpen: false,
      };
    
      openModal = () => {
        this.setState({
          isModalOpen: true,
        });
      };
    
      closeModal = () => {
        this.setState({
          isModalOpen: false,
        });
      };

render(){
    const { image } = this.props;
    
    return (
        <div>
    <Item>
         <Image src={image.webformatURL} alt={image.tags} onClick={this.openModal} />
    </Item>
<ImgModal img={image.largeImageURL} alt = {image.tags} onClose={this.closeModal} onOpen = {this.state.isModalOpen}/>
        </div>
  
)

}
}