import React from 'react'
import RestuarantCard from './components/restuarantCard';

const Body = () => {
const getTopRatedRestaurant =()=>{
  console.log("hello brooo");
}

React.useEffect(()=>{
 let  restuarantsData=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then(data=>data.json());
 console.log(restuarantsData,"insideUseEfferct");
},[])

  return (
    <div className='body-container'>
      <button className='btn-primary' onClick={getTopRatedRestaurant}>Top Rated Restauarant</button>
      <RestuarantCard/>
    </div>
  )
}

export default Body;
