import Restcard from "./Restcard";

import { useEffect, useState } from "react";
import{ resList}  from "../utils/mockData";
const Body = () => {

   const [ListOfRestaurants, setListOfRestraunt] = useState( resList );
   

  useEffect(() => {
          fetchData();
        
  } ,[]);
    
   const fetchData = async ()  => {
    const data = await fetch(
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=1000"
    );

    const json = await data.json();
    console.log(json)
    setListOfRestraunt(json.data.data);
    console.log(json.data.data)
  

   };
    return (
      <div className="body-container">
        <div className="search">
          <input
            className="searchInput"
            placeholder="enter name"
          />
          <button className="top-rated-search-btn" onClick= {()=>{
            const filteredList =ListOfRestaurants.filter((res) => res.strRating > 4
          );
              setListOfRestraunt(filteredList);
          }}
          >
            search for top Restraunts

        </button>
        </div>
        <br />
        <div className="rest-container">
          {ListOfRestaurants.map((item) => {
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