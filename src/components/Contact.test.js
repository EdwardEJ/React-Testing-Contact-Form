import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('ContactForm adds new user', () => {
  //Arrange
  render(<ContactForm />)

  //Act(Query)
  const firstNameInput = screen.getByLabelText(/first name/i); //added id='first name'
  const lastNameInput = screen.getByLabelText(/last name/i); //added id='first name'
  const emailInput = screen.getByLabelText(/email/i); //added id='email'
  const messageInput = screen.getByLabelText(/message/i); //added id='message'

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Johnson' } });
  fireEvent.change(emailInput, { target: { value: 'john@son.com' } });
  fireEvent.change(messageInput, { target: { value: 'My message.' } });
  //Assert

})