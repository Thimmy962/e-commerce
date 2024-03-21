import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      if (response.status == 200)
      {
        setData(json);
      }

      else{
        setError("Something went wrong")
      }
    };

    fetchData();
  }, [url]);
  return { data, error };
};