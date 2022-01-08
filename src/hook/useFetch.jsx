import { useEffect, useState } from "react";

export default function useFetch(url) {
  // const config={
  //   method:'GET'
  // }
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchRequest = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    url && fetchRequest();
  }, [url]);

  return {
    loading,
    data,
    error,
    fetchRequest
  };
}
