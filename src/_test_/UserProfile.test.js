import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from "../pages/UserProfile";

describe("<UserProfile />", () => {
  const currentUser = {
    id: 1,
    username: "testuser",
    email: "testuser@example.com",
    profile_picture: "profile.jpg",
  };

  const bookClubs = [
    { id: 1, name: "Book Club 1" },
    { id: 2, name: "Book Club 2" },
  ];

  const memberships = [
    { user_id: 1, club_id: 1 },
    { user_id: 1, club_id: 2 },
  ];

  it("renders the user's profile with correct data", () => {
    render(
      <BrowserRouter>
        <UserProfile 
          currentUser={currentUser} 
          bookClubs={bookClubs} 
          memberships={memberships} 
        />
      </BrowserRouter>
    );

    const usernameElement = screen.getByText("testuser");
    const emailElement = screen.getByText("testuser@example.com");
    const profilePicture = screen.getByAltText("testuser");
    const bookClub1 = screen.getByText("Book Club 1");
    const bookClub2 = screen.getByText("Book Club 2");

    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(profilePicture).toBeInTheDocument();
    expect(bookClub1).toBeInTheDocument();
    expect(bookClub2).toBeInTheDocument();
  });
});
