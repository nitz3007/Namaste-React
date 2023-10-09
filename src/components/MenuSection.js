import React from "react";
import Veg from '../assets/veg.jpg';
import NonVeg from '../assets/non-veg.png';
import {CARD_IMG_URL} from "../constants";
import {useDispatch} from 'react-redux';
import {addItem} from '../utils/cartSlice';
import DownArrow from "../assets/chevron-down.svg";

const MenuSection = ({cardInfo, isVisible, setIsVisible, restaurantName, restaurantArea}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        const cartData = {
            restaurantName: restaurantName,
            restaurantArea: restaurantArea,
            item: item
        }
        dispatch(addItem(cartData));
    }
    return (
        <div className="px-4">
            <hr className="border-b mt-2 mb-2"></hr>           
            <div className="py-2 flex justify-between">
                <span className="font-sans font-bold text-xl ">{cardInfo.title} ({cardInfo.itemCards.length})</span>
                {isVisible?
                    <button onClick={()=>setIsVisible(false)}><img src={DownArrow} alt="hide" className="rotate-180"/></button> :
                    <button onClick={()=>setIsVisible(true)}><img src={DownArrow} alt="show"/></button>
                }
            </div>
            {isVisible && cardInfo.itemCards.map((item, i) => 
                <>
                <div key={i} className="flex justify-between py-4">
                    <div>
                        <ul className="list-none inline-flex">
                            <li className="pr-4">{item?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ?
                                <img className="w-4 h-4" src={Veg} alt="veg"/> :
                                <img className="w-4 h-4" src={NonVeg} alt="non-veg"/>}
                            </li>
                        </ul>
                        <h3 className="font-sans font-semibold">{item?.card?.info?.name}</h3>
                        <h4 className="font-sans text-sm text-slate-700">Rs. {item?.card?.info?.price/100}</h4>
                        <p className="mt-2 text-xs text-slate-400">{item?.card?.info?.description}</p>
                    </div>
                    <div className="relative ml-4">
                        <button className="border-slate-300 border-[1px] rounded-lg p-2">
                            <img src={CARD_IMG_URL + item?.card?.info?.imageId}
                            alt="dish"
                            className="h-[6rem] w-[7.375rem] onject-cover"
                            />
                        </button>
                        <button 
                            className="absolute text-[#60b246] font-bold font-sans border-slate-300 border-[1px] rounded-sm px-4 py-1 left-1/2 -translate-x-1/2 z-10 bg-white bottom-1/4 translate-y-full"
                            onClick={()=>handleAddItem(item.card.info)} data-testid="add-btn">
                            ADD
                        </button>
                    </div>
                </div>
                <hr className="border-b mt-6"></hr>
                </>
            )}
            
        </div>
    );
}

export default MenuSection;