import Restcard from "./Restcard";

import { useEffect, useState } from "react";
// import{ resList}  from "../utils/mockData";
import Shimmer from "./ShimmerUi";

const Body = () => {

   const [ListOfRestaurants, setListOfRestraunt] = useState( [] );
   const [filteredRestaurant, setFilteredRestraunt] = useState( [] );
   const [searchText,setSearchText] = useState("");


//whenever state variables updated , react triggers a reconciliation cycle(re-renders the component)


   console.log("rendered2")
   

  useEffect(() => {
          fetchData();
        
  } ,[]);
    
   const fetchData = async ()  => {
    const data = await fetch(
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=100"
    );

    const json = await data.json();
    console.log(json)
    //optional chaining
    setListOfRestraunt(json?.data?.data);
    setFilteredRestraunt(json?.data?.data);

   };

   //conditional rendering
  //  if(ListOfRestaurants.length===0){
  //   return(
    
  //     <Shimmer/>
  //   );
  //  };

  // insted of above we can give a single return and using Ternary operator...
    return ListOfRestaurants.length===0 ? <Shimmer/> : (
    
      <div className="body-container">
        <div className="search">
          <input
            className="searchInput"
            placeholder="enter name"
            value = {searchText}
            onChange = {(e) => {   //AS soon as my input changes , my onChange function should also change my search text.
              setSearchText(e.target.value);
            }}

          />
          <button className="top-rated-search-btn" onClick={()=>{
            //filter the restraunt cards and update the UI.
            //searchText
            console.log(searchText);
          const filteredRestaurant =  ListOfRestaurants.filter(
              (res) => res.strMeal.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestraunt(filteredRestaurant);
          }}
          >search</button>
          <button className="top-rated-search-btn" onClick= {()=>{
            const filteredList =ListOfRestaurants.filter((res) => res.strRating > 4
          );
              setListOfRestraunt(filteredList);
          }}
          >
           top Restraunts

        </button>
        </div>
        <br />
        <div className="rest-container">
          {filteredRestaurant.map((item) => {
            return (
              <Restcard
                key={item.id}
                restList={item}
              />
            );
          })}
        </div>
      </div>
    );
  };

  export default Body;