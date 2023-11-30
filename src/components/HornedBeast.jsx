/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Image } from "react-bootstrap";



const HornedBeast = ({displayModal, title, imageUrl, description, onImageClick}) => {
const [status, setStatus] = useState('like')
function handleClick(){
    if (status === 'like'){
        setStatus('liked')
    }else {
        setStatus('like')
    }
}

function handleOpenModal(){
displayModal(title)
}

    return(
    <div onClick={onImageClick}>
        <h2>Gallery of Horns</h2>
        <Image onClick = {handleOpenModal} src={imageUrl} alt={title} title={title} rounded fluid></Image>
        <h3 onClick={handleClick}>{status}</h3> 
        <p>{description}</p>
    </div>
        
    )
}

export default HornedBeast