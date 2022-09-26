import { useState, useEffect } from 'react';
import axios from 'axios';

export type TApiResponse = {
  data: any;
  error: any;
  loading: Boolean;
};

const useFetch = (
  url: string,
  key: string,
  search: string | number | null,
): TApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const completeUrl =
    typeof search === 'string'
      ? `${url}/${key}/search/${search}/`
      : `${url}/${key}/${search}/`;

  useEffect(() => {
    if (search === null) {
      return;
    }

    const getAPIData = () => {
      setLoading(true);
      axios
        .get(completeUrl)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    };
    getAPIData();
  }, [completeUrl, search]);

  return { data, error, loading };
};

export default useFetch;
