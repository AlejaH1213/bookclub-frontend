import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ClubIndex from "../pages/ClubIndex"

describe("<ClubIndex />", () => {
  it("renders a blook club", () => {
    render(
      <BrowserRouter>
        ClubIndex
      </BrowserRouter>
    )
    const bookClubIndex = screen.getByText(/clubindex/i)
    expect(bookClubIndex).toBeInTheDocument()
  })
})