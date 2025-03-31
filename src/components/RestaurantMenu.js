import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from '../hooks/useRestaurantMenu'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const { resInfo } = useRestaurantMenu(resId)
  console.log("🚀 ~ RestaurantMenu ~ resInfo:", resInfo)
  // const [resInfo, setResInfo] = useState(null)

  // console.log("🚀 ~ RestaurantMenu ~ resId:", resId)

  // async function fetchMenu() {
  //   const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
  //   const res = await data.json()
  //   setResInfo(res.data)
  //   console.log("🚀 ~ fetchMenu ~ res:", res)
  // }

  const resData = resInfo?.cards[2]?.card?.card?.info || {}
  const { name, costForTwoMessage, cloudinaryImageId, cuisines } = resData
  const recommendedSectionInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  const { title, itemCards } = recommendedSectionInfo || {}

  console.log("🚀 ~ RestaurantMenu ~ recommended:", recommendedSectionInfo)


  // useEffect(() => {
  //   fetchMenu()
  // }, [])



  if (resInfo === null) {
    return <div>Loading... </div>
  }
  return (
    <div className="menu">
      <h1>{name} </h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <img className="" src={CDN_URL + cloudinaryImageId} width="100" height="100" />
      <h3>{title}</h3>
      <ul>
        {itemCards?.map((elem, i) => {
          return <li key={i}>{elem?.card?.info?.name} - Rs {elem?.card?.info?.price / 100 || elem?.card?.info?.defaultPrice / 100}</li>
        })}


      </ul>
    </div>
  )
}

export default RestaurantMenu;