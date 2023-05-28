import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import PropTypes from "prop-types";


export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    handelChange = e => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handelSubmit}>
                <Label > Name
                    <Input
                    type="text"
                    value={this.state.name}
                    onChange={this.handelChange}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Label>
                <Label > Phone number
                    <Input
                    type="tel"
                    value={this.state.number}
                    onChange={this.handelChange}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label>
                <Button type='submit'>Add contact</Button>
            </Form>
        )
    }
}
