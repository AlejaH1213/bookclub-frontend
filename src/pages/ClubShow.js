import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import { Button, Card} from "reactstrap"

const ClubShow = ({ bookClubs, currentUser }) => {
  const { id } = useParams()
  let currentClub = bookClubs.find((club) => club.id === +id)
  
  return (
    <>
      <main>
      <>
        {currentUser && 
          <Button 
            style={{
              backgroundColor: '#062e57'
            }}
          >
            <NavLink to={`/clubs/${currentClub.id}/new`} className="nav-link">
              Join!
            </NavLink>
          </Button>
        }
      </>
        {currentClub && (
          <Card >
            <div className='club-show-content'>
              <h1 className='club-show-title'>{currentClub.name}</h1>
              <div className='club-show-text'>
                {currentClub.summary}
                <br/>
                {currentClub.meeting_dates}
              </div>
              <div className='club-show-pic'>
                <img
                alt={`profile picture for ${currentClub.name}`}
                src={currentClub.book_of_the_month_picture}
                style={{
                  height: '850px',
                  width: '650'
                }
                }   
                />
              </div>
            </div>
          </Card>               
        )}
        <br />
        <br />
        <br />
      </main>
    </>
  )
}

export default ClubShow