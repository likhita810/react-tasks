import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'

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

export default Skills