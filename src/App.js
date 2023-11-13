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
import NewMembership from "./pages/NewMembership.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [bookClubs, setBookClubs] = useState([])
  const [memberships, setMemberships] = useState([])
  const url = "https://bookclub-backend-neb1.onrender.com"
  
  useEffect (() => {
    const loggedIn = localStorage.getItem("currentUser")
    if (loggedIn) {
      setCurrentUser(JSON.parse(loggedIn))
    }
    readBookClubs()
    readMemberships()
  }, []);
  
console.log("statevariable for membership", memberships);
console.log("statevariable for clubs", bookClubs);
console.log("statevaraible user", currentUser);
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
  
  const createNewClub = (newClub) => {
    fetch(`${url}/clubs`, {
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

  const createMembership = (newMembership) => {
    fetch(`${url}/memberships`, {
      body: JSON.stringify(newMembership),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readMemberships())
    .catch((error) => console.log("membership creation error", error))
  }



  const updateBookClub = (editClub, id) => {
    fetch(`${url}/clubs/${id}`, {
      body: JSON.stringify(editClub),
      headers:{
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then(() => readBookClubs())
    .catch((error) => console.log("Book club update error:", error))
  }
  const deleteBookClub = (id) => {
    fetch(`${url}/clubs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readBookClubs())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const deleteMembership = (id) => {
    fetch(`${url}/memberships/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readBookClubs())
      .catch((errors) => console.log("delete errors:", errors))
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

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") //retrieve the token
      },
      method: "DELETE"
    })
    .then(payload => {
      localStorage.removeItem("token")  // remove the token
      localStorage.removeItem("currentUser")  // remove the currentUser
      setCurrentUser(null)
    })
    .catch(error => console.log("log out errors: ", error))
  }

  return (
    <body>
    <Header login={login} currentUser={currentUser} logout={logout}  />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="/clubedit/:id" element={<EditClub bookClubs={bookClubs} updateBookClub={updateBookClub} readBookClubs={readBookClubs} memberships={memberships} currentUser={currentUser}/>} />
        <Route path="/clubs/index" element={<ClubIndex bookClubs={bookClubs} readBookClubs={readBookClubs} currentUser={currentUser} />} />
        <Route path="/clubs/:id/new" element={<NewMembership currentUser={currentUser} createMembership={createMembership} bookClubs={bookClubs}/>}/> 
        <Route path="/clubs/:id" element={<ClubShow bookClubs={bookClubs} currentUser={currentUser} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/newclub" element={<NewClub createNewClub={createNewClub}  currentUser={currentUser} memberships={memberships} bookClubs={bookClubs} />} />
        <Route path="/newaccount" element={<NewAccount newaccount={newaccount} />} />
        {currentUser && (
          <>
          <Route path="/profile" element={<UserProfile currentUser={currentUser} bookClubs={bookClubs} memberships={memberships}/>} />
            <Route 
              path="/yourclubs" 
              element={<YourClubsIndex currentUser={currentUser} bookClubs={bookClubs} memberships={memberships} readMemberships={readMemberships} readBookClubs={readBookClubs} deleteBookClub={deleteBookClub} deleteMembership={deleteMembership}/>} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </body>

  )
}

export default App