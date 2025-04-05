import React from 'react'
import { CDN_URL } from "../utils/constant";

const ItemList = ({ each }) => {
  const { name, price, defaultPrice, imageId, description
  } = each?.card.info || {}

  return (
    <div className="pb-5 w-full border-b-1 flex justify-between items-center px-4 gap-4" >
      <div>
        <div> {name}<b>Rs: {price / 100 || defaultPrice / 100}</b></div>

        <div>{description}</div>
      </div>
      <div className='relative'>
        <div className='w-52'> <img className="w-full" src={CDN_URL + imageId} /></div>
        <button className='p-2 bg-white absolute -bottom-2 rounded mx-16 shadow-lg'>ADD + </button>
      </div>
    </div>
  )
}

export default ItemList