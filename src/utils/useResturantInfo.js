import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useResturantInfo = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = fetch(MENU_API + resId)
      .then((data) => data.json())
      .then((data2) => setRestInfo(data2));
  };

  return restInfo;
};

export default useResturantInfo;
