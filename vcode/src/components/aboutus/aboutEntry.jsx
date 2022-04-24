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
                <a className="link" href={props.linkedin}><FaLinkedin /></a>
                <a className="link" href={props.github}><AiFillGithub /></a>
                <a className="link" href={props.mail}><CgMail /></a>
            </ul>
        </div>
    );
}

export default entry;