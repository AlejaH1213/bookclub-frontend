import React, { useEffect} from 'react'
import { NavLink} from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";

const ClubIndex = ({ bookClubs, readBookClubs }) => {
  useEffect(()=>{
    readBookClubs()
  },[readBookClubs])
  return (
    <>
      <h2>Explore and Join a Book Club!</h2>
      <div className="center-image">
        <main className="card-container">
          {bookClubs?.map((bookClub, index)=> {
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
                </CardBody>
              </Card>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default ClubIndex