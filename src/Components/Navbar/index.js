import {Link} from 'react-router-dom'
import './index.css'

const Navbar = (props) => {
    const {navLinksObject} = props
    return (
        <nav className='navbar-main-bg'>
            <div className='container'>
                <div className='row'>
                    <Link to="/" className="navbar-logo-heading col-md-3 d-none d-md-block">Uday Kiran</Link>
                    <ul className='nav-links-container col-md-9'>
                        <Link to="/" className={`${navLinksObject.home ? "nav-link active" : "nav-link"}`}>Home</Link>
                        <Link to="/about" className={`${navLinksObject.about ? "nav-link active" : "nav-link"}`}>About</Link>
                        <Link to="/projects" className={`${navLinksObject.projects ? "nav-link active" : "nav-link"}`}>Projects</Link>
                        <Link to="/skills" className={`${navLinksObject.skills ? "nav-link active" : "nav-link"}`}>Skills</Link>
                        <Link to="/services" className={`${navLinksObject.services ? "nav-link active" : "nav-link"}`}>Services</Link>
                        <Link to="/contact" className={`${navLinksObject.contact ? "nav-link active" : "nav-link"}`}>Contact</Link>
                        <a  className="d-none d-lg-inline" href="https://res.cloudinary.com/djhzxvu0f/image/upload/v1720559948/uday-kiran-resume_h5eurw.jpg" target='_blank' download="udaykiran-resume.pdf" rel="noreferrer">
                            <button className='download-resume-btn'>Download Resume</button>
                            </a>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar