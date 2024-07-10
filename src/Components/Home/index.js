import {Link} from 'react-router-dom'
import { FaGithub,FaLinkedin  } from "react-icons/fa6";
import './index.css'
import Navbar  from '../Navbar'

const navLinksObject = {
    home : true,
    about : false,
    projects : false,
    services : false,
    contact : false,
    skills : false
}


const Home  = () => (
    <>
        < Navbar navLinksObject={navLinksObject} />
        <div className='home-bg'>
            <div className='container'>
            <div className='row d-md-none pb-4 pl-2'>
                    <div className='col-11 d-md-none d-flex justify-content-center align-items-center'>
                        <img src="https://res.cloudinary.com/djhzxvu0f/image/upload/v1698575490/Grey_Modern_LinkedIn_Profile_Picture_oljnvx.png" className='home-img-sm' alt="profile"/>
                    </div>
                    <div className='intro col-12 col-md-6'>
                        <p className="title">-INTRODUCTION</p>
                        <p className="hi-there">Hi There!👋</p>
                        <h1 className="my-name">I'm <span>Uday Kiran Kuruva</span></h1>
                        <h3 className="web-developer">Full Stack || MERN Stack Developer</h3>
                        <p className="slogun">Expert in Frontend and Backend, Perfecting End-to-End Development for Seamless Web Solutions.</p>
                        <Link to="/contact" className="homeBtn">Let’s create an awesome website !</Link>
                        <div className="d-flex flex-row">
                            <a href="https://github.com/udaykiran285" target="_blank" rel="noreferrer"><FaGithub className='icon'/></a>
                            <a href="https://www.linkedin.com/in/uday-kuruvaa" target="_blank" rel="noreferrer"><FaLinkedin className='icon'/></a>
                        </div>       
                    </div>
                    <div className='col-12 col-md-5 d-none d-md-block'>
                        <img src="https://res.cloudinary.com/djhzxvu0f/image/upload/v1698575490/Grey_Modern_LinkedIn_Profile_Picture_oljnvx.png" className='home-img' alt="profile"/>
                    </div>
                </div>
                <div className='row first-section d-none d-md-flex align-items-center'>
                    <div className='intro col-6'>
                        <p className="title">-INTRODUCTION</p>
                        <p className="hi-there">Hi There!👋</p>
                        <h1 className="my-name">I'm <span>Uday Kiran Kuruva</span></h1>
                        <h3 className="web-developer">Full Stack || MERN Stack Developer</h3>
                        <p className="slogun">Expert in Frontend and Backend, Perfecting End-to-End Development for Seamless Web Solutions.</p>
                        <Link to="/contact" className="homeBtn">Let’s create an awesome website !</Link>
                        <div className="d-flex flex-row">
                            <a href="https://github.com/udaykiran285" target="_blank" rel="noreferrer"><FaGithub className='icon'/></a>
                            <a href="https://www.linkedin.com/in/uday-kuruvaa" target="_blank" rel="noreferrer"><FaLinkedin className='icon'/></a>
                        </div>       
                    </div>
                    <div className='col-5'>
                        <img src="https://res.cloudinary.com/djhzxvu0f/image/upload/v1698575490/Grey_Modern_LinkedIn_Profile_Picture_oljnvx.png" className='home-img' alt="profile"/>
                    </div>
                </div>
            </div>          
        </div>
    </>
        
    )

export default Home