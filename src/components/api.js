import axios from "axios";



export async function fetchImages(nameImage, page = 1){
const apiKey = '39644186-d60e3e2f5d0cd6a0038c24fc2';
const url =  `https://pixabay.com/api/?q=${nameImage}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    const response = await axios.get(url);
    
   return response.data; 
   }