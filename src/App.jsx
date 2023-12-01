import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import beastData from './data.json';
import { Container } from 'react-bootstrap';
import SelectedBeast from './components/SelectedBeast';
import HornsSelector from './components/HornsSelector';

export default function App() {
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

  function handleSelect(choice){
   
    let filteredBeastData; 

    if (choice === "1"){
      filteredBeastData = beastData.filter(beast => beast.horns === 1)
      }else if(choice === "2"){
        filteredBeastData = beastData.filter(beast => beast.horns === 2)  
      }else if(choice === "3"){
        filteredBeastData = beastData.filter(beast => beast.horns === 3) 
      }else{
        filteredBeastData = beastData;
      }
      
      setBeasts(filteredBeastData);
      console.log(filteredBeastData);
  }
  
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <HornsSelector onSelect={handleSelect}/>
      <Gallery beastData={beasts} onImageClick={updateSelectedBeast} displayModal={displayModal}  />
      {show && <SelectedBeast selectedBeast={selectedBeast} show={show} handleClose= {handleClose}/>}
      <Footer />
    </Container>
  );
}


