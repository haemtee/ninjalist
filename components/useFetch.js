import { useState, useEffect } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(uri)
      .then((res) => {
        return res.json;
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setIsError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setIsError(err.message);
      });
  }, [uri]);
  return {};
};

export default useFetch;
