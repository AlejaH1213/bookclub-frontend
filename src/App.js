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
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [bookClub, setBookClubs] = useState(mockBookClubs)
  const [membership, setMembership] = useState(mockClubMemberships)

  const readClub = () => {
    fetch("http://localhost:3000/mockBookClubs")
    .then((response) => response.json())
    .then((payload) => setBookClubs(payload))
    .catch((error) => console.log(error))
  }
  
  useEffect (() => {
    readClub()
  }, [])
  
  const createNewClub = (newClub) => {
    fetch("http://localhost:3000/mockBookClubs", {
      body: JSON.stringify(newClub),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readClub())
    .catch((error) => console.log("New Book Club created error:", error))
  }


  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/clubs/index" element={<ClubIndex  />} />
        <Route path="/clubs/:id" element={<ClubShow  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newaccount" element={<NewAccount />} />
        <Route path="/newclub" element={<NewClub createNewClub={createNewClub}/>} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/yourclubs" element={<YourClubsIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App