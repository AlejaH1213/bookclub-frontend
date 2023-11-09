import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditClub from "../pages/EditClub"

describe("<EditClub />", () => {
  it("renders team names", () => {
    render(
      <BrowserRouter>
        <EditClub />
      </BrowserRouter>
    )
    const teamNames = screen.getByText(/edit/i)
    expect(teamNames).toBeInTheDocument()
  })
})