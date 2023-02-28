import {useState, useEffect} from 'react';
import {RESTAURANT_DETAILS_API} from "../constants";

const useRestaurant = (resId) => {
    const [restaurantDetails, setRestaurantDetails]= useState(null);

    useEffect(()=> {
        getRestaurantDetails();
    },[]);

    const getRestaurantDetails = async() => {
        const response = await fetch(RESTAURANT_DETAILS_API + resId);
        const json = await response.json();
        setRestaurantDetails(json.data);
    }

    return restaurantDetails;
}

export default useRestaurant;