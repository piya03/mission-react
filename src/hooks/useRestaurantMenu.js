import React, { useState, useEffect } from 'react'


function useRestaurantMenu(resId) {


  const [resInfo, setResInfo] = useState(null)


  useEffect(() => {
    fetchMenu()
  }, [])

  async function fetchMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    const res = await data.json()
    setResInfo(res.data)

  }

  return { resInfo }
}

export default useRestaurantMenu