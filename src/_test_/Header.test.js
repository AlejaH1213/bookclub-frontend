import { render, screen } from '@testing-library/react';
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
})