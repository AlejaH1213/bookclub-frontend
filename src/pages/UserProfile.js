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
      <h2 className='title'>Your profile</h2>
      {currentUser &&
        <Card>
          <div className='user'>
            <div id='user-pic'>
              <img src={currentUser.profile_picture} alt={currentUser.username} style={{height: '500px', width: '300px'}}/>
            </div>
            <div className='user-info'>
              <h3>{currentUser.username}</h3>
              <h3>{currentUser.email}</h3>
              <h3>Book Clubs: 
                {userBookClubs.map((bookClub, index) => {
                  return(
                    <h3 key={index}>{bookClub?.name}</h3>
                    )
                  })}
              </h3> 
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </Card>
      }
    </>
  )
}

export default UserProfile