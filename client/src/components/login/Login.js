import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser } from "../../redux/actions/action";

const Login = ({ 
    history, 
    loginUser, 
    loginError,
    isAuthenticated,
 }) => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
          }
    }, [isAuthenticated,history]);

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
        const { email, password } = userData;
        const errors = {};

        if (!email) errors.email = "*Email is required";
        if (!password) errors.password = "*Password is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        loginUser(userData);
    }

    return (
        <div className="register-form">
            <Form onSubmit={handleSave}>
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {(loginError) ? (
                    <p>{loginError}</p>
                ) : (null)} 
        </div>
    )
}

const mapDispatchToProps = {
    loginUser: loginUser,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    loginError:state.userReducer.loginError
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
