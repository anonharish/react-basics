import React from 'react'

const RestuarantCard = () => {
  return (
    <div className='card-container'>
        <img src='https://st.depositphotos.com/2075661/4344/i/950/depositphotos_43449119-stock-photo-kentucky-fried-chicken-restaurant-sign.jpg' alt="restaurant-img" className='restaurant-card-img'/>
        <p className='heading-medium'>restuarant name</p>
        <p className='medium-text'>item1,itm2</p>
        <p className='medium-text'>4.8</p>
        <p className='medium-text'>cost 249 rupees</p>
        <p className='medium-text'>time</p>
    </div>
  )
}

export default RestuarantCard;