import Navbar from "./Navbar";
import React, { useState } from "react";
import ActivitySearch from "./ActivitySearch";
import ParkList from "./ParkList";
import ParkDetails from "./ParkDetails";
import { fetchParkByCode } from "../api/nps";


function Activities(){
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="activities-section" id="activities-section">

      <h2 className="title">ACTIVITIES</h2>

        {/* STATE 1 */}
        {!selectedActivity && (
          <ActivitySearch
            onActivitySelected={(activity, parks) => {
              setSelectedActivity(activity);
              setParks(parks);
            }}
          />
        )}

        {/* STATE 2 */}
        {selectedActivity && !selectedPark && (
          <ParkList
            activity={selectedActivity}
            parks={parks}
            onBack={() => {
              setSelectedActivity(null);
              setParks([]);
            }}
            onSelectPark={async (parkStub) => {
              const fullPark = await fetchParkByCode(parkStub.parkCode);
              setSelectedPark(fullPark);
            }}            
          />
        )}

        {/* STATE 3 */}
        {selectedPark && (
          <ParkDetails
            park={selectedPark}
            onBack={() => setSelectedPark(null)}
          />
        )}

      </div>
  );
}

export default Activities;
