import { useState, useEffect } from "react";

export function useFetch(id) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const API_URL = "http://localhost:3000/user/" + id;
    const activity = API_URL + "/activity";
    const averageSessions = API_URL + "/average-sessions";
    const performance = API_URL + "/performance";
    const URLS = [API_URL, activity, averageSessions, performance];
    if (!id) return;
    setLoading(true);

    async function fetchData() {
      Promise.all(
        URLS.map((url) =>
          fetch(url).then((resp) => {
            if (resp.status !== 200) {
              setError(true);
              setLoading(false);
            }
            return resp.json();
          })
        )
      ).then((userData) => {
        const [Infos, Activity, AverageSessions, Performance] = userData
        setData({
          Infos: Infos.data,
          Activity: Activity.data,
          AverageSessions: AverageSessions.data.sessions,
          Performance: Performance.data,
        });
        setLoading(false);
      });
    }

    fetchData();
  }, [id]);
  return { isLoading, data, error };
}
