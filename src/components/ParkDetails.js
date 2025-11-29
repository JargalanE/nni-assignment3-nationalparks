function ParkDetails({ park, onBack }) {
    const img = park.images?.[0];
  
    return (
      <div>
        
        <h2 className="park_title">{park.fullName}</h2>

        <div className="park_description">
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
        

        <button onClick={onBack} className="back_button">← Back to parks</button>
      </div>
    );
  }
  
  export default ParkDetails;
  