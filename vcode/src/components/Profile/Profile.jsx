import React from 'react'
import { Card } from 'react-bootstrap';
import './Profile.css';



function profile(props) {
    return (

        <div style={{ display: "flex", margin: "10% auto", width: "80%", border: "5px solid #FFF", padding: "50px"}}>

            <div className="profile-info">
                <h2 style={{ margin: "20px auto 25px auto"}}>Aditya Gupta</h2>
                <h4 style={{ margin: "20px auto 25px auto"}}>Contest Rating : ****</h4>
                <h4>lit2020055@iiitl.ac.in</h4>
                <h5>Prayagraj</h5>
                <h5>Uttar Pradesh</h5>
                <h5>Programing Language : C++</h5>
            </div>

            <div>
                <img className='imgg' src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="img" />
            </div>

        </div>
    );
}

export default profile;