/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Container, Row , Col, Image} from "react-bootstrap";
const HornedBeast = ({ title, imageUrl, description }) => {
const [status, setStatus] = useState('like')
function handleClick(){
    if (status === 'like'){
        setStatus('liked')
    }else {
        setStatus('like')
    }
}
    return(
    <>
        <h2>Gallery of Horns</h2>
        <Image src={imageUrl} alt={title} title={title} rounded fluid></Image>
        <h3 onClick={handleClick}>{status}</h3> 
        <p>{description}</p>
    </>
        
    )
}

export default HornedBeast