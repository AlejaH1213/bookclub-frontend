import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardBody, Card, Col, CardImg, CardTitle, Button, CardText } from "reactstrap"

const YourClubsIndex = ({currentUser, bookClubs, memberships }) => {
  const userMemberships = memberships.filter(membership => membership.user_id === currentUser.id)
  const userBookClubs = userMemberships.map(membership => bookClubs[membership.club_id - 1])
  return (
    <>
      <h2>Here are your clubs</h2>
      {userBookClubs.map((bookClub, index) => {
        return (
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
            className="card-item"
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
                <NavLink to={`/clubs/${bookClub.id}`} className="nav-link">
                  See more details!
                </NavLink>
              </Button>
              <Button>
                <NavLink to={`/clubedit/${bookClub.id}`} className="nav-link">
                  Edit
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}

export default YourClubsIndex