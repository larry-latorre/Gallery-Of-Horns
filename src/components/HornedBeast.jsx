const HornedBeast = ({ title, imageUrl, description }) => {
    return(
        <>
        <h2>Gallery of Horns</h2>
        <img src={imageUrl} alt={title} title={title} />
        <p>{description}</p>
        </>
        
    )
}

export default HornedBeast