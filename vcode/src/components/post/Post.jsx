import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Post.css';



const post = (props) => {

    return (
        <div className="post-div" style={{ margin: "5% auto", width: "100%", border: "5px solid #FFF", padding: "50px" }}>


            <div style={{display: "flex", padding: "10px 0 50px", margin: "auto 3%"}}>
                <img className='img' src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="img" />
                <h4 className="form-group" style={{margin: "auto 20px"}}>Aditya Gupta</h4>
            </div>
            

            <Form>
                <Form.Group className="form-group  mb-3" controlId="formBasicPassword">
                    <Form.Label className='post-label'>Question</Form.Label>
                    <Form.Control as="textarea" placeholder="Write here..." rows={3} />
                </Form.Group>

                <Form.Group className="form-group  mb-3" controlId="formBasicPassword">
                    <Form.Label className='post-label'>Answer</Form.Label>
                    <Form.Control as="textarea" placeholder="Write here..." rows={3} />
                </Form.Group>
                

                <Form.Group className="form-group  mb-3" controlId="formBasicPassword">
                    <Form.Label className='post-label'>Post</Form.Label>
                    <Form.Control as="textarea" placeholder="Write here..." rows={5} />
                </Form.Group>

                <Button className='post-button' variant="primary" type="submit">
                    Summit
                </Button>
            </Form>
        </div>
    );

}


export default post;