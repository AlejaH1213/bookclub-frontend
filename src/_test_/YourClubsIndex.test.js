import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import YourClubsIndex from "../pages/YourClubsIndex";

describe("<YourClubsIndex />", () => {
  it('renders the user bookclubs', () => {
    render(
      <BrowserRouter>
        <YourClubsIndex/> 
      </BrowserRouter>
    )
  })
  screen.logTestingPlaygroundURL()
})