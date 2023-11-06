import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from "../pages/AboutUs"

describe("<AboutUs />", () => {
  it("renders the About Us page", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    

    const linksWithin1 = screen.getByRole('heading', {name: /project/i})
    expect(linksWithin1).toBeInTheDocument()

    const linksWithin2 = screen.getByRole('heading', {name: /tech/i})
    expect(linksWithin2).toBeInTheDocument()
    
    const linksWithin3 = screen.getByRole('heading', {name: /design lead/i})
    expect(linksWithin3).toBeInTheDocument()

    // const inTheCards = screen.getByText(/github/i) 
    // expect(inTheCards).toBeInTheDocument()
  })
})