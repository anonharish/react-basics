import React from 'react'
import { PARENTIMAGEURL } from '../utils/constants';

const RestuarantCard = ({restuarant}) => {
  const {name,cuisines,avgRatingString,
costForTwo,sla,cloudinaryImageId
} = restuarant;
const {slaString}=sla;
  return (
    <div className='card-container'>
        <img src={PARENTIMAGEURL+cloudinaryImageId} alt="restaurant-img" className='restaurant-card-img'/>
        <p className='heading-medium'>{name}</p>
        <p className='medium-text'>{cuisines.join(", ")}</p>
        <p className='medium-text'>{avgRatingString}</p>
        <p className='medium-text'>{costForTwo}</p>
        <p className='medium-text'>delivery TIme:{slaString}</p>
    </div>
  )
}

export const withTopRatedLabel = () => {
  return (restaurant) => {
    return (
      <>
        <label className="border bg-black text-white py-1 px-2 inline absolute ml-3 mt-2 rounded-lg">Highly Rated</label>
        <RestuarantCard {...restaurant}/>
      </>
    );
  };
};

export default RestuarantCard;