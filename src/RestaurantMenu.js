import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {RESTAURANT_DETAILS_API, CARD_IMG_URL} from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurantDetail, setRestaurantDetails] = useState(null); 
    useEffect(()=>{
        getRestaurantDetails();
    },[])

    const getRestaurantDetails = async() => {
        const response = await fetch(RESTAURANT_DETAILS_API + params.id);
        const json = await response.json();
        console.log(json);
        setRestaurantDetails(json?.data);
    }

    

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