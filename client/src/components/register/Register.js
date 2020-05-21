import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import API from "../../api/api";

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setErrors(prevData => ({
            ...prevData,
            [name]: ""
        }));
    }

    function formIsValid() {
        const { name, email, password, confirmPassword } = userData;
        const errors = {};

        if (!name) errors.name = "*Name is required.";
        if (!email) errors.email = "*Email is required";
        if (!password) errors.password = "*Password is required";
        if (!confirmPassword) errors.confirmPassword = "*Confirm password is required"

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        setUserData({ name: "", email: "", password: "", confirmPassword: "" });
        if (!formIsValid()) return;
        API.registerUser(userData)
            .then(() => {
                console.log("sucess");
            })
            .catch((err) => {
                console.log(err);
            })
        // setSaving(true);
        // saveCourse(course)
        //     .then(() => {
        //         toast.success("Course saved.");
        //         history.push("/courses");
        //     })
        //     .catch(error => {
        //         setSaving(false);
        //         setErrors({ onSave: error.message });
        //     });
    }

    return (
        <div className="register-form">
            <Form onSubmit={handleSave}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                    {errors.name ? <div className="form-error">{errors.name}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    {errors.email ? <div className="form-error">{errors.email}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    {errors.password ? <div className="form-error">{errors.password}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword ? <div className="form-error">{errors.confirmPassword}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Show Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register;
