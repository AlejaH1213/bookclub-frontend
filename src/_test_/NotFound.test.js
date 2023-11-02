import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders not found page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    const teamNames = screen.getByText(/NotFound/i)
    expect(teamNames).toBeInTheDocument()
  })
})