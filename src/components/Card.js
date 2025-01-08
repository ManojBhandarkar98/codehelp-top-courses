import React from 'react'
import { FcLike } from "react-icons/fc"

function Card({image,title,description}) {
  
  return (
    <div>
      <div>
        <img src={image} alt='img'></img>
      </div>
      <div>
        <FcLike />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card;