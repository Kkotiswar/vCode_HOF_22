import react from 'react'
import './aboutEntry.css'
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {CgMail} from "react-icons/cg";

function entry(props)
{
    return (
        <div className='term'>
            <dt>
                <span className='emoji' > <img style={{height: "100px", width: "100px", borderRadius: "50%"}} src={props.img} alt="img" /> </span>
                <span> {props.name} </span>
            </dt>
            <dd> {props.role} </dd>
            <ul>
                <a className="link" href='https://www.linkedin.com/in/aditya-gupta-83426b237/'><FaLinkedin /></a>
                <a className="link" href='https://github.com/adityastro'><AiFillGithub /></a>
                <a className="link" href='lit2020055@iiitl.ac.in'><CgMail /></a>
            </ul>
        </div>
    );
}

export default entry;