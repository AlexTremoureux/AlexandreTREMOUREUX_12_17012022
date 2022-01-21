import { useState, useEffect } from "react";

export const getData = async (source) => {
  return await fetch(source).then((response) => response.json());
};

export function useFetch(src) {
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
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [src]);
  return { isLoading, data, error };
}

export function useFetchItemById(src, id) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    setLoading(true);
    async function FetchItemById() {
      try {
        const response = await fetch(src);
        const data = await response.json();
        const itemToDisplay = data.find((location) => location.id === id);
        const locationIsFind = itemToDisplay ? itemToDisplay.id === id : false;
        locationIsFind ? setData(itemToDisplay) : setError(true);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    FetchItemById();
  }, [src, id]);
  return { isLoading, data, error };
}
