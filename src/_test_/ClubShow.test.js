import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes} from 'react-router-dom';
import ClubShow from "../pages/ClubShow"

describe("<ClubShow />", () => {
  const mockBookClubs = [
    {
        id: 1, 
        name: "Literary Legends",
        meeting_dates: "Tuesdays",
        book_club_image: "https://t3.ftcdn.net/jpg/05/32/69/64/360_F_532696455_KAce2D5R3bxfo5qdKFeKhOqgWhO2fKmz.jpg",
        book_of_the_month: "The Ballad of Songbirds and Snakes",
        book_of_the_month_picture: "https://upload.wikimedia.org/wikipedia/ar/f/f1/The_Ballad_of_Songbirds_and_Snakes_%28Suzanne_Collins%29.png",
        summary: "Fantasy fans unite! Read fantasy books with us monthly."
    } ]

  it("renders club details", () => {
    render(
      <MemoryRouter initialEntries={['/clubs/1']}>
      <Routes>
        <Route path="/clubs/:id" element={<ClubShow bookClubs={mockBookClubs} />} />
      </Routes>
    </MemoryRouter>
    )
      const meetingDates = screen.getByText("Tuesdays")
      const bookOfTheMonth = screen.getByText("The Ballad of Songbirds and Snakes")
      const summary = screen.getByText("Fantasy fans unite! Read fantasy books with us monthly.")
  
      
      expect(meetingDates).toBeInTheDocument()
      expect(bookOfTheMonth).toBeInTheDocument()
      expect(summary).toBeInTheDocument()

    
  })
})