import './index.css'
import Navbar  from '../Navbar'

const navLinksObject = {
    home : false,
    about : false,
    projects : false,
    services : true,
    contact : false,
    skills :  false
}


const Services  = () => (
    <>
        <Navbar navLinksObject={navLinksObject}/>
        <div className="section-bg">
            <div className="container">
                <div className='row'>
                    <p className="title">-SERVICES</p>
                    <div className="poject-section">
                        <h2 className='services-main-heading'>SERVICES I PROVIDE</h2>
                        <p className="para">The goal is not to build a website. The goal is to build your business.</p>
                    </div>
                </div>
                
                <div className="row services-bg">
                    <div className="service-section col-11 col-md-5 col-lg-5">
                        <div className="service">
                            <h3>Full-Stack Web Application Development</h3>
                            <p>I develop comprehensive web applications using the MERN stack (MongoDB, Express.js, React, Node.js), 
                                including crafting intuitive and responsive user interfaces with React, building robust server-side
                                applications with Node.js and Express.js, designing and managing databases with MongoDB, and seamlessly
                                integrating front-end and back-end components to create a cohesive application.
                            </p>
                        </div>
                    </div>
                    <div className="service-section col-11 col-md-5 col-lg-6">
                        <div className="service">
                            <h3>API Development and Integration</h3>
                            <p>I develop and integrate APIs to facilitate communication within web applications or between different applications. This includes creating RESTful APIs using Express.js and Node.js, integrating third-party APIs to extend functionality, and implementing secure authentication and authorization mechanisms.</p>
                        </div>
                    </div>
                    <div className="service-section col-11 col-md-5 col-lg-5">
                        <div className="service">
                            <h3>Custom Web Solutions</h3>
                            <p>I provide tailored web solutions to meet specific business needs, including developing e-commerce platforms with product listings, shopping carts, and payment gateways; building custom CMS solutions for efficient content management; and creating real-time applications like chat apps or live data dashboards using WebSockets.
                            </p>
                        </div>
                    </div>
                    <div className="service-section col-11 col-md-5 col-lg-6">
                        <div className="service">
                            <h3>Performance Optimization and Scalability</h3>
                            <p>I will ensure web applications are optimized for performance and scalability by analyzing and optimizing performance, implementing horizontal and vertical scaling solutions, and refactoring code for efficiency and maintainability.
                            </p>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    </>
) 
  
export default Services