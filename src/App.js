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
import EditClub from "./pages/EditClub.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [bookClubs, setBookClubs] = useState([])
  const [memberships, setMemberships] = useState([])
  const url = "http://localhost:3000"
  console.log("current user", currentUser);

  const readMemberships = () => {
    fetch(`${url}/memberships`)
      .then(response => response.json())
      .then(payload => setMemberships(payload))
      .catch(error => console.log(error))
  }
  
  const readBookClubs = () => {
    fetch(`${url}/clubs`)
      .then(response => response.json())
      .then(payload => setBookClubs(payload))
      .catch(error => console.log(error))
  }
  useEffect (() => {
    const loggedIn = localStorage.getItem("currentUser")
    if (loggedIn) {
      setCurrentUser(JSON.parse(loggedIn))
    }
    readBookClubs();
    readMemberships();
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
  const login = (userInfo) => {
    fetch(`${url}/login`, {
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
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }

  return (
    <>
    <Header login={login} currentUser={currentUser}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/clubedit" element={<EditClub />} />
        <Route path="/clubs/index" element={<ClubIndex bookClubs={bookClubs} readBookClubs={readBookClubs} />} />
        <Route path="/clubs/:id" element={<ClubShow bookClubs={bookClubs} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/newclub" element={<NewClub createNewClub={createNewClub}/>} />
        <Route path="/newaccount" element={<NewAccount newaccount={newaccount} />} />
        <Route path="/profile" element={<UserProfile />} />
        {currentUser && (
          <>
            <Route 
              path="/yourclubs" 
              element={<YourClubsIndex currentUser={currentUser} bookClubs={bookClubs} memberships={memberships} readMemberships={readMemberships} readBookClubs={readBookClubs} />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App