import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
