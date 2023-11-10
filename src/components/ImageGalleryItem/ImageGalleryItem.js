import {Item, Image} from './ImageGalleryItem.styled';

export const ImagesGalleryItem = ({img, alt})=>{
return (
    <Item>
         <Image src={img} alt={alt} />
    </Item>
)
}