import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [mealData, setMealData] = useState([]);


  //fetchData
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.freeapi.app/api/v1/public/meals/${id}`
    );
    const json = await data.json();
    setMealData(json.data);
  };
  return mealData;
};

export default useRestaurantMenu;
