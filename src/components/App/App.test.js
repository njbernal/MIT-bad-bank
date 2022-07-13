import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App'
import userEvent from '@testing-library/user-event';


it('Creates a user', async () => {

  const { getByText, getByLabelText, getAllByText } = await render(<App />);

  const btn = getByText('Submit')

  expect(getByText(/name/i).textContent).toBe("Name")
  const nameField = getByLabelText('Name')
  const passwordField = getByLabelText('Password')
  const emailField = getByLabelText('Email')

  userEvent.type(nameField, "Nick Bernal")
  userEvent.type(emailField, "nickjbernal@gmail.com")
  userEvent.type(passwordField, "secret")

  userEvent.click(btn)

  getByText('Success')

  const depositLink = getByText('Make a deposit')
  userEvent.click(depositLink)

  // Verify we moved to deposit page
  getByText(/Balance:/)

  // Verify starting balance
  getByText("$100")
})