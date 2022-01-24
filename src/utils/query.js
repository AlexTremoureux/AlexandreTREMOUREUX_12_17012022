import { useState, useEffect } from "react";

export function useFetch(src, id) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(src);
        const data = await response.json();
        const userIsFind = data.data.id = id
        userIsFind?
        setData(data) : setError(true);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [src, id]);
  return { isLoading, data, error };
}
