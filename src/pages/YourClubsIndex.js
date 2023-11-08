import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CardBody, Card, Col, CardImg, CardTitle, Button, CardText } from "reactstrap"

const YourClubsIndex = ({currentUser, bookClubs, memberships, deleteBookClub, deleteMembership }) => {
  const navigate = useNavigate();
  const userMemberships = memberships.filter(membership => membership.user_id === currentUser.id)
  const userBookClubs = userMemberships.map(membership => {
    return bookClubs.find(bookClub => bookClub.id === membership.club_id)
  })

  const handleDelete = (id) => {
    deleteBookClub(id);
    window.location.reload()
  }

  console.log("userBookClubs:", userBookClubs);
  console.log("userMemberships:", userMemberships);
  return (
    <>
      <main>
        <h2>Here are your clubs</h2>
        {userBookClubs && (userBookClubs?.map((bookClub, index) => (
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
            className="card-item"
          >
            <CardImg
              alt={`profile picture for ${bookClub?.name}`}
              src={bookClub?.book_of_the_month_picture}
            />
            <CardBody>
              <CardTitle tag="h5">
                {`${bookClub?.summary}`}
              </CardTitle>
              <Button>
                <NavLink to={`/clubs/${bookClub?.id}`} className="nav-link">
                  See more details!
                </NavLink>
              </Button>
              <Button>
                <NavLink to={`/clubedit/${bookClub?.id}`} className="nav-link">
                  Edit
                </NavLink>
              </Button>
              <NavLink>
                <Button onClick={() => handleDelete(bookClub?.id)}>Delete</Button>
              </NavLink>
            </CardBody>
          </Card>
        )))}
      </main>
    </>
  );
}

export default YourClubsIndex