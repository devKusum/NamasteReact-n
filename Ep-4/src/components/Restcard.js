const Restcard = (resList) => {
  // console.log(resList);
  // /  destructuring of code---- if it is destructuring then no need to write like-- resList.resName etc
  const { strMeal, strMealThumb, strArea,strPrice, strRating } = resList.restList;
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="res-logo"
          src={strMealThumb}
          alt="cup"
        />
      </div>
      <div className="card-body">
        <h4>{strArea}</h4>
        <h4>{strMeal}</h4>
      
    
      </div>
      <div className="card-footer">
   
      <h4>Price:{strPrice}/-</h4>
        <h4>Star:{strRating}/-</h4>
      </div>
    </div>
  );
};
export default Restcard;
