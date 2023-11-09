import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from "../pages/Login";

describe("<Login />", () => {
  it("renders a login button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it("handles form submission", () => {
    const loginMock = jest.fn(); 
    render(
      <BrowserRouter>
        <Login login={loginMock} />
      </BrowserRouter>
    );

 
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const submitButton = screen.getByText('Login');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    

    expect(loginMock).toHaveBeenCalledWith({
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
    });
  });
});
