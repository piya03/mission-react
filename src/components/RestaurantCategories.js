import React, { useState } from 'react';

import ItemList from './ItemList';

function RestaurantCategories(props) {

  const { each, setActive, showItem } = props
  const [single, setSingle] = useState(showItem)

  const itemInfo = each?.card?.card


  return (
    <div>

      <div className="flex bg-gray-100 shadow-lg rounded-xl p-2  justify-between text-center mb-2 ">
        <span className="text-xl font-bold">{itemInfo?.title} ({itemInfo?.itemCards?.length || 0})</span>
        <span className='cursor-pointer' onClick={() => {
          setActive();
          setSingle((prev) => !prev)
        }}>⬇️</span>
      </div>
      {showItem && single && <div className="bg-gray-100 text-left">
        {itemInfo?.itemCards?.map((each) => <ItemList key={each.card.info.id} each={each} />)}
      </div>}
    </div>

  )
}

export default RestaurantCategories