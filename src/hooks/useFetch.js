import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    fetchData(url);
  }, []);

  return { data, isPending, error };
}
