const Restcard = (resList) => {
  // console.log(resList);
  // /  destructuring of code---- if it is destructuring then no need to write like-- resList.resName etc
  const { strMeal, strMealThumb, strArea, strYoutube, strCategory } = resList.restList;
  return (
    <div className="card">
      <div className="card-header">
      <img
          className="meal-image"
          src={strMealThumb}
          alt="cup"
        />
      </div>
      <div className="card-body">
        <h4> Meal : {strMeal.split(" ")[1]}</h4>
        <p> Category : {strCategory}</p>
        <p> Location : {strArea}</p>
      </div>
      <a href={strYoutube} className="button">Watch Now</a>
    </div>
  );
};
export default Restcard;
