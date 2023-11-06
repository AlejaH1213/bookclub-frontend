import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewClub from "../pages/NewClub"

describe("<ClubShow />", () => {
  it("renders a club", () => {
    render(
      <BrowserRouter>
        <NewClub /> 
      </BrowserRouter>
    )
   

    const createNewClub = screen.getByLabelText(/the meeting day/i)
    expect(createNewClub).toBeInTheDocument()
  })
})