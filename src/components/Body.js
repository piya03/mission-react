import react, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'

const Body = () => {
  // local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState();
  console.log("🚀 ~ Body ~ listOfRestaurant:", listOfRestaurant);
  // to keep the searched data
  const [filterRes, setFilterRes] = useState();
  const [search, setSearch] = useState("");
  const online = useOnlineStatus()
  console.log("🚀 ~ Body ~ online:", online)

  const fetchData = async () => {
    let url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(url);
    const json = await data.json();
    console.log(
      json?.data?.cards?.[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "json"
    );
    setListOfRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRes(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (online === false) {
    return <h1>You are offline. Please check your internet connection</h1>
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((each) => {
              return each.info.name
                ?.toLowerCase()
                .includes(search?.toLowerCase());
            });

            setFilterRes(filteredList);
          }}
        >
          SEARCH
        </button>
        <button
          className="filter-btn"
          onClick={() => {

            const filteredList = listOfRestaurant.filter((each) => {
              return each.info.avgRating > 4.5;
            });
            console.log("🚀 ~ filteredList ~ filteredList:", filteredList)

            setFilterRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // props are normal argument to the function */}
        {filterRes?.map((each) => {
          return (
            <div key={each?.info?.id}>
              <Link to={`./restaurants/${each?.info?.id}`} >
                <RestaurantCard
                  id={each?.info?.id} resData={each} />;
              </Link >
            </div>
          )
        })}
      </div>
    </div >
  );
};
export default Body;
