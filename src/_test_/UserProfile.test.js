import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from "../pages/UserProfile"

describe("<ClubShow />", () => {
  it("renders a club", () => {
    render(
      <BrowserRouter>
        <UserProfile /> 
      </BrowserRouter>
    )

    const theUserProfile = screen.getByText(/userprofile/i)
    expect(theUserProfile).toBeInTheDocument()
  })
})