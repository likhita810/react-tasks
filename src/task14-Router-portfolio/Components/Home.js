import bg from '../assets/picbg-tri.jpg'

function Home(props) {
    return (
        <div id="home">
            <img src={bg} class="bg" width="250px"/>

            <div class="desc">
                
                <p><h1>{props.fName} {props.lName}</h1>Aspiring and dedicated Software Engineer with good foundation in HTML, CSS, JS and React. My technical skills are complemented by exceptional soft skills, a commitment to continuous learning and an unwavering dedication to deliver my best. With a proactive attitude and a passion for problem-solving, I am eager to leverage my skills and dedication to make a postive impact.</p>

                <button class="btn">Resume</button>
            </div>
        </div>
    )
}

export default Home