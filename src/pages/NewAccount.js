import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const NewAccount = ({newaccount}) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user":{ email: data.email, password: data.password, username: data.username, profile_picure: data.profile_picture}
    }

    newaccount(userInfo)
    navigate('/')
    e.target.reset()
  }

const NewAccount = () => {
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Username: <input type="username" name="username" placeholder="username" />
        <br/>
        {/* maybe this profile picture needs to have a different type because it is an url */}
        Profile Picture: <input type="profile_picture" name="profile_picture" placeholder="profile picture" />
        <br/> 
        Email: <input type="email" name="email" placeholder="email" />
        <br/>
        Password: <input type="password" name="password" placeholder="password" />
        <br/>
        Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password" />
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <div>Already registered, <a href="/login">Login</a> here.</div>

    </div>
  )
}

export default NewAccount