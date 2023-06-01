import React from 'react'

const Homepage = () => {
  return (
    <div className="homepage-style">
        <h2 className="title-style">USERS PLATFORM</h2>
        <p className="description-style">Hello there!👋 This is the first project I intend to put in my portfolio in which I am using React and TypeScript. In this project I made an API call in order to get the database of users from the website "https://jsonplaceholder.typicode.com/users". Using React Hooks (useState, useEffect, useParams) and React Routing I have managed to create a simple website in which I am listing these users with some basic information. Of course, if you want to find out more about them you can always click the buttons that I've created so that you can get into a new page in which I am listing even more information about these random users. This is the outcome so far!</p>
        <a href="/users" className="users-button"> CLICK HERE TO SEE THE USERS </a>
    </div>
  )
}

export default Homepage