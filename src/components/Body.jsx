import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { FETCH_API } from "../utils/constant";
import useStatus from "../utils/useStatus";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [isReset, setIsReset] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_API);
    
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurant(restaurantData);
    setFilterRestaurant(restaurantData);
  };

  const handleTopRated = () => {
    const filterRes = restaurant.filter((res) => res?.info?.avgRating > 4.3);
    setFilterRestaurant(filterRes);
    setIsReset(true);
  };

  const handleReset = () => {
    setFilterRestaurant(restaurant);
    setIsReset(false);
  };

  const handleSearch = () => {
    const searchRes = restaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterRestaurant(searchRes);
    setSearch(" ");
  };

  const status = useStatus();

  if(!status){
    return(
      <h1>Look Like Offline. Plz check your Internet Connection.</h1>
    )
  }

  return restaurant.length === 0 ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <div className="top">
        <button onClick={handleTopRated}>Top Rated Restaurant</button>
        {isReset && <button onClick={handleReset}>Reset</button>}
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {filterRestaurant?.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
