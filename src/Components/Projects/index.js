import './index.css'
import Navbar  from '../Navbar'

const navLinksObject = {
    home : false,
    about : false,
    projects : true,
    services : false,
    contact : false,
    skills : false
}


const Projects  = () => (
    <>
        <Navbar navLinksObject={navLinksObject}/>
        <div className='projects-bg'>
            <div className='container'>
                <div className='row'>
                    <p className="title">-SKILLS</p>
                    <p className="hi-there">AREA OF EXPERTISE</p>
                    <p className='slogun'> I love making websites that can grow big, finding useful solutions, and always learning to get better in the IT world.</p>
                </div>
                <div className='row project-outer-container mb-5 pb-3'>
                    <div className='project-container col-11 col-lg-5'>
                        <a href="https://udaykiran285.github.io/ai-chatbot/" className='project-link' target='_blank' rel="noreferrer">1. Artificial Intelligence - Chatbot</a>
                        <div className='project-image-container-1'>
                        <a href="https://udaykiran285.github.io/ai-chatbot/" target='_blank' rel="noreferrer"><button className='btn btn-danger'>Live Web</button></a>
                        </div>
                    </div>
                    <div className='project-container-description col-12 col-lg-5'>
                        <h6>Developed an AI-powered chatbot capable of providing intelligent responses and assisting users with inquiries.</h6>
                        <h3>Key Features</h3>
                        <p>
                        <span>API Integration:</span> Utilized Google API for retrieving data based on user queries, secured with API key authentication.<br/>
                        <span>Data Presentation:</span> Presented fetched data in a user-friendly format within the chatbot interface.<br/>
                        <span>Customization:</span> Provided personalized responses and options based on user preferences.<br/>
                        <span>Technologies Used:</span> React for frontend development, Express for backend API, MongoDB for data storage.<br/>
                        </p>
                    </div>
                </div>
                <div className='row project-outer-container mb-5 pb-3'>
                    <div className='project-container col-11 col-lg-5'>
                        <a href="https://udaykiran285.github.io/jobby/" className='project-link' target='_blank' rel="noreferrer">2. Jobby - Job Search Application</a>
                        <div className='project-image-container-2'>
                        <a href="https://udaykiran285.github.io/jobby/" target='_blank' rel="noreferrer"><button className='btn btn-danger'>Live Web</button></a>
                        </div>
                    </div>
                    <div className='project-container-description col-12 col-lg-5'>
                        <h6>Developed a comprehensive job search application to help users find employment opportunities based on various criteria.</h6>
                        <h3>Key Features</h3>
                        <p>
                        <span>User Authentication:</span> Secure login and logout functionality for user accounts.<br/>
                        <span>Job Listings:</span> Provided job listings with details including job title, company, location, type of employment (full-time, part-time, freelance, internship), and salary range.<br/>
                        <span>Search Functionality: </span> Enabled users to search for jobs based on keywords, location, type of employment, and salary range.<br/>
                        <span>Technologies Used: </span> React for frontend development, Express for backend API, MongoDB for data storage.
                        </p>
                    </div>
                </div>
                <div className='row project-outer-container mb-5 pb-3'>
                    <div className='project-container col-11 col-lg-5'>
                        <a href="https://udaykiran285.github.io/nxtrendz/" className='project-link' target='_blank' rel="noreferrer">3. NxtTrends -  Ecommerce Application</a>
                        <div className='project-image-container-3'>
                        <a href="https://udaykiran285.github.io/nxtrendz/" target='_blank' rel="noreferrer"><button className='btn btn-danger'>Live Web</button></a>
                        </div>
                    </div>
                    <div className='project-container-description col-12 col-lg-5'>
                        <h6>Developed a comprehensive ecommerce application designed to provide a seamless shopping experience for users.</h6>
                        <h3>Key Features</h3>
                        <p>
                        <span>User Authentication:</span> Secure login and logout functionality for user accounts.<br/>
                        <span>User Roles:</span>  Differentiated between prime and non-prime users, offering exclusive benefits to prime users.<br/>
                        <span>Product Management: </span> Enabled sorting of products by search, category, and rating.<br/>
                        <span>Cart Functionality: </span> Designed a dynamic cart section that updates in real-time as products are added, and calculates the total amount.<br/>
                        <span>Technologies Used: </span> React for frontend development, Express for backend API, MongoDB for data storage.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
        
    )

export default Projects