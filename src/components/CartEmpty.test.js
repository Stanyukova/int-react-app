import { render, screen } from '@testing-library/react';
import CartEmpty from './CartEmpty';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

test('link test', () => {
  render( <MemoryRouter>
    <CartEmpty />
  </MemoryRouter>);
  const linkElement = screen.getByTestId("main-link");
  userEvent.click(linkElement);
  expect(screen.queryByTestId("main")).not.toBeInTheDocument();
 
});

test('cart is empty', ()=>{
    render( <MemoryRouter>
        <CartEmpty />
      </MemoryRouter>);
      const emptyElement = screen.getByText(/Корзина пуста/i)
      expect(emptyElement).toBeInTheDocument()
})
