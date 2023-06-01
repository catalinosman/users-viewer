import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { UserTypes } from "../types"

const UserDetails = () => {
    let { id } = useParams()
    const [user, setUser] = useState<UserTypes>({id: 0 ,name:"",
    username: "",
  email : "",
  address : {
    street: "",
    suite: "",
    city: "" ,
    zipcode: ""
  }
  ,
  phone: "", 
  website: ""
 })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(user => setUser(user))
    }, [id])

  return (
    <div className="details-container">
        <h2 className="user-name">{user.name}'s profile</h2>
        <div className="user-details">
          <p>- Name : {user.name}</p>
          <p>- Username : {user.username}</p>
          <p>- Email : {user.email}</p>
          <p>- Phone : {user.phone}</p>
          <p>- Website : {user.website}</p>
          <p>- Address :</p>
          <ul>
            <li> {user.address.street} </li>
            <li> {user.address.suite}</li>
            <li> {user.address.city}</li>
            <li> {user.address.zipcode}</li>
          </ul>
        </div>
        <a href="/users" className="other-users"> --See other users</a>
    </div> 
  )
}

export default UserDetails

