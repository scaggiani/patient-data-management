import { useState, useEffect } from "react";

const UseApiResult = (request) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((json) => setResults(json))
      .catch((error) => setError(error));
  }, [request]);

  return [results, error];
};

export default UseApiResult;
