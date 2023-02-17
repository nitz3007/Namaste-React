import {CARD_IMG_URL} from '../constants';

const RestaurantCard = ({name, cloudinaryImageId, cuisines, deliveryTime, avgRating}) => {
    return (
        <div className='card'>
            <img src={ CARD_IMG_URL + cloudinaryImageId}
                alt="restaurant-image"/>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{deliveryTime} minutes</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

export default RestaurantCard;