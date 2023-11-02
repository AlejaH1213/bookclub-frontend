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
    const inAppRoute = screen.getByText(/home/i);
    expect(inAppRoute).toBeInTheDocument()
  })
})
