import { RES_LOGO } from "../utils/constant";

const RestaurantCard = ({resData})=>{
    const {name, avgRating, cloudinaryImageId, costForTwo, cuisines} = resData.info;
    return <div className="res-card" >
        <img className="res-img" src={ RES_LOGO +cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>
    </div>
}

export default RestaurantCard;  