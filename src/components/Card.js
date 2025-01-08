import React from 'react'
import { FcLike } from "react-icons/fc"

function Card(props) {
  let course = props.course;
  console.log(course.data);
  return (
    <div>
      <div>
        <img src={course.image.url} alt='img'></img>
      </div>
      <div>
        <FcLike />
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card;