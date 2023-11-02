import React from 'react'
import { useParams } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const ClubShow = ({ bookClubs }) => {
  const { id } = useParams()
  let currentClub = bookClubs.find((club) => club.id === +id)
  return (
    <>
      <h2>Look at our clubs</h2>
      <main className="card">
        {currentClub && (
          <Card>
            <img
              alt={`profile picture for ${currentClub.name}`}
              src={currentClub.book_of_the_month_picture}
            />
            <CardBody>
              <CardTitle tag="h5">
                {`${currentClub.name}`}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {` ${currentClub.summary},Our metting dates are: ${currentClub.meeting_dates}, we are currently reading: ${currentClub.book_of_the_month}`}
              </CardSubtitle>
              <Button> Join now!</Button>
            </CardBody>
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