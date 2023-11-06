import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardGroup, Card, CardBody, CardImg, CardTitle, Button } from "reactstrap"

const YourClubsIndex = ({currentUser, bookClubs, membership}) => {
  const yourClubs = bookClubs.filter(bookClub => bookClub.user_id === currentUser.id)
  console.log("current user", currentUser);
  console.log("clubs", yourClubs);
  console.log("membership from index, ", membership);
  return (
    <>
      <h2>Here are your clubs</h2>
      <div className='center-image'>
        <main className='card-container'>
          {yourClubs?.map((bookClub, index) => {
            return (
              <Card
                style={{
                    width: '18rem'
                }}
                key={index}
                className='card-item'
              >
                <CardImg
                  alt={`profile picture for ${bookClub.name}`}
                  src={bookClub.book_of_the_month_picture}
                />
                <CardBody>
                  <CardTitle tag="h5">
                      {`${bookClub.summary}`}
                  </CardTitle>
                  <Button>
                    <NavLink to={`/clubs/${bookClub.id}`} className='nav-link'>
                      See more
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink to={"/clubedit"} className="nav-link">
                      Update this club
                    </NavLink>
                  </Button>
                  <Button>
                    Delete this club
                  </Button>
                </CardBody>    
              </Card>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default YourClubsIndex