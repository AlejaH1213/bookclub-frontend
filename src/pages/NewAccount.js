import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import superhero from '../assets/superhero.png'
import villain  from '../assets/villains.png'

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
  return (
    <div>
      <div className='title-new-account'>
        <h2>Sign Up</h2>
      </div>
      <div className='form-images'>
        <img
          src={superhero}
          width={'500px'}
        /> 
        <form className='form-container' ref={formRef} onSubmit={handleSubmit}>
          Username: <input className='form-item' type="username" name="username" placeholder="username" />
          {/* maybe this profile picture needs to have a different type because it is an url */}
          Profile Picture: <input className='form-item' type="profile_picture" name="profile_picture" placeholder="profile picture" />
          Email: <input className='form-item' type="email" name="email" placeholder="email" />
          Password: <input className='form-item' type="password" name="password" placeholder="password" />
          Confirm Password: <input className='form-item' type="password" name="password_confirmation" placeholder="confirm password" />
          <br/>
          <input className='submit' type="submit" value="Submit" />
          <br/>
          <div>Already registered, <a href="/login">Login</a> here.</div>
        </form>
        <br/>
        <img
          src={villain}
          width={'325px'}
          height={'400'}
        />
      </div>
    </div>
  )
}

export default NewAccount