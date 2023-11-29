{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import beastData from './data.json';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Gallery beastData={beastData} />
      <Footer />
    </Container>
  );
}

export default App;
