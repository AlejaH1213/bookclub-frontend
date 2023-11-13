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
      <div className='button'>
        {currentUser && 
          <Button 
          style={{
            backgroundColor: '#ff0000',
            color: 'black'
          }}
          >
            <NavLink to={`/clubs/${currentClub.id}/new`} className="nav-link">
              Join!
            </NavLink>
          </Button>
        }
      </div>
      </>
      <div className='club-show-content'>
        {currentClub && (
          <Card style={{
            backgroundColor: '#aaaeb1'
          }}>
              <h1 className='club-show-title'>{currentClub.name}</h1>
              <div className='club-show-text'>
                {currentClub.summary}
                <br/>
                meeting dates: {currentClub.meeting_dates}
                <br/>
                book of the month: {currentClub.book_of_the_month}
              </div>
              <div className='club-show-pic'>
                <img
                alt={`profile picture for ${currentClub.name}`}
                src={currentClub.book_of_the_month_picture}
                style={{
                  height: '600px',
                  width: '750px'
                }
                }   
                />
              </div>
          </Card>               
        )}
        </div>
        <br />
        <br />
        <br />
      </main>
    </>
  )
}

export default ClubShow