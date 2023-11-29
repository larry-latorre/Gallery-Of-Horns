/* eslint-disable react/prop-types */

import HornedBeast from './HornedBeast';



const Gallery = ({ beastData }) => {
  const beastComponents = beastData.map((beast) => (
    <HornedBeast
      key={beast._id}
      title={beast.title}
      imageUrl={beast.image_url}
      description={beast.description}
    />
  ));

  return <div className="gallery">{beastComponents}</div>;
};

export default Gallery;

  

