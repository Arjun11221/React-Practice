const RestaurantCard = ({resData})=>{
    const {name, avgRating, cloudinaryImageId, costForTwo, cuisines} = resData.info;
    return <div className="res-card" >
        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>

    </div>
}

export default RestaurantCard;  