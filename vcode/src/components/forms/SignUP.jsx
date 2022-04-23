import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";


const SignUp = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        CF_Handle:"",
        city: "",
        State: "Andhra Pradesh",
        programmingLanguage: "C++",
        ZipCode: ""
    })

    const handleChange = e => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name] : value
        });
    }

    const register = () => {
        const {name,email,password,CF_Handle,city,State,programmingLanguage,Zipcode} = user;
        alert(user.lname+"is posted")
        axios.post("http://localhost:9002/register",user)
        .then(res=>{    
            alert(res.body);
            console.log(res);
        });
    }

    return (
        <div style={{ margin: "auto", width: "60%", border: "5px solid #FFF", padding: "10px" }}>
        {console.log("user:",user)}
            <div style={{ textAlign: 'left' }}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required  name="name" value={user.name} type="text" placeholder="Enter First Name" onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required name="email" value={user.email} type="email" placeholder="Enter email" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required name="password" value={user.password} type="password" placeholder="Password" onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>CodeForces Handle</Form.Label>
                        <Form.Control required placeholder="CodeForces Handle" name='CF_Handle' value={user.CF_Handle} onChange={handleChange}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required placeholder='Ex:Delhi' name="city" value={user.city} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose..." name='State' value={user.State} onChange={handleChange}>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>programming Language</Form.Label>
                            <Form.Select defaultValue="Choose..." name="programmingLanguage" value={user.programmingLanguage} onChange={handleChange}>
                                <option value="C++">C++</option>
                                <option value="Python">Python</option>
                                <option value="Go">Go</option>
                                <option value="C">C</option>
                                <option value="Java">Java</option>
                                <option value="Javascript">Javascript</option>
                                <option value="pascal">pascal</option>
                                <option value="Scala">Scala</option>
                            </Form.Select>
                        </Form.Group>   

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required name="ZipCode" value={user.ZipCode} onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check  type="checkbox" label="Remember My Login Info" />
                    </Form.Group>

                    <Button variant="primary" onClick={register} >
                        Submit
                    </Button>
                </Form>
            </div> </div>
    );
};
export default SignUp;
