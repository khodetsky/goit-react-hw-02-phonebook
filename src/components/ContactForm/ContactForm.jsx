import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export const ContactForm = ({onAddContact}) => {
    const initialValues = {
        id: nanoid(),
        name: '',
        number: '',
    };

    return (
        <Formik initialValues={initialValues}  onSubmit={onAddContact}>
            <Form>
                <label >
                    Name
                    <Field type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                </label>
                <label >
                    Number
                    <Field type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
};
