import React from 'react'
import { Link } from "react-router-dom"
import { User } from "../types"
import UserIcon from "../imgs/usericon.png"
 
function Card({user}: User){
  return (
    <div key={user.id}>
      <div className="card-style">
          <img src={UserIcon} className="usericon-style" />
          <p>{user.name}</p>
          {/* <p>{user.email}</p> */}
      <div>
          <Link to={`/users/${user.id}`} className="user-details-button">User's Details</Link>
        </div>
        </div>
    </div>
  )
}

export default Card