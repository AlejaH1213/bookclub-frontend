import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import superhero from '../assets/superhero.png'
import villain  from '../assets/villains.png'

const Login = ({ login }) => {
  const formRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo)
    navigate('/profile')
    e.target.reset()
  }
  
  return (
    <div>
      <div className='form-images'>
        <img
          src={superhero}
          width={'500px'}
        /> 
        <form className='form-container' ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" className='form-item' name='email' placeholder="email" />
          <br/>
          Password: <input type="password" className='form-item' name='password' placeholder="password" />
          <br/>
          <input className='submit' type='submit' value="Login" />
        </form>
        <br />
        <br/>
        <img
          src={villain}
          width={'325px'}
          height={'400'}
        />
      </div>
        <div className='title-new-account'>Not registered yet, <a href="/newaccount">Signup</a> </div>
    </div>
  )
}

export default Login