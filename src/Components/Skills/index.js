import './index.css'
import Navbar from '../Navbar'

const navLinksObject = {
    home : false,
    about : false,
    projects : false,
    services : false,
    contact : false,
    skills : true
}

const Skills = () => {
    console.log("Hi")
    return(
        <>
        <Navbar navLinksObject={navLinksObject}/>
        <div className='skills-bg'>
            <div className='container'>
                <div className='row'>
                    <p className="title">-SKILLS</p>
                    <p className="hi-there">AREA OF EXPERTISE</p>
                    <p className='slogun'>Let's kickstart your project and collaborate to build something amazing. I'll bring my skills to make your next project shine.</p>
                </div>
                <div className='row skills-container'>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>HTML</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>CSS</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>Bootstrap</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>JavaScript</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>ReactJS</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>NodeJS</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>ExpressJS</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>Python</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>GIT</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>SQLite</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>MongoDB</p>
                    </div>
                    <div className='col-4 col-md-3 skill-container m-4'>
                        <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="logo" className='skill-icon'/>
                        <p className='hi-there'>VS Code</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills