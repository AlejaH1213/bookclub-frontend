import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders team names", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const teamNames = screen.getByText(/dre/i)
    expect(teamNames).toBeInTheDocument()
  })
})