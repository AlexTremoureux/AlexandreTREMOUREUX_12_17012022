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
      try {
        Promise.all(
          URLS.map((url) => fetch(url).then((resp) => resp.json()))
        ).then((userData) => {
          const userInfos = userData[0].data;
          const userActivity = userData[1].data;
          const userAverageSessions = userData[2].data.sessions;
          const userPerformance = userData[3].data;
          const userIsFind = (userData[0].data.id = id);
          userIsFind
            ? setData({
                Infos: userInfos,
                Activity: userActivity,
                AverageSessions: userAverageSessions,
                Performance: userPerformance,
              })
            : setError(true);
        });
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);
  return { isLoading, data, error };
}
