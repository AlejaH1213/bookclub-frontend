import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders a greeting to the Flow Master space", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const greetingLink = screen.getByText(/about/i)
    expect(greetingLink).toBeInTheDocument()

  })

  it("displays the sign up and sign in options when the user is not logged in", () => {
    render(
      <BrowserRouter>
        <Header currentUser={null} />
      </BrowserRouter>
    )
    const signUpLink = screen.getByText(/sign up/i)
    const signInLink = screen.getByText(/sign in/i)
    expect(signUpLink).toBeInTheDocument()
    expect(signInLink).toBeInTheDocument()
  })

  it("displays the profile and 'your book clubs' links when the user is logged in", () => {
    render(
      <BrowserRouter>
        <Header currentUser={{id:1, username: 'test'}} />
      </BrowserRouter>
    )
    const profileLink = screen.getByText(/profile/i);
    const yourClubsLink = screen.getByText(/your book clubs/i);
    expect(profileLink).toBeInTheDocument();
    expect(yourClubsLink).toBeInTheDocument();
  })

  it("displays the 'Log out' button when a user is logged in", () => {
    render(
      <BrowserRouter>
        <Header currentUser={{ id: 1, username: 'testuser' }} />
      </BrowserRouter>
    )
    const logOutButton = screen.getByText(/log out/i);
    expect(logOutButton).toBeInTheDocument();
  })

  it("triggers the 'handleClick' function when 'Log out' button is clicked", () => {
    const mockLogout = jest.fn();
    render(
      <BrowserRouter>
        <Header currentUser={{ id: 1, username: 'testuser' }} logout={mockLogout} />
      </BrowserRouter>
    )
    const logOutButton = screen.getByText(/log out/i);
    fireEvent.click(logOutButton);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  })
})