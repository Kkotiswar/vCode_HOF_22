import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Login.css"
import axios from "axios";




const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = e => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name] : value
        })
    }

    function Login(){
        const {email,password} = user;
        axios.post("http://localhost:9002/login",user)
        .then(res=>{
            alert(res);
        })
    }

    return (
            <div>
            {console.log(user)}
                <Form  className='login'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={user.value} placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your credentials with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={Login}>
                        Log In
                    </Button>
                </Form>
            </div>
    );
};

export default Login;