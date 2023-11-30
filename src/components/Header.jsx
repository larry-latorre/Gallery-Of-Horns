/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar'
function Header({title}){
    return(
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand >
                <h1>{title}</h1>
            </Navbar.Brand>
            
        </Navbar>
        
    )
}

export default Header