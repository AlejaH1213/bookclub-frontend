import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewClub from "../pages/NewClub";
import React from 'react';

describe("<NewClub />", () => {
  const createNewClub = jest.fn()
  const bookClubs = [
    {
      id: 1, 
      name: "Literary Legends",
      meeting_dates: "Tuesdays",
      book_club_image: "https://t3.ftcdn.net/jpg/05/32/69/64/360_F_532696455_KAce2D5R3bxfo5qdKFeKhOqgWhO2fKmz.jpg",
      book_of_the_month: "The Ballad of Songbirds and Snakes",
      book_of_the_month_picture: "https://upload.wikimedia.org/wikipedia/ar/f/f1/The_Ballad_of_Songbirds_and_Snakes_%28Suzanne_Collins%29.png",
      summary: "Fantasy fans unite! Read fantasy books with us monthly."
    }
  ]
  const currentUser = {
    id: 1,
    email: "hungergamesfan@example.com",
    password: "password",
    password_confirmation: "password",
    username: "JaneAusten",
    profile_picture: "https://media.istockphoto.com/id/1292618730/photo/elegant-jane-austen-style-woman-strolling-a-courtyard.jpg?s=1024x1024&w=is&k=20&c=rUj70rq6t6KVVCtlW7FPFImCBpvZ2EVcbR6H4i2mKOg="
  }
  const memberships = [
    {
      id: 1,
      club_id: 1,
      user_id: 1,
      name: "fantasy club"
    }
  ]
  it("renders form inputs", () => {
    render(
      <BrowserRouter>
        <NewClub
          createNewClub={createNewClub}
          currentUser={currentUser}
          memberships={memberships}
          bookClubs={bookClubs}
        /> 
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {
      name: /create a new club/i
    })
    const name = screen.getByRole('textbox', {
      name: /name/i
    })
    const image = screen.getByRole('textbox', {
      name: /image url/i
    })
    const meetingDay = screen.getByLabelText(/the meeting day/i)
    const monthBook = screen.getByPlaceholderText("Place this month's book here")
    const monthBookImage = screen.getByPlaceholderText("Place book image here");
    const summary = screen.getByRole('textbox', {
      name: /summary/i
    })
    const submit = screen.getByRole('button', {
      name: /submit/i
    })
    expect(heading).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(meetingDay).toBeInTheDocument()
    expect(monthBook).toBeInTheDocument()
    expect(monthBookImage).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(submit).toBeInTheDocument()
  })

  it('updates state when form inputs change', () => {
    render(
      <BrowserRouter>
        <NewClub
        createNewClub={createNewClub}
        currentUser={currentUser}
        memberships={memberships}
        bookClubs={bookClubs}
        /> 
      </BrowserRouter>
    )
    const imageInput = screen.getByLabelText(/Image URL/i)

    
    fireEvent.change(imageInput, { target: { name: 'image', value: 'https://example.com/image.jpg' } })

    const imageInputUpdated = screen.getByDisplayValue('https://example.com/image.jpg'); 
    expect(imageInputUpdated).toBeInTheDocument()
  })
  
  it('calls createNewClub and navigates on form submission', () => {
    const createNewClubMock = jest.fn()
    render(
      <BrowserRouter>
        <NewClub 
        createNewClub={createNewClub}
        currentUser={currentUser}
        memberships={memberships}
        bookClubs={bookClubs}
        />
      </BrowserRouter>
    )
    const submitButton = screen.getByText(/Submit/i)
    fireEvent.click(submitButton)
  })
})

