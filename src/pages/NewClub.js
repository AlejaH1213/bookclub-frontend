import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const NewClub = ({createNewClub , currentUser, memberships, bookClubs}) => {
  const userMemberships = memberships.filter(membership => membership.user_id === currentUser.id)
  const userBookClubs = userMemberships.map(membership => {
    return bookClubs.find(bookClub => bookClub.id === membership.club_id)
  })

  const navigate = useNavigate()
  const [newClub, setNewClub] = useState({

    name: "",
    meeting_dates: "",
    book_of_the_month: "",
    book_of_the_month_picture: "",
    summary: ""
  })

  const handleChange = (e) => {
    setNewClub({...newClub, [e.target.name]: e.target.value})
  }
  console.log("newClub:", newClub)

  const handleSubmit = () => {
    createNewClub(newClub, currentUser)
    navigate("/yourclubs")
  }

  return (
    <>
      <h2>Create a New Club</h2>
      <Form>
        
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Place your new club name here"
            type="text"
            onChange={handleChange}
            value={newClub.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="meeting_dates">
            The Meeting Day
          </Label>
          <Input
            id="meeting_dates"
            name="meeting_dates"
            placeholder="Place your date of meeting here"
            type="date"
            onChange={handleChange}
            value={newClub.meeting_dates}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="book_of_the_month">
            This Month Book
          </Label>
          <Input
            id="book_of_the_month"
            name="book_of_the_month"
            placeholder="Place this month's book here"
            type="text"
            onChange={handleChange}
            value={newClub.book_of_the_month}
          />
        </FormGroup>

        <FormGroup>
          <Label for="book_of_the_month_picture">
            This Month Book Image
          </Label>
          <Input
            id="book_of_the_month_picture"
            name="book_of_the_month_picture"
            placeholder="Place book image here"
            type="url"
            onChange={handleChange}
            value={newClub.book_of_the_month_picture}
          />
        </FormGroup>

        <FormGroup>
          <Label for="summary">
          summary
          </Label>
          <Input
            id="summary"
            name="summary"
            placeholder="Place summary here"
            type="text"
            onChange={handleChange}
            value={newClub.summary}
          />
        </FormGroup>
        
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default NewClub