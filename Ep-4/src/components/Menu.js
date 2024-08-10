//`https://api.freeapi.app/api/v1/public/meals/${id}`--------------Menu_API

import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  const { id } = useParams();

  const mealData = useRestaurantMenu(id);
  console.log(mealData.data);

  const {
    strMealThumb,
    strArea,
    strCategory,
    strMeal,
    strInstructions,
    strTags,
    strYoutube,
  } = mealData.data;

  //const [mealData, setMealData] = useState([]);
  // const { strMealThumb, strArea, strCategory, strMeal, strInstructions, strTags, strYoutube } = mealData;

  // useEffect(() => {
  //     fetchApiData();
  // }, [id]);

  // const fetchApiData = async () => {
  //     const res = await fetch(`https://api.freeapi.app/api/v1/public/meals/${id}`);
  //     const resData = await res.json();
  //     setMealData(resData?.data);
  // }

  return (
    <div className="meal-card">
      <div className="meal-details">
        <h2> {strMeal} </h2>
        <p>
          {" "}
          <span> Category : </span> {strCategory}{" "}
        </p>
        <p>
          {" "}
          <span> Tags :</span> {strTags}{" "}
        </p>
        <p>
          {" "}
          <span> Location : </span> {strArea}{" "}
        </p>
        <p>
          {" "}
          <span> Instructions : </span> {strInstructions}{" "}
        </p>
      </div>
      <div className="meal-thumb">
        <Link to={strYoutube}>
          {" "}
          <img src={strMealThumb} alt="card-img" title="Goto Youtube" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
