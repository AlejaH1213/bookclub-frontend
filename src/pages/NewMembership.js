import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

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
      <h2>Create a nickname</h2>
      <Form>
        
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
        
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default NewMembership