import React, { useState, useEffect } from "react"
import mockUsers from "./mockUsers.js"
import mockBookClubs from "./mockBookClubs.js"
import mockClubMemberships from "./mockClubMemberships.js"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import AboutUs from "./pages/AboutUs.js"
import ClubIndex from "./pages/ClubIndex.js"
import ClubShow from "./pages/ClubShow.js"
import Home from "./pages/Home.js"
import Login from "./pages/Login.js"
import NewAccount from "./pages/NewAccount.js"
import NewClub from "./pages/NewClub.js"
import NotFound from "./pages/NotFound.js"
import UserProfile from "./pages/UserProfile.js"
import './App.css'
import YourClubsIndex from "./pages/YourClubsIndex.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [bookClubs, setBookClubs] = useState([])
  const [membership, setMembership] = useState(mockClubMemberships)
  
  const readBookClubs = () => {
    fetch(`${url}/clubs`)
      .then(response => response.json())
      .then(payload => setBookClubs(payload))
      .catch(error => console.log(error))
  }
  useEffect (() => {
    readBookClubs()
  }, [])
  
  const createNewClub = (newClub) => {
    fetch(`${url}/clubs/new`, {
      body: JSON.stringify(newClub),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readBookClubs())
    .catch((error) => console.log("New Book Club created error:", error))
  }


  const url = "http://localhost:3000"
  console.log("current user", currentUser);

  
  const newaccount = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/clubs/index" element={<ClubIndex bookClubs={bookClubs} readBookClubs={readBookClubs} />} />
        <Route path="/clubs/:id" element={<ClubShow bookClubs={bookClubs} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newclub" element={<NewClub createNewClub={createNewClub}/>} />
        <Route path="/newaccount" element={<NewAccount newaccount={newaccount} />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/yourclubs" element={<YourClubsIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App