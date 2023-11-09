import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewClub from "../pages/NewClub";
import React from 'react';

describe("<NewClub />", () => {
  it("renders form inputs", () => {
    render(
      <BrowserRouter>
        <NewClub /> 
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
    const monthBook = screen.getByRole('textbox', {
      name: /this month book/i
    })
    const monthBookImage = screen.getByRole('textbox', {
      name: /this month's book image/i
    })
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
        <NewClub /> 
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
        <NewClub createNewClub={createNewClubMock} />
      </BrowserRouter>
    )
    const submitButton = screen.getByText(/Submit/i)
    fireEvent.click(submitButton)


  })
  
})

