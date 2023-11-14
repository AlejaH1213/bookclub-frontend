import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import YourClubsIndex from "../pages/YourClubsIndex";

describe("<YourClubsIndex />", () => {
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
  it('renders the user bookclubs', () => {
    render(
      <BrowserRouter>
        <YourClubsIndex
          currentUser={currentUser}
          memberships={memberships}
          bookClubs={bookClubs}
        /> 
      </BrowserRouter>
    )

  const mainTitle = screen.getByText(/Here are your clubs/i);
  expect(mainTitle).toBeInTheDocument()
  })
})