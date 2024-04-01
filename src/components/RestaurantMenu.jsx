import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  if (resInfo === null) return <h2>Loading...</h2>;

  const { name, city, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h2>
        {name} - {avgRating} stars
      </h2>
      <h3>{city}</h3>
      <h4>{costForTwoMessage}</h4>
      <p>{cuisines}</p>

      <ul>
        {itemCards.map((res) => (
          <div key={res.card.info.id}>
            <li>
              {res.card.info.name} -{" "}
              {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
