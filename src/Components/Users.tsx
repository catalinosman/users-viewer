import React, {useEffect, useState} from 'react'
import axios from "axios"
import { UserTypes } from '../types'
import Card from "./Card"

const Users = () => {
    const [users, setUsers] = useState <Array<UserTypes>>([])

    const fetchAllUsers = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }

    useEffect(()=> {
        fetchAllUsers()
    },[])

    const utilizatori = users.map((cards) => {
        return (
            <div>
            <Card user={cards}/>
            </div>
        )
    })


  return (
    <div>
        <div className="utiliz-style">
        {utilizatori}
        </div>
        <div className="homebutton-container">
            <a href="/" className="home-button">BACK TO THE HOMEPAGE</a>
        </div>
    </div>
  )
}

export default Users