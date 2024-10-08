import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [ListOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState(""); //never create useState outside of your body component.

  //whenever state variables updated , react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10"
    );
    const json = await data.json();
    //optional chaining
    setListOfRestraunt(json?.data?.data);
    setFilteredRestraunt(json?.data?.data);
   
  };

  const onlineStatus = useOnlineStatus();
if (onlineStatus === false)
  return(

 <h1 className="onlineStatus">Please check your INTERNET connection</h1>
  );

  // if (onlineStatus === true) {
  //   alert("your are online ")
  //   }  else{
  //     alert("your are offline ")
      

  // }

   


  //conditional rendering
  //  if(ListOfRestaurants.length===0){
  //   return(

  //     <Shimmer/>
  //   );
  //  };

  // instead of above we can give a single return and using Ternary operator...
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          className="searchInput"
          placeholder="enter name"
          value={searchText}
          onChange={(e) => {
            //AS soon as my input changes , my onChange function should also change my search text.
            setSearchText(e.target.value);
          }}
        />
        <button
          className="button2"
          onClick={() => {
            //filter the restraint cards and update the UI.
            //searchText
            console.log(searchText);
            const filteredRestaurant = ListOfRestaurants.filter(
              (res) =>
                res.strCategory
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res.strMeal.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestraunt(filteredRestaurant);
            setSearchText("");
          }}
        >
          search
        </button>
        <button
          className="button2"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.strCategory === "Vegetarian"
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Vegetarian food
        </button>
      </div>
      <br />
      <div className="rest-container">
        {filteredRestaurant.map((item) => {
          return <Restcard key={item.id} restList={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
