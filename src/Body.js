import {useState, useEffect} from 'react';
import RestaurantCard from "./ReataurantCard";
import { restaurantList } from "../constants";
import ShimmerUI from './ShimmerUI';
import {GET_ALL_RESTAURANTS_API} from '../constants';

function filterRestaurants (searchText, restaurants) {
    const filteredData = restaurants.filter((res) => 
        res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}

const Body = () => {

    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        getRestaurants();
    },[]);

    const getRestaurants = () => {
        fetch(GET_ALL_RESTAURANTS_API)
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Network response is not OK");
                }
                return response.json();
            })
            .then((data)=>{
                setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
                setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
            })
            .catch((error)=>{
                console.log("Something is wrong with your fetch operation!");
            })
    }

    console.log("render");
    return (
        restaurants.length === 0 ?
            <ShimmerUI/>
            :
            <>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value); } } />
                    <button
                        onClick={() => {
                            const data = filterRestaurants(searchInput, restaurants);
                            setFilteredRestaurants(data);
                        } }>
                        Search
                    </button>
                </div>
                <div className='restaurant-list'>
                    {/* the spread operator is spreading the restaurantList[i].data object into
                    individual props which can then be destructured as prop parameter with
                    their individual keys */}

                    {filteredRestaurants.length === 0 ?
                        <h3>No Restaurants matches with your search</h3>:
                        filteredRestaurants.map(restaurant => (
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        ))
                    }
                </div>
            </>
    )
};

export default Body;