function ParkDetails({ park, onBack }) {
    const img = park.images?.[0];
  
    return (
      <div>
        <button onClick={onBack}>← Back to parks</button>
        <h2>{park.fullName}</h2>
        <p>{park.description}</p>
  
        {img && (
          <img src={img.url} alt={img.altText} style={{maxWidth:"350px"}} />
        )}
  
        {park.url && (
          <p>
            <a href={park.url} target="_blank" rel="noreferrer">
              Official Park Website
            </a>
          </p>
        )}
      </div>
    );
  }
  
  export default ParkDetails;
  