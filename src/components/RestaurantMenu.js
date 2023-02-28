import { useParams } from "react-router-dom";
import {CARD_IMG_URL} from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const params = useParams();
    const restaurantDetail = useRestaurant(params.id);

    return (
        (!restaurantDetail) ?
        <ShimmerUI/> :
        <>
            <div>
                <img src={CARD_IMG_URL + restaurantDetail.cloudinaryImageId}/>
                <h2>{restaurantDetail.name}</h2>
                <h3>Rating : {restaurantDetail.avgRating}</h3>
                <h3>Cost for Two: {restaurantDetail.costForTwoMsg}</h3>
            </div>
            <div>
                <ul>
                    {Object.values(restaurantDetail.menu.items).map(e=>(
                        <li key={e.id}>{e.name}</li>
                    ))}   
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu;