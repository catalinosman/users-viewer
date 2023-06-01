import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Users from "./Components/Users"
import Homepage from "./Components/Homepage"
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
