import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        // making this super flexible with ternaries, if the calling component needs to just make a GET request it won't need to provide extraneous information like method, headers and body
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      // this custom hook is ONLY responsible for getting the data, how the data is transformed/used/etc. will be handled by the `applyData` method passed into this `sendRequest` method by the calling component
      console.log(data);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return { sendRequest, isLoading, error };
};

export default useHttp;
