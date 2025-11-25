const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = process.env.REACT_APP_NPS_API_KEY;

async function npsFetch(path, params = {}) {
    const url = new URL(`${BASE_URL}${path}`);
  
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value);
      }
    });
  
    const res = await fetch(url.toString(), {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
  
    if (!res.ok) {
      throw new Error(`NPS API error: ${res.status}`);
    }
  
    const data = await res.json();
    return data.data;
  }
  
export async function fetchActivities() {
    return npsFetch('/activities', { limit: 100 });
  }
  
export async function fetchParksByActivity(activityId) {
    return npsFetch('/activities/parks', { id: activityId });
  }
  
export async function fetchParkByCode(parkCode) {
    const data = await npsFetch('/parks', { parkCode });
    return data[0];
  }  