import {useState, useEffect, useContext} from 'react';
import RestaurantCard from "./ReataurantCard";
import {Link} from "react-router-dom";
import ShimmerUI from './ShimmerUI';
import {GET_ALL_RESTAURANTS_API} from '../constants';
import {filterRestaurants} from '../utils/helper';
import UserContext from '../utils/userContext';

const Body = () => {

    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [totalRestaurants, setTotalRestaurants] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const {user, setUser} = useContext(UserContext);
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
                setTotalRestaurants(data?.data?.cards[2]?.data?.data?.totalOpenRestaurants);
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
                <div className="flex justify-between h-14 mx-8 items-center">
                    <p className='text-2xl font-semibold font-sans'>{totalRestaurants} Restaurants</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Search Restaurants"
                            value={searchInput}
                            onChange={(e) => { setSearchInput(e.target.value); } } 
                            className="border-2 w-80 px-4 py-2 rounded-lg"
                        />
                        <button
                            onClick={() => {
                                const data = filterRestaurants(searchInput, restaurants);
                                setFilteredRestaurants(data);
                            } }
                            className="bg-[#fc8019] text-white px-4 py-2 rounded-md ml-2"
                        >
                            Search
                        </button>
                        <input value={user.name} onChange={(e)=>setUser(
                            {
                                ...user,
                                name: e.target.value,
                            }
                        )}></input>
                    </div>
                </div>
                <div className='flex flex-wrap mx-6 my-4 justify-center'>
                    {/* the spread operator is spreading the restaurantList[i].data object into
                    individual props which can then be destructured as prop parameter with
                    their individual keys */}

                    {filteredRestaurants.length === 0 ?
                        <h3>No Restaurants matches with your search</h3>:
                        filteredRestaurants.map(restaurant => (
                            <Link to={"/restaurant/"+restaurant.data.id}  key={restaurant.data.id}>
                                <RestaurantCard {...restaurant.data} />
                            </Link>
                        ))
                    }
                </div>
            </>
    )
};

export default Body;