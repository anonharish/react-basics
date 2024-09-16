import React from 'react'
import { useSelector } from 'react-redux';
import { FoodItemsList } from './FoodItemsList';

const Cart = () => {
  const itemsInfo = useSelector(state=>state.items);

  return (
    <div className="w-[60%] m-auto mt-10">
        <h1 className="text-center text-2xl font-bold mb-4">Cart</h1>
        <hr/>
        <FoodItemsList foodItems={itemsInfo} />
        <button className="block mx-auto border border-black rounded-xl px-4 py-2 bg-black text-white">Proceed to Checkout</button>
    </div>
  )
}

export default Cart;