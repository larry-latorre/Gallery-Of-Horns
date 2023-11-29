/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import HornedBeast from './HornedBeast';
import { Container, Row, Col } from 'react-bootstrap';


const Gallery = ({ beastData }) => {
  const beastComponents = beastData.map((beast) => (
    <Col key={beast._id} xs={12} sm={6} md={4} lg={3}>
    <HornedBeast
      key={beast._id}
      title={beast.title}
      imageUrl={beast.image_url}
      description={beast.description}
    />
    </Col>
  ));

  return( <Container fluid>
    <Row>{beastComponents}</Row>
  </Container>
  );
};

export default Gallery;

  

