import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ClubIndex from "../pages/ClubIndex"

describe("<ClubIndex />", () => {
  it("renders a book club", () => {
    render(
      <BrowserRouter>
        <ClubIndex bookClubs={[]} readBookClubs={() => {}} />
      </BrowserRouter>
    )
    const bookClubIndex = screen.getByText(/Explore and Join a Book Club/i)
    expect(bookClubIndex).toBeInTheDocument()
  })

  it("renders no book clubs when bookClubs is an empty array", () => {
    const bookClubs = [];
    render(
      <BrowserRouter>
        <ClubIndex bookClubs={bookClubs} readBookClubs={() => {}} />
      </BrowserRouter>
    );

    const bookClubIndex = screen.getByText(/Explore and Join a Book Club/i);
    const cards = screen.queryAllByTestId("club-card");
    
    expect(bookClubIndex).toBeInTheDocument();
    expect(cards).toHaveLength(0);
  })

  it("renders book clubs when bookClubs contains items", () => {
    render(
      <BrowserRouter>
      <ClubIndex bookClubs={[
      {
        id: 1,
        name: "Book Club 1",
        book_of_the_month_picture: "image1.jpg",
        summary: "Summary 1",
      },
      {
        id: 2,
        name: "Book Club 2",
        book_of_the_month_picture: "image2.jpg",
        summary: "Summary 2",
      },
    ]}
    readBookClubs={() => {}}
      />
      </BrowserRouter>
    );

    const bookClubIndex = screen.getByText(/Explore and Join a Book Club/i)
    const cards = screen.getAllByText(/Summary [0-9]/)

    expect(bookClubIndex).toBeInTheDocument()
    expect(cards).toHaveLength(2)
  })
})