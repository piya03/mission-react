import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((store) => store.cart.items)
  console.log("🚀 ~ Cart ~ cartItem:", cartItem)
  function handleClearCart() {
    dispatch(clearCart())
  }
  return (
    <div className='m-auto text-center max-w-3xl'>
      <h1 className=' font-bold text-2xl'>Cart</h1>
      <button className=" p-2 cursor-pointer bg-black text-white rounded" onClick={() => { handleClearCart() }}>Clear Cart</button>
      {cartItem?.length === 0 && <h1>Please Add in your cart.</h1>}
      {cartItem?.map((each, i) => {
        return <ItemList key={i} each={each} />
      })}
    </div>
  )
}

export default Cart