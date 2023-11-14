import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewMembership from '../pages/NewMembership'

describe("<NewMembership />", () => {
  it("renders", () => {
    render(
      <BrowserRouter>
        <NewMembership />
      </BrowserRouter>
    )
    
  })
})
