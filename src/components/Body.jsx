import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [data, setData] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="res-container">
      <div className="top">
        <button
          onClick={() => {
            const fil = data.filter((res) => res?.info?.avgRating > 4.2);
            setData(fil);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {data?.map((res) => (
        <RestaurantCard resData={res} key={res.info.id} />
      ))}
    </div>
  );
};

export default Body;
