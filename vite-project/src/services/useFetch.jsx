import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (LINK) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    try {
      let response = await axios.get(LINK);
      setLoading(true);
      const { data } = response;
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data };
};
