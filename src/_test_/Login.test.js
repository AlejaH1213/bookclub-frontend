import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from "../pages/Login"

describe("<ClubShow />", () => {
  it("renders a club", () => {
    render(
      <BrowserRouter>
        <Login /> 
      </BrowserRouter>
    )
   
    screen.logTestingPlaygroundURL()

    const userLogin = screen.getByRole('button', {name: /login/i})
    expect(userLogin).toBeInTheDocument()
  })
})