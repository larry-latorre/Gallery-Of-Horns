/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Image } from "react-bootstrap";




const HornedBeast = ({displayModal, title, imageUrl, description, onImageClick}) => {
const [count , setCount] = useState(0)

function updateCount(){
    setCount(count + 1)
    onImageClick();
}

function handleOpenModal(){
displayModal(title)

}

    return(
    <div onClick={updateCount}>
        <h2>Gallery of Horns</h2>
        <Image onClick = {handleOpenModal} src={imageUrl} alt={title} title={title} rounded fluid></Image>
        <h3>♥ Likes {count}</h3> 
        <p>{description}</p>
    </div>
        
    )
}

export default HornedBeast