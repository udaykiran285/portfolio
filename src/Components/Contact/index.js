import './index.css'
import { IoMdCall ,IoMdMail  } from "react-icons/io";
import { FaGithub,FaLinkedin  } from "react-icons/fa6";
import Navbar  from '../Navbar'

const navLinksObject = {
    home : false,
    about : false,
    projects : false,
    services : false,
    contact : true,
    skills :  false
}


const Contact  = () => (
    <>
        <Navbar navLinksObject={navLinksObject}/>
        <div className='contact-bg'>
            <div className='container'>
                <div className='row'>
                    <p className="title">-CONTACT</p>
                    <p className="hi-there">GET IN TOUCH</p>
                    <p className='slogun'>I'm here and ready to bring your project ideas to life. Just a click away!</p>
                        <div className='d-flex contact-icon-container col-md-5'>
                            <IoMdCall className='contact-icon'/>
                            <p className='slogun'>+91 9392477450</p>
                        </div>
                        <div className='d-flex contact-icon-container col-md-5'>
                            <IoMdMail   className='contact-icon'/>
                            <p className='slogun'>uday83788@gmail.com</p>
                        </div>
                    <p className='personal-details'><span>Name - </span> Kuruva Uday Kiran</p>
                    <p className='personal-details'><span>Location - </span>  Hyderabad & Bangalore, India </p>
                    <p className='personal-details'><span>Availability - </span> Available for Full-Time Employment </p>
                    <p className='personal-details'><span>Preferred Communication - </span> Englsih, Telugu, Hindi</p>
                    <div className='d-flex'>
                        <a href="https://github.com/udaykiran285" target="_blank" rel="noreferrer"><FaGithub className='icon'/></a>
                        <a href="https://www.linkedin.com/in/uday-kuruvaa" target="_blank" rel="noreferrer"><FaLinkedin className='icon'/></a>
                    </div>
                </div>
            </div>
           
        </div>
        
    </>
        
    )

export default Contact