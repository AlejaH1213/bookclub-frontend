import React, { useState } from "react"
import mockUsers from "./mockUsers.js"
import mockBookClubs from "./mockBookClubs.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [bookClub, setBookClubs] = useState(mockBookClubs)

  return (
    <>
      <h3>Apartment App</h3>
    </>
  )
}

export default App