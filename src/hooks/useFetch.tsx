import { Options } from "ky";
import { useState, useEffect, useCallback } from "react";
import { sendRequest, RequestType } from "../helpers/request";

type UseFetchProps = {
  url: string;
  type?: RequestType;
  options?: Options;
};

export const useFetch = <T,>({ url, type, options }: UseFetchProps) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState(false);

  // function to fetch data
  const fetch = useCallback(async () => {
    setError(false);
    try {
      const fetchedData = await sendRequest<T>(url, type ?? "get", options);
      setData(fetchedData);
    } catch {
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    // on first load fetch data
    fetch();
  }, [fetch]);

  return {
    data,
    error,
    revalidate: fetch,
  };
};
