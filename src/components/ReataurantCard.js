import {CARD_IMG_URL} from '../constants';
import Star from '../assets/Empty_Star.svg';
const RestaurantCard = ({name, cloudinaryImageId, cuisines, deliveryTime, avgRating, costForTwoString}) => {
    return (
        <div className='flex flex-col w-72 p-4 m-4 hover:border-2 hover:rounded-lg hover:shadow-lg hover:shadow-slate-500-500/50'>
            <img src={ CARD_IMG_URL + cloudinaryImageId}
                alt="restaurant-image"
                className='w-64'/>
            <div className='mt-4'>
                <p className='font-sans font-semibold'>{name}</p>
                <p className='font-sans text-xs text-slate-500'>{cuisines.join(", ")}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <div className={`${avgRating >=4 ? 'bg-[#48c479]' : 'bg-[#Db7C38]'} flex bg-[#48c479] text-white pl-2 pr-1 text-center rounded-sm items-center text-xs font-semibold`}>
                    {avgRating}
                    <img src={Star} alt="*" className='flex w-4 h-4 ml-1'/>
                </div>
                <div className='text-[#535665]  font-xs'>•</div>
                <div className='font-sans text-[#535665] text-sm'>{deliveryTime} MINS</div> 
                <div className='text-[#535665]  font-xs'>•</div>
                <div className='font-sans text-[#535665] text-sm'>{costForTwoString}</div> 
            </div>
            
        </div>
    );
}

export default RestaurantCard;