import React, { useEffect} from 'react'
import { NavLink} from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";

const ClubIndex = ({ bookClubs, readBookClubs, currentUser }) => {
  useEffect(()=>{
    readBookClubs()
  },[])

  console.log("from club index", bookClubs);
  return (
    <>
      <h2 className='title'>Explore and Join a Book Club!</h2>
      <div className="center-image">
        <main className="card-container">
          {bookClubs?.map((bookClub, index)=> {
            return (
              <Card
                style={{
                  width: '18rem',
                  backgroundColor: '#ff0000',
                  color: '#5e2121'
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
                  <Button 
                    style={{
                      backgroundColor: '#062e57'
                    }}
                  >
                    <NavLink to={`/clubs/${bookClub.id}`} className="nav-link">
                      See more details!
                    </NavLink>
                  </Button>
                  {currentUser && 
                    <Button 
                      style={{
                        backgroundColor: '#062e57'
                      }}
                    >
                      <NavLink to={`/clubs/${bookClub.id}/new`} className="nav-link">
                        Join!
                      </NavLink>
                    </Button>
                  }
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