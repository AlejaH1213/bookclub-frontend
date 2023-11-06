import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewAccount from "../pages/NewAccount"

describe("<NewAccount />", () => {
  it("renders new account", () => {
    render(
      <BrowserRouter>
        <NewAccount />
      </BrowserRouter>
    )
    const placeHolderForAccount = screen.getByPlaceholderText(/username/i)
    expect(placeHolderForAccount).toBeInTheDocument()
  })
})