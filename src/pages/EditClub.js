import React, {useState} from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const EditClub = ({bookClubs, updateBookClub, readBookClubs}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  let currentBookClub = bookClubs?.find((bookclub) => bookclub.id === +id)
  const [editBookClub, setEditBookClub] = useState({
    name: currentBookClub.name,
    summary: currentBookClub.summary,
    meeting_dates: currentBookClub.meeting_dates,
    book_of_the_month: currentBookClub.book_of_the_month,
    book_of_the_month_picture: currentBookClub.book_of_the_month_picture
  })
  const handleChange = (e) => {
    setEditBookClub({...editBookClub, [e.target.name]: e.target.value})
  }
  const handlesubmit = () => {
    updateBookClub(editBookClub, currentBookClub.id)
  }
  return (
    <>
      <h2>Edit Club</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={editBookClub.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="summary">
              Name
            </Label>
            <Input
              id="summary"
              name="summary"
              type="text"
              onChange={handleChange}
              value={editBookClub.summary}
            />
        </FormGroup>
        <FormGroup>
          <Label for="meeting_dates">
              Name
            </Label>
            <Input
              id="meeting_dates"
              name="meeting_dates"
              type="text"
              onChange={handleChange}
              value={editBookClub.meeting_dates}
            />
        </FormGroup>
        <FormGroup>
          <Label for="book_of_the_month">
              Name
            </Label>
            <Input
              id="book_of_the_month"
              name="book_of_the_month"
              type="text"
              onChange={handleChange}
              value={editBookClub.book_of_the_month}
            />
        </FormGroup>
        <FormGroup>
          <Label for="book_of_the_month_picture">
              Name
            </Label>
            <Input
              id="book_of_the_month_picture"
              name="book_of_the_month_picture"
              type="text"
              onChange={handleChange}
              value={editBookClub.book_of_the_month_picture}
            />
        </FormGroup>
        <NavLink to='/yourclubs'>
        <Button name="submit" onClick={handlesubmit}>
          Submit
        </Button>
        </NavLink>
      </Form>

    </>

  )
}

export default EditClub