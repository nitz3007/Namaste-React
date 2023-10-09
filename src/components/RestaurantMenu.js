import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MenuShimmer from "./MenuShimmer";
// import useRestaurant from "../utils/useRestaurant";
import GreenStar from '../assets/green_star.svg';
import Clock from '../assets/clock.png';
import Rupee from '../assets/indian-rupee-sign.png';
import MenuSection from "./MenuSection";
import {RESTAURANT_DETAILS_API} from "../constants";


const RestaurantMenu = () => {
    const params = useParams();
    // const restaurantDetail = useRestaurant(params.id);
    const [restaurantDetails, setRestaurantDetails]= useState(null);
    const [visibleSection, setVisibleSection] = useState("");

    useEffect(()=> {
        getRestaurantDetails();
    },[]);

    useEffect(()=>{
        if(restaurantDetails) {
            setVisibleSection( restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);
        } 
    },[restaurantDetails])

    const getRestaurantDetails = async() => {
        const response = await fetch(RESTAURANT_DETAILS_API + params.id);
        const json = await response.json();
        setRestaurantDetails(json.data);
        
    }

    const restaurantInfo = restaurantDetails?.cards[0]?.card?.card?.info;
    const menuInfo = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    return (
        (!restaurantDetails) ?
        <MenuShimmer/> :
        <div className="mx-40 my-8" data-testid="menu">
            {/* Restaurant Header */}
            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div>
                        <div className="font-sans font-bold text-lg">{restaurantInfo.name}</div>
                        <div className='font-sans text-sm text-slate-500'>{restaurantInfo.cuisines.join(", ")}</div>
                        <div className='font-sans text-sm text-slate-500'>{restaurantInfo.areaName}, {restaurantInfo.sla.lastMileTravelString}</div>
                    </div>
                    <div className="border-2 p-2 rounded-lg">
                        <div className="flex text-[#3d9b6d] font-semibold items-center justify-center"><img className="w-4 h-4 mr-1" src={GreenStar} alt="star"/> {restaurantInfo.avgRatingString}</div>
                        <div className="h-[1px] px-2 mb-2 mt-1 bg-slate-300"></div>
                        <div className="text-xs font-sans text-[#8b8d97] font-semibold">{restaurantInfo.totalRatingsString}</div>
                    </div>
                </div>
                
                <hr className="border-b border-dashed"/>
                <div className="my-4">
                    <ul className="list-none">
                        <li className="inline-flex items-center mr-6">
                            <img className="w-4 h-4 mr-2" src={Clock} alt="clock"/>
                            <span className="font-sans font-bold text-sm">{restaurantInfo?.sla?.slaString}</span>
                        </li>
                        <li className="inline-flex items-center">
                            <img className="w-4 h-4 mr-2" src={Rupee} alt="Rs."/>
                            <span className="font-sans font-bold text-sm">{restaurantInfo?.costForTwoMessage}</span>
                        </li>
                    </ul>
                </div>
                
                <p className="my-2 font-semibold font-serif text-lg text-center">--- MENU ---</p>
     
            </div>

            <div>
                {menuInfo.map((category)=>(
                    category?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
                    <MenuSection 
                        key = {category?.card?.card?.title}
                        cardInfo = {category?.card?.card} 
                        isVisible = {visibleSection === category?.card?.card?.title}
                        setIsVisible = {()=> setVisibleSection(!visibleSection ? category?.card?.card?.title : "")}
                        restaurantName = {restaurantInfo.name}
                        restaurantArea = {restaurantInfo.areaName}
                    />
                ))}   
            </div>
        </div>
    )
}

export default RestaurantMenu;