function ParkList({ activity, parks, onBack, onSelectPark }) {
    return (
      <div>
        <button onClick={onBack}>← Back to activities</button>
        <h2>Parks with: {activity.name}</h2>
  
        <ul className="park-list">
          {parks.map(park => (
            <li key={park.parkCode}>
              <button onClick={() => onSelectPark(park)}>
                {park.fullName} ({park.states})
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ParkList;
  