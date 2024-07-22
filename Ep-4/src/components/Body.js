import Restcard from "./Restcard";
import { resList } from "../utils/mockData";
const Body = () => {
    return (
      <div className="body-container">
        <div className="search">
          <input
            className="searchInput"
            placeholder="enter name"
          />
          <button className="search-btn">Ok</button>
        </div>
        <br />
        <div className="rest-container">
          {resList.map((item) => {
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