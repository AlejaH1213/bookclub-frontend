import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewAccount from "../pages/NewAccount"

describe("<NewAccount />", () => {
  it("renders new account form fields", () => {
    render(
      <BrowserRouter>
        <NewAccount />
      </BrowserRouter>
    )
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const profilePictureInput = screen.getByPlaceholderText(/profile picture/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInputs = screen.getAllByPlaceholderText(/password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm password/i);
    const submitButton = screen.getByText(/Submit/i);
    const loginLink = screen.getByText(/Login/i);

    expect(usernameInput).toBeInTheDocument();
    expect(profilePictureInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    for (const input of passwordInputs) {
      expect(input).toBeInTheDocument()
    }
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  })
  it('submits the form with valid data', () => {
    const newAccountMock = jest.fn()
    render(
      <BrowserRouter>
        <NewAccount newaccount={newAccountMock}/>
      </BrowserRouter>
    );
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const profilePictureInput = screen.getByPlaceholderText(/profile picture/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInputs = screen.getAllByPlaceholderText(/password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm password/i);
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(profilePictureInput, { target: { value: 'https://example.com/pic.jpg' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    for (const passwordInput of passwordInputs) {
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
    }
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    expect(newAccountMock).toHaveBeenCalledWith({
      user: {
        email: 'test@example.com',
        password: 'password123',
        username: 'testuser',
        profile_picture: 'https://example.com/pic.jpg',
      },
    });
    // Explicitly clear the input field values
    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(profilePictureInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    for (const passwordInput of passwordInputs) {
      fireEvent.change(passwordInput, { target: { value: '' } });
    }
    fireEvent.change(confirmPasswordInput, { target: { value: '' } });
  
    expect(usernameInput).toHaveValue('');
    expect(profilePictureInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    for (const passwordInput of passwordInputs) {
      expect(passwordInput).toHaveValue('');
    }
    expect(confirmPasswordInput).toHaveValue('');
  });
})