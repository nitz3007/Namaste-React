import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
    const cartInfo = useSelector(store => store.cart);
    const dispatch = useDispatch();
    console.log(cartInfo, "cart info");

    const handleAddItem = (item) => {
        const itemInfo = {
            restaurantName: cartInfo.restaurantName,
            restaurantArea: cartInfo.restaurantArea,
            item: {...item, price: (item.price*100)},
        }
        console.log(item);
        dispatch(addItem(itemInfo));
    }

    const handleRemoveItem = (item) => {
        const itemInfo = {
            restaurantName: cartInfo.restaurantName,
            restaurantArea: cartInfo.restaurantArea,
            item: {...item, price: (item.price*100)},
        }
        dispatch(removeItem(itemInfo));
    }

    if(cartInfo.items.length === 0){
        return <div>
            <p>Your Cart is Empty!!!</p>
        </div>
    }

    return <section className="flex flex-col border-2 shadow-lg w-1/2 ml-auto mr-auto mt-10 mb-10">
       <div className="pt-4 pb-4 px-12">
            <h1 className="font-semibold text-lg font-sans">{cartInfo.restaurantName}</h1>
            <p className="text-sm text-[#686b78]">{cartInfo.restaurantArea}</p>
            <div className="w-12 h-0.5 bg-black mt-1"></div>
       </div>
       <div className="px-12">
            {cartInfo?.items.map((item)=>
                <div key={item.id} className="grid grid-cols-6 gap-2 mt-2 mb-2">
                    <h1 className="col-span-4 font-sans text-slate-600 text-sm self-center">{item.name}</h1>
                    <div className="justify-self-center self-center text-[#60b246] text-sm font-bold font-sans border-slate-300 border-[1px] rounded-sm px-2 py-1 h-fit">
                        <button className="pr-4 text-slate-500" onClick={()=>handleRemoveItem(item)}>-</button>
                        {item.count}
                        <button className="pl-4" onClick={()=>handleAddItem(item)}>+</button>
                    </div>
                    <span className="justify-self-end self-center text-slate-600 text-sm font-semibold">Rs. {item.price * item.count}</span>
                </div>
            )}
           
       </div>
       <div className="flex justify-between h-16 border-t-2 items-center mt-2 px-12">
            <p className="font-semibold">TO PAY</p>
            <p className="font-semibold">Rs. {cartInfo.totalBill/100}</p>
       </div>
    </section>
}

export default Cart;