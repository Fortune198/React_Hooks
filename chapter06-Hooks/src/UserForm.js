import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';

function UserForm() {
    //set initial field state 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Interest, setInterest] = useState('');
    //set error initial state
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [InterestError, setInterestError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        //setting up email error handling
        let emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }

        //setting up password error handling
        let passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        //setting up interest error handling
        let interestValid = false;
        if (Interest.length == 0) {
            setInterestError("We would like to know something interesting about you");
        }
        else {
            setInterestError("")
            interestValid = true
        }

        if (emailValid && passwordValid && interestValid) {
            alert('Email: ' + email + '\nPassword: ' + password + '\nInterest: ');
            setEmail('');
            setPassword('');
            setInterest('');
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password} />
                </Form.Group>
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}

                <Form.Group controlId="formBasicInterest">
                    <Form.Label>Interest</Form.Label>
                    <Form.Control type="interest" placeholder="Enter interest"
                        onChange={event => setInterest(event.target.value)}
                        value={Interest} />
                    <Form.Text className="text-muted">
                        Tell us something interesting about yourself!
                    </Form.Text>
                </Form.Group>
                {InterestError.length > 0 &&
                    <Alert variant="danger">{InterestError}</Alert>}
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default UserForm;
