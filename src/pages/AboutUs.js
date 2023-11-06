import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap'
import Dre from '../assets/about-me-pic.jpeg'
import Aleja from '../assets/aleja-pic.jpg'
import Xena from '../assets/xena-pic.jpg'

const AboutUs = () => {
  return (
    <>
      <div className='cards-container'>
        <div className='aleja-card'>
          <Card
            style={{
              width: '18rem',
              backgroundColor: '#ff0000',
              color: '#5e2121'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                Aleja Hale
              </CardTitle>
              <CardSubtitle
                tag="h6"
              >
                Project, Product Manager
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src={Aleja}
              width="100%"
            />
            <CardBody>
              <CardText>
                Aleja is a full stack web developer based in California, with experience in multiple programming languages such as React, Ruby and Javascript. Rapidly learning new skills and embracing various work environments are among her strengths
              </CardText>
              <CardLink className='about-us-link' href="https://www.linkedin.com/in/alejandra-hale/" target='_blank'>
                LinkedIn
              </CardLink>
              <CardLink className='about-us-link' href="#">
                GitHub
              </CardLink>
            </CardBody>
          </Card>
        </div>
        <div className='xe-card'>
          <Card
            style={{
              width: '18rem',
              backgroundColor: '#c3c205',
              color: '#636303'
            }}
            className='indiv-card'
          >
            <CardBody>
              <CardTitle tag="h5">
                Xena Sitnikova
              </CardTitle>
              <CardSubtitle
                tag="h6"
              >
                Tech Lead
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src={Xena}
              width="100%"
            />
            <CardBody>
              <CardText>
                Hey, I'm Xena, and I tackle the daily grind with a sprinkle of excitement, much like I add extra shots of espresso to my coffee. I'm like a bookworm on a caffeine high, making each day a hilarious adventure, one page – I mean step – at a time!
              </CardText>
              <CardLink className='about-us-link' href="https://www.linkedin.com/in/sxena/" target='_blank'>
                LinkedIn
              </CardLink>
              <CardLink className='about-us-link' href="https://github.com/XenaSit" target='_blank'>
                GitHub
              </CardLink>
            </CardBody>
          </Card>
        </div>
        <div className='dre-card'>
          <Card
            style={{
              width: '18rem',
              backgroundColor: '#062e57',
              color: '#70b2f5'
            }}
            className='indiv-card'
          >
            <CardBody>
              <CardTitle tag="h5">
                Dre Lopez Delgado
              </CardTitle>
              <CardSubtitle
                tag="h6"
              >
                Design Lead
              </CardSubtitle>
            </CardBody>
            <img
              alt="Card cap"
              src={Dre}
              width="100%"
              />
            <CardBody>
              <CardText>
                Dre is a big science nerd with a love for tech and books. They are a full stack web developer with skills such as React.js and Ruby on Rails. You can usually find them typing away at their desk or reading a book with a coffee on hand. 
              </CardText>
              <CardLink className='about-us-link' href="https://www.linkedin.com/in/andrea-lopez-/" target='_blank'>
                LinkedIn
              </CardLink>
              <CardLink className='about-us-link' href="https://github.com/alopezdelgado" target='_blank'>
                GitHub
              </CardLink>
            </CardBody>
          </Card>
       </div>
      </div>
    </>

  )
}

export default AboutUs
