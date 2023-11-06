import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const homeHeading = screen.getByText(/welcome/i) 
    expect(homeHeading).toBeInTheDocument()
  })
})


describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("LEARN")
    render(<Home />)
  })
})