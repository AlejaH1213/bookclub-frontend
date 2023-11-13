import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CardBody, Card, Col, CardImg, CardTitle, Button, CardText, CardHeader } from "reactstrap"

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

  console.log("in YouClubIndex.js current bookclubs", bookClubs);
  console.log("in YouClubIndex.js userBookclubs", userBookClubs);
  console.log("in YouClubIndex.js usermemberships", userMemberships);
  console.log("in YouClubIndex.js currentUser: ", currentUser);
  console.log("in YouClubIndex.js memberships: ", memberships);
  return (
    <>
      <main>
        <Button>
          <NavLink to="/newclub" className="nav-link">
            Create a New Club
          </NavLink>
        </Button>
        <h2 className='title'>Here are your clubs</h2>
        <div className='cards-container'>
          {userBookClubs && (userBookClubs?.map((bookClub, index) => (
            <Card
              style={{
                width: '18rem',
                backgroundColor: '#ff0000',
                color: '#5e2121',
              }}
              key={index}
              className="card-item"
            >
            <CardHeader>
              {`${bookClub.name}`}
            </CardHeader>
            <CardImg
              alt={`profile picture for ${bookClub?.name}`}
              src={bookClub?.book_of_the_month_picture}
            />
            <div className='card-item'>
              <CardBody>
                <CardTitle tag="h5">
                  {`${bookClub?.summary}`}
                </CardTitle>
                <Button
                  style={{
                    backgroundColor: '#062e57'
                  }}
                >
                <NavLink to={`/clubs/${bookClub?.id}`} className="nav-link">
                  See more details!
                </NavLink>
                </Button>
                <Button
                  style={{
                    backgroundColor: '#062e57'
                  }}
                >
                <NavLink to={`/clubedit/${bookClub?.id}`} className="nav-link">
                  Edit
                </NavLink>
                </Button>
                <NavLink>
                  <Button 
                    style={{
                    backgroundColor: '#062e57'
                    }}
                    onClick={() => handleDelete(bookClub?.id)}
                  >
                    Delete
                  </Button>
                </NavLink>
              </CardBody>
            </div>
            </Card>
          )))}
        </div>
      </main>
    </>
  )
}

export default YourClubsIndex