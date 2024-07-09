import './index.css'
import {Link} from 'react-router-dom'
import Navbar  from '../Navbar'

const navLinksObject = {
    home : false,
    about : true,
    projects : false,
    services : false,
    contact : false,
    skills :  false
}


const About  = () => (
    <>
        <Navbar navLinksObject={navLinksObject}/>
        <div className='container-fluid'>
            <div className="row about-bg d-flex align-items-center">
                <div className='col-md-5 offsetmd--1 about-content-container col-12'>
                    <p className="title">-ABOUT</p>
                    <p className="hi-there">About Me</p>
                    <p className='about-content'>I am a passionate and dedicated full stack developer specializing in the MERN stack,
                        currently embarking on my journey in the world of web development. With a strong foundation
                        in HTML, CSS, and JavaScript, I excel in creating responsive and user-friendly web interfaces.
                        My proficiency extends to modern JavaScript libraries and frameworks, particularly React,
                        enabling me to build dynamic and interactive web applications.<br/><br/>On the backend, I am skilled 
                        in Node.js and Express.js, adept at designing and implementing RESTful APIs. I have practical
                        experience with database management systems such as SQLite and MongoDB, ensuring robust data 
                        handling and storage solutions. My development toolkit also includes proficiency in Postman for
                        API testing and Python for scripting and automation.<br/><br/>Driven by a desire to continuously learn and
                        innovate, I am eager to contribute my skills to impactful projects and collaborate with teams to 
                        deliver comprehensive web solutions.
                    </p>
                    <Link to="/contact" className="homeBtn m-2">HIRE ME</Link>
                    <a href="https://res.cloudinary.com/djhzxvu0f/image/upload/v1720559948/uday-kiran-resume_h5eurw.jpg" target='_blank' download="udaykiran-resume.pdf" rel="noreferrer">
                        <button className='download-resume-btn'>Download Resume</button>
                    </a>
                    
                    
                </div>
                <div className="col-md-5 about-img-container d-none d-md-block">
                    <img src="https://i.pinimg.com/564x/df/77/13/df7713ad7745114fe3e74805bf517bb1.jpg" className="about-img" alt="profile"/>
                </div>
            </div>

        </div>
    </>
        
    )

export default About