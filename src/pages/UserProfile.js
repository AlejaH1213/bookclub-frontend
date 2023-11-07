import React from 'react'
import { Button, Card} from "reactstrap"

const UserProfile = ({ currentUser }) => {
  return (
    <>
      <h2>Your profile</h2>
      {currentUser && (
        <Card>
          <div className='user-pic'>
            <img
            src={currentUser.profile_picture}
            />
            <h3>{currentUser.username}</h3>
            <h3>{currentUser.email}</h3>
            <Button>Edit Profile</Button>
            <br/>
            <br/>
            <br/>
          </div>
        </Card>
      )}
    </>
  )
}

export default UserProfile