import react, { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'
import UserContext from "../context/UserContext";

const Body = () => {
  // local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState();
  // to keep the searched data
  const [filterRes, setFilterRes] = useState();
  const [search, setSearch] = useState("");
  const online = useOnlineStatus()
  const RestaurantCardLabel = withPromotedLabel(RestaurantCard)
  const userInfo = useContext(UserContext)
  const { loggedInUser, setName, name } = userInfo || {}
  console.log("🚀 ~ Body ~ d:", userInfo)

  const newAPI = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80424&sortBy=&filters=&offset=0&page_type=null'
  const oldAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    let url = oldAPI

    const data = await fetch(url);
    const json = await data.json();

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
        <input className="border-1"
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

            setFilterRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input className="border-1" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="res-container">
        {/* // props are normal argument to the function */}
        {filterRes?.map((each) => {
          return (
            <Link to={`./restaurants/${each?.info?.id}`} key={each?.info?.id}>
              {each.info.avgRating > 4.5 ?
                <RestaurantCardLabel resData={each} />
                : <RestaurantCard resData={each} />
              }
            </Link >
          )
        })}
      </div>
    </div >
  );
};
export default Body;
