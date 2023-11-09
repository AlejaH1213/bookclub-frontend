import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const NewClub = ({createNewClub}) => {
  const [newClub, setNewClub] = useState({
    name: "",
    image: "",
    meetingDay: "",
    thisMonthBookTitle: "",
    thisMonthBookImage: "",
    summary: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewClub({...newClub, [e.target.name]: e.target.value})
  }
  console.log("newClub:", newClub)

  const handleSubmit = () => {
    createNewClub(newClub)
    navigate("/profile")
  }

  return (
    <>
      <h2>Create a New Club</h2>
      <Form>
        
        <FormGroup>
          <Label for="name">Name</Label>
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
          <Label for="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            placeholder="Place your image url here"
            type="url"
            onChange={handleChange}
            value={newClub.image}
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