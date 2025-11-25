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
    const parkCodes = activityParks.flatMap(ap =>
      ap.parks.map(p => p.parkCode)
    );
    const unique = [...new Set(parkCodes)];
    const parks = [];
    for (const code of unique) {
      const park = await fetchParkByCode(code);
      parks.push(park);
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
            <div className="activity-image" />
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