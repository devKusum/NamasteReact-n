import Restcard from "./Restcard";
import { useState } from "react";
// import { resList } from "../utils/mockData";
const Body = () => {

  const [ListOfRestaurants] = useState([
    {
      idMeal: "52785",
      strMeal: "Dal fry",
      strDrinkAlternate: null,
      strCategory: "Vegetarian",
      strArea: "Indian",
      strPrice:"9300",
     strRating: "5.6",
  
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
      strTags: "Curry,Vegetarian,Cake",
      strYoutube: "https://www.youtube.com/watch?v=J4D855Q9-jg",
     
      strSource: "https://www.instagram.com/p/BO21bpYD3Fu",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
      id: 1,
    
  
    },
    {
      idMeal: "52899",
      strMeal: "Dundee cake",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "British",
      strPrice:"900",
     strRating: "6.6",
   
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg",
      strTags: "heavy,Nutty,Fruity",
      strYoutube: "https://www.youtube.com/watch?v=4hEXsfpeMQE",
     
      strSource: "https://www.bbcgoodfood.com/recipes/2155640/dundee-cake",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
      id: 2,
     
    },
    {
      idMeal: "52907",
      strMeal: "Duck Confit",
      strDrinkAlternate: null,
      strCategory: "Miscellaneous",
      strArea: "French",
      strPrice:"600",
      strRating: "3.9",
  
      
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=MHhLJqghY-o",
     
      strSource: "https://www.bbcgoodfood.com/recipes/11753/nutty-chicken-curry",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
      id: 4,
      
    },
    {
      idMeal: "52858",
      strMeal: "New York cheesecake",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "American",
     strPrice:"300",
     strRating: "3.6",
   
     
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
      strTags: "Desert,Dairy,Pudding,Cake,Breakfast",
      strYoutube: "https://www.youtube.com/watch?v=tspdJ6hxqnc",
     
      strSource: "https://www.bbcgoodfood.com/recipes/2869/new-york-cheesecake",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
      id: 5,
    },
  ]);






// let ListOfRestaurants2 = [
//   {
//     idMeal: "52785",
//     strMeal: "Dal fry",
//     strDrinkAlternate: null,
//     strCategory: "Vegetarian",
//     strArea: "Indian",
//     strPrice:"9300",
//    strRating: "5.6",

//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
//     strTags: "Curry,Vegetarian,Cake",
//     strYoutube: "https://www.youtube.com/watch?v=J4D855Q9-jg",
   
//     strSource: "https://www.instagram.com/p/BO21bpYD3Fu",
//     strImageSource: null,
//     strCreativeCommonsConfirmed: null,
//     dateModified: null,
//     id: 1,
  

//   },
//   {
//     idMeal: "52899",
//     strMeal: "Dundee cake",
//     strDrinkAlternate: null,
//     strCategory: "Dessert",
//     strArea: "British",
//     strPrice:"900",
//    strRating: "6.6",
 
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg",
//     strTags: "heavy,Nutty,Fruity",
//     strYoutube: "https://www.youtube.com/watch?v=4hEXsfpeMQE",
   
//     strSource: "https://www.bbcgoodfood.com/recipes/2155640/dundee-cake",
//     strImageSource: null,
//     strCreativeCommonsConfirmed: null,
//     dateModified: null,
//     id: 2,
   
//   },
//   {
//     idMeal: "52907",
//     strMeal: "Duck Confit",
//     strDrinkAlternate: null,
//     strCategory: "Miscellaneous",
//     strArea: "French",
//     strPrice:"600",
//     strRating: "3.9",

    
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
//     strTags: null,
//     strYoutube: "https://www.youtube.com/watch?v=MHhLJqghY-o",
   
//     strSource: "https://www.bbcgoodfood.com/recipes/11753/nutty-chicken-curry",
//     strImageSource: null,
//     strCreativeCommonsConfirmed: null,
//     dateModified: null,
//     id: 4,
    
//   },
//   {
//     idMeal: "52858",
//     strMeal: "New York cheesecake",
//     strDrinkAlternate: null,
//     strCategory: "Dessert",
//     strArea: "American",
//    strPrice:"300",
//    strRating: "3.6",
 
   
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
//     strTags: "Desert,Dairy,Pudding,Cake,Breakfast",
//     strYoutube: "https://www.youtube.com/watch?v=tspdJ6hxqnc",
   
//     strSource: "https://www.bbcgoodfood.com/recipes/2869/new-york-cheesecake",
//     strImageSource: null,
//     strCreativeCommonsConfirmed: null,
//     dateModified: null,
//     id: 5,
//   },
// ];


    return (
      <div className="body-container">
        <div className="search">
          <input
            className="searchInput"
            placeholder="enter name"
          />
          <button className="top-rated-search-btn" onClick= {()=>{
            // console.log("button Clicked")

            //filter Logic here
            ListOfRestaurants = ListOfRestaurants.filter((res) => res.strRating > 4
          );
          console.log(ListOfRestaurants);
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