import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders the App", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL() 
    const inAppRoute = screen.getByText(/home/i);
    expect(inAppRoute).toBeInTheDocument()
  })
})

// Header
// user Profile
// book index
// book show 
// club index 
// club show 
// Footer
// not found 
// new club 
// new account 
// loggin 

