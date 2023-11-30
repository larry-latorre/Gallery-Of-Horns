import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import beastData from './data.json';
import { Container } from 'react-bootstrap';
import SelectedBeast from './components/SelectedBeast';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [show, setShow] = useState(false);
  const [beasts, setBeasts] = useState(beastData);
  
  
  function displayModal(name){
    let newBeasts = beasts.map((beastObj,)=>{
      if (beastObj.title === name){
        setSelectedBeast(beastObj)
        return beastObj;
      }
      return beastObj;
    })
   
    setBeasts(newBeasts);
    setShow(true)

  }
 const handleClose = () => setShow(false);

  const updateSelectedBeast = (newSelectedBeast) => {
    setSelectedBeast(newSelectedBeast);
  };
  
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery beastData={beastData} onImageClick={updateSelectedBeast} displayModal={displayModal}  />
      {show && <SelectedBeast selectedBeast={selectedBeast} show={show} handleClose= {handleClose}/>}
      <Footer />
    </Container>
  );
}

export default App;
