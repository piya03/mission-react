import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from '../hooks/useRestaurantMenu'
import RestaurantCategories from './RestaurantCategories';

const RestaurantMenu = () => {
  const { resId } = useParams()
  const [active, setActive] = useState(0)
  const { resInfo } = useRestaurantMenu(resId)

  const resData = resInfo?.cards[2]?.card?.card?.info || {}
  const { name, costForTwoMessage, cloudinaryImageId, cuisines } = resData
  const recommendedSectionInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  const { title, itemCards } = recommendedSectionInfo || {}
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each) => {
    return each.card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })

  if (resInfo === null) {
    return <div>Loading... </div>
  }
  return (
    <div className="m-auto text-center max-w-5xl shadow-2xl">
      <h1>{name} </h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <img className="" src={CDN_URL + cloudinaryImageId} width="100" height="100" />

      {categories?.map((each, i) => {
        return (
          <RestaurantCategories
            key={each.card.card.categoryId}
            each={each}
            active={active}
            i={i}
            showItem={active === i}
            setActive={() => setActive(i)} />
        )
      })}




    </div >
  )
}

export default RestaurantMenu;