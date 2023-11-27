// Gallery.js


import HornedBeast from './HornedBeast';

const Gallery = () => {
  const beastData = [
    {
      title: 'Wild Beast',
      imageUrl: 'wild-beast.jpg',
      description: 'A description for the wild beast.',
    },
    {
      title: 'Majestic Horns',
      imageUrl: 'majestic-horns.jpg',
      description: 'A description for the majestic horns.',
    },
    // Add more beast data as needed
  ];

  const beastComponents = [];
  beastData.forEach((beast, index) => {
    beastComponents.push(
      <HornedBeast
        key={index}
        title={beast.title}
        imageUrl={beast.imageUrl}
        description={beast.description}
      />
    );
  });

  return <div className="gallery">{beastComponents}</div>;
};

export default Gallery;
