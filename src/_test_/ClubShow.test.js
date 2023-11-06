import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ClubShow from "../pages/ClubShow"

describe("<ClubShow />", () => {
  it("renders a club", () => {
    render(
      <BrowserRouter>
        ClubShow 
      </BrowserRouter>
    )

    const bookClubIndex = screen.getByText(/clubshow/i)
    expect(bookClubIndex).toBeInTheDocument()
  })
})