import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import superhero from '../assets/superhero.png'
import villain  from '../assets/villains.png'

const EditClub = ({bookClubs, updateBookClub, memberships, currentUser}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const userMemberships = memberships.filter(membership => membership.user_id === currentUser.id)
  const userBookClubs = userMemberships.map(membership => {
    return bookClubs.find(bookClub => bookClub.id === membership.club_id)
  })
  const currentBookClub = userBookClubs.find((bookclub) => bookclub.id === +id)
  const [editBookClub, setEditBookClub] = useState(
    currentBookClub
    ? {
    name: currentBookClub.name,
    summary: currentBookClub.summary,
    meeting_dates: currentBookClub.meeting_dates,
    book_of_the_month: currentBookClub.book_of_the_month,
    book_of_the_month_picture: currentBookClub.book_of_the_month_picture
  }
  : {}
  )
  const handleChange = (e) => {
    setEditBookClub({...editBookClub, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    updateBookClub(editBookClub, currentBookClub.id)
  }

  if (!currentBookClub) {
    return <div>Club not found</div>;
  }
  if (!userBookClubs) {
    return <div>You are not a member of this club, and you cannot edit it.</div>;
  }
  return (
    <>
      <h2 className='title-new-account'>Edit Club</h2>
      <div className='edit-container'>
        <div className='form-images'>
          <img
            src={superhero}
            width={'325px'}
            height={'400px'}
          /> 
          <Form>
            <FormGroup>
              <Label for="name" className=''>
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
                  Summary
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
                  Meeting Dates
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
                  Book of the Month
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
                  URL for book of the month picture
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
            <Button 
            name="submit"
            onClick={handleSubmit} 
            style={  
              {backgroundColor: '#ff0000',
              color: 'black'
            }}
            >
              Submit
            </Button>
            </NavLink>
          </Form>
          <img
            src={villain}
            width={'325px'}
            height={'400'}
          />
        </div>
      </div>

    </>

  )
}

export default EditClub