import React from 'react'
import './Card.css';



function Card({img1, img2, img3, title, price}) {
  return (
    <div className='card'>
        <div className="images">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <span className='cardspan1'>{title}</span>
        <span className='cardspan2'> {price}K/Month</span>
    </div>
  )
}

export default Card
