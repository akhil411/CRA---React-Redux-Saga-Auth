import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser } from "../../redux/actions/action";

function Login({ history, loginUser, user, article }) {
    const [userData, setUserData] = useState({ email: "", password: "" });
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
        // history.push("/news");
        // API.loginUser(userData)
        //     .then(() => {
        //         toast.success("Register Success!!!")
        //         history.push("/login");
        //     })
        //     .catch((err) => {
        //         console.log(err.response);
        //     })
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
                <Link to="/news">
                    <Button variant="primary" type="submit">
                        News
                </Button>
                </Link>
                {(article) ? (
                    article.map((item) => (
                        <h1>{item.title}</h1>
                    ))
                ) : (<h2>nothing</h2>)}

                {(user) ? (
                    console.log(user)
                ) : (null)}
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    loginUser: loginUser,
};

const mapStateToProps = (state) => ({
    user: state.user,
    article: state.news,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
