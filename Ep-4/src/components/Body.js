import Restcard from "./Restcard";
import { useState } from "react";
import { resList}  from "../utils/mockData";
const Body = () => {

  const [ListOfRestaurants, setListOfRestraunt] = useState( [ 
    {
    idMeal: "52785",
    strMeal: "Dal fry",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Indian",
    strInstructions:
      "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    strTags: "Curry,Vegetarian,Cake",
    strYoutube: "https://www.youtube.com/watch?v=J4D855Q9-jg",
    strIngredient1: "Toor dal",
    strIngredient2: "Water",
    strIngredient3: "Salt",
    strIngredient4: "Turmeric",
    strIngredient5: "Ghee",
    strIngredient6: "Chopped tomatoes",
    strIngredient7: "Cumin seeds",
    strIngredient8: "Mustard Seeds",
    strIngredient9: "Bay Leaf",
    strIngredient10: "Green Chili",
    strIngredient11: "Ginger",
    strIngredient12: "Cilantro",
    strIngredient13: "Red Pepper",
    strIngredient14: "Salt",
    strIngredient15: "Sugar",
    strIngredient16: "Garam Masala",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 cup",
    strMeasure2: "2-1/2 cups",
    strMeasure3: "1 tsp",
    strMeasure4: "1/4 tsp",
    strMeasure5: "3 tbs",
    strMeasure6: "1 cup",
    strMeasure7: "1/2 tsp",
    strMeasure8: "1/2 tsp",
    strMeasure9: "2",
    strMeasure10: "1 tbs chopped",
    strMeasure11: "2 tsp shredded",
    strMeasure12: "2 tbs ",
    strMeasure13: "1/2 tsp",
    strMeasure14: "1/2 tsp",
    strMeasure15: "1 tsp",
    strMeasure16: "1/4 tsp",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strRating: "4.6",
    strPrice: "3000",
    strSource: "https://www.instagram.com/p/BO21bpYD3Fu",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
    id: 1,
    
  },

  {
    idMeal: "52785",
    strMeal: "Dal fry",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Indian",
    strInstructions:
      "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    strTags: "Curry,Vegetarian,Cake",
    strYoutube: "https://www.youtube.com/watch?v=J4D855Q9-jg",
    strIngredient1: "Toor dal",
    strIngredient2: "Water",
    strIngredient3: "Salt",
    strIngredient4: "Turmeric",
    strIngredient5: "Ghee",
    strIngredient6: "Chopped tomatoes",
    strIngredient7: "Cumin seeds",
    strIngredient8: "Mustard Seeds",
    strIngredient9: "Bay Leaf",
    strIngredient10: "Green Chili",
    strIngredient11: "Ginger",
    strIngredient12: "Cilantro",
    strIngredient13: "Red Pepper",
    strIngredient14: "Salt",
    strIngredient15: "Sugar",
    strIngredient16: "Garam Masala",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 cup",
    strMeasure2: "2-1/2 cups",
    strMeasure3: "1 tsp",
    strMeasure4: "1/4 tsp",
    strMeasure5: "3 tbs",
    strMeasure6: "1 cup",
    strMeasure7: "1/2 tsp",
    strMeasure8: "1/2 tsp",
    strMeasure9: "2",
    strMeasure10: "1 tbs chopped",
    strMeasure11: "2 tsp shredded",
    strMeasure12: "2 tbs ",
    strMeasure13: "1/2 tsp",
    strMeasure14: "1/2 tsp",
    strMeasure15: "1 tsp",
    strMeasure16: "1/4 tsp",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strRating: "2.6",
    strPrice: "5000",
    strSource: "https://www.instagram.com/p/BO21bpYD3Fu",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
    id: 2,
    
  },


]
  );

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