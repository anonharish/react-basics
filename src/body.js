import React, { useState } from "react";
import RestuarantCard from "./components/restuarantCard";
import { Shimmer } from "./components/shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestuarantData] = React.useState([]);
  const [filterRestaurants,setFilterRestaurants] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const getTopRatedRestaurant = () => {
    let filterdTopRatedRestaurants = restaurantData.filter(
      (restuarant) => restuarant.info.avgRating > 3.9
    );
    setFilterRestaurants(filterdTopRatedRestaurants);
  };

  React.useEffect(() => {
    let restuarantsData = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((data) => data.json())
      .then((transformedData) => {
        setRestuarantData(
          transformedData?.data?.cards?.[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
        setFilterRestaurants(
          transformedData?.data?.cards?.[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
      });
  }, []);

  return (
    <div className="body-container">
      <div style={{display:"flex"}}>
        <div className="search-container" style={{marginRight:"10px"}}>
          <input
            type="text"
            placeholder="search the restaurant"
            value={searchTerm}
            onChange={(e)=>{
              setSearchTerm(e.target.value)
            }}
          />
          <button onClick={() => {
            let filteredRestaurantsList = restaurantData.filter(restuarant=>{
              return restuarant.info.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            setFilterRestaurants(filteredRestaurantsList);
          }}>submit</button>
        </div>
        <button className="btn-primary" onClick={getTopRatedRestaurant}>
          Top Rated Restauarant
        </button>
      </div>
      {restaurantData.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurants-container">
          {filterRestaurants.map((restuarant) => (
           <Link to={"/restaurant/"+restuarant.info.id}  className="link-wrapper" ><RestuarantCard restuarant={restuarant.info} /></Link> 
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
