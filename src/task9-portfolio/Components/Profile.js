import bg from '../assets/picbg-tri.jpg'
import '../styles/profile.css';

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'

function Home() {
    return (
        <div id="home">
            <img src={bg} class="bg" width="250px"/>

            <div class="desc">
                <p>Aspiring and dedicated Software Engineer with good foundation in HTML, CSS, JS and React. My technical skills are complemented by exceptional soft skills, a commitment to continuous learning and an unwavering dedication to deliver my best. With a proactive attitude and a passion for problem-solving, I am eager to leverage my skills and dedication to make a postive impact.</p>

                <button class="btn">Resume</button>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div id="skills">
            <h3>SKILLS</h3>

            <div class="skill">
                <div>
                    <h2>HTML</h2>
                    <img src={html} width='60px'/>
                </div>
            
                <div>
                    <h2>CSS</h2>
                    <img src={css} width='60px'/>
                </div>
            
                <div>
                    <h2>JS</h2>
                    <img src={js} width='60px'/>
                </div>
            
                <div>
                    <h2>REACT</h2>
                    <img src={react} width='60px'/>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div id='projects'>
            <h3>PROJECTS</h3>
            
            <div class='project'>
                <div>
                    <p></p>
                    <h2>TO-DO LIST</h2>
                </div>

                <div>
                    <p></p>
                    <h2 class='calc'>CALCULATOR</h2>
                </div>

                <div>
                    <p></p>
                    <h2>CONTACT MANAGER</h2>
                </div>
            </div>   
        </div>
    )
}

function Education() {
    return (
        <div id='education'>
            <h3>EDUCATION</h3>
            
            <div class='edu'>
                <div>
                    <h2>School</h2>
                    <p>DAV Public School</p>
                </div>

                <div>
                    <h2>Inter </h2>
                    <p>Sri Chaitanya Jr Clg</p>
                </div>

                <div>
                    <h2>B.Tech</h2>
                    <p>ANGRAU-CFST</p>
                </div>
            </div>   
        </div>
    )
}

function Contact(props) {
    return (
        <div id='contact'>
            <h3>CONTACT</h3>
            <div class='cont'>
                <p>Contact Number: <strong>{props.num}</strong></p>
                <p>Email id: <strong>{props.email}</strong></p>
                <p>Location: <strong>{props.loc}</strong></p>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <>
           <Home></Home> 
           <Skills></Skills>
           <Projects></Projects>
           <Education></Education>
           <Contact num='7013884574' email='likhitakonathala@gmail.com' loc='Anakapalle, AP, India'></Contact>
        </> 
    )
}

export default Profile