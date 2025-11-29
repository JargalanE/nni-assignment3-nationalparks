import { useEffect, useState } from 'react';
import { fetchActivities, fetchParksByActivity, fetchParkByCode } from '../api/nps';

function ActivitySearch({ onActivitySelected }) {
  const [activities, setActivities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const data = await fetchActivities();
      setActivities(data);
      setFiltered(data);
    }
    load();
  }, []);

  useEffect(() => {
    const s = search.toLowerCase();
    setFiltered(
      activities.filter(a => a.name.toLowerCase().includes(s))
    );
  }, [search, activities]);

  const handleClick = async (activity) => {
    const activityParks = await fetchParksByActivity(activity.id);
    const allParks = activityParks.flatMap(ap => ap.parks);

    const seen = new Set();
    const parks = [];
    for (const p of allParks) {
      if (!seen.has(p.parkCode)) {
        seen.add(p.parkCode);
        parks.push(p);
      }
    }  
    onActivitySelected(activity, parks);
  };

  return (
    <div className="activities-container">

      <input
        className="search-input"
        placeholder="Search activities…"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="activities-grid">
        {filtered.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <img
              className="activity-image"
              src={`icons/${activity.name.toLowerCase().replace(/ /g, "_")}.svg`}
              alt={activity.name}
            />

            <button
              className="activity-button"
              onClick={() => handleClick(activity)}
            >
              {activity.name}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}  

export default ActivitySearch;