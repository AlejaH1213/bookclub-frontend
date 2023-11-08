import React from 'react';
import { Button, Card } from "reactstrap";

const UserProfile = ({ currentUser, bookClubs, memberships }) => {
  const userMemberships = memberships.filter(membership => membership.user_id === currentUser.id)
  const userBookClubs = userMemberships.map(membership => {
    return bookClubs.find(bookClub => bookClub.id === membership.club_id)
  })
  console.log("userBookClubs", userBookClubs);
  return (
    <>
      <h2>Your profile</h2>
      <Card>
        <div className='user-pic'>
          <img src={currentUser.profile_picture} alt={currentUser.username} />
          <h3>{currentUser.username}</h3>
          <h3>{currentUser.email}</h3>
          <h3>Book Clubs: 
            {userBookClubs.map((bookClub, index) => {
              return(
                <h3 key={index}>{bookClub.name}</h3>
                )
              })}
          </h3>
          <Button>Edit Profile</Button>
          <br/>
          <br/>
          <br/>
        </div>
      </Card>
    </>
  )
}

export default UserProfile