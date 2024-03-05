import React from 'react'
import '../stylesheets/userCard.css'

function UserCard({image, testimonial, user, direction}) {

    
  return (
    <article style={{flexDirection: direction}}>
        <div className="img-avatar">
            <img src={image} alt="" />
        </div>
        <div className="testimonial">
            <p className="text-testimonial">{testimonial}</p>
            <small>{user}</small>
        </div>
    </article>
  )
}

export default UserCard