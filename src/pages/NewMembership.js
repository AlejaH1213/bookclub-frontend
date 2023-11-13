import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import superhero from '../assets/superhero.png'
import villain  from '../assets/villains.png'

const NewMembership = ({createMembership , currentUser, bookClubs}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const currentBookClub = bookClubs.find((bookclub) => bookclub.id === +id)
  console.log("current USER:", currentUser);
  console.log("current BOOKCLUB:", currentBookClub);
  const [newMembership, setNewMembership] = useState({
    club_id: currentBookClub.id,
    user_id: currentUser.id,
    name: ""
  })

  const handleChange = (e) => {
    setNewMembership({...newMembership, [e.target.name]: e.target.value})
  }
  console.log("NewMembership:", newMembership)

  const handleSubmit = () => {
    createMembership(newMembership)
    navigate("/yourclubs")
  }

  return (
    <>
      <h2 className="title">Create a nickname</h2>
      <div className='form-images'>
        <img
          src={superhero}
          width={'300px'}
          height={'300px'}
        /> 
      <Form className="form-container">
        
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="type your nickname here"
            type="text"
            onChange={handleChange}
            value={newMembership.name}
          />
        </FormGroup>
        
        <Button onClick={handleSubmit} id='submit' name="submit">
          Submit
        </Button>
      </Form>
      <img
          src={villain}
          width={'325px'}
          height={'400'}
        />
      </div>
    </>
  )
}

export default NewMembership