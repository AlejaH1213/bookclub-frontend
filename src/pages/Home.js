import React from 'react'
import homePic from '../assets/HomePicture.png'
import arrow from '../assets/arrow.png'

const Home = () => {
  return ( 
      <div className='home'>
        <h1 >Welcome! Find Your Book Besties Today!</h1>
        <img 
        src={homePic}
        style={{
          height: '100%',
          width: '100%',
          textAlign: 'center'
        }}
        />
        <br></br>
        <img
        src={arrow}
        id='arrow'
        style={{
          height: '300px',
          width: '300px'
        }}
        />
        <br></br>
        <h2>LEARN MORE</h2>
        <br></br>
        <br></br>
        <p>Join the Book Avengers online book platform to join book clubs, read new books every month with your new besties!</p>
        <br></br>
        <h3><a href='./newaccount'>JOIN TODAY</a></h3>
        <br></br>
        <br></br>
        <br></br>
      </div>
  )
}

export default Home