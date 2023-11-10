import {ImagesGallery} from './ImageGallery.styled';
import {ImagesGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'


export const ImageGalery =({images})=>{
    return(
        <ImagesGallery>
            {images.map(image =>{
                return (
                   <ImagesGalleryItem key = {image.id} image ={image}/> 
                )
            })
            }
        </ImagesGallery>
    )
}