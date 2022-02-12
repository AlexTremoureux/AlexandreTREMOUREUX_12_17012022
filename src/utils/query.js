import { useState, useEffect } from "react";
import { url } from "./constantes";

// Fetch all the necessary data with promise all and set up a loading spinner for the data loading time

export function useFetch(id) {
  
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const API_URL = url + id;
    // Necessary Endpoints
    const activity = API_URL + "/activity";
    const averageSessions = API_URL + "/average-sessions";
    const performance = API_URL + "/performance";
    // Array of queries
    const URLS = [API_URL, activity, averageSessions, performance];

    if (!id) return;
    
    setLoading(true);

    async function fetchData() {
      // returns a promise that either resolves when all of the promises in the array have resolved or fails with the first promise that fails within the array.
      Promise.all(
        URLS.map((url) =>
          fetch(url).then((resp) => {
            // If status is not ok
            if (resp.status !== 200) {
              setError(true);
              setLoading(false);
            }
            return resp.json();
          })
        )
      ).then((userData) => {
        // data formatting
        const [Infos, Activity, AverageSessions, Performance] = userData;
        setData({
          Infos: Infos.data,
          Activity: Activity.data,
          AverageSessions: AverageSessions.data.sessions,
          Performance: Performance.data,
        });
        
        // Loading spinner 
        setTimeout(() => setLoading(false), 1000);
      });
    }

    fetchData();
  }, [id]);
  return { isLoading, data, error };
}
