import '../styles/nav.css'

function Nav(props) {
    return (
        <nav>
            <h1 class="navLeft">{props.fName} {props.lName}</h1>
            <ul class="navRight">
                <li><a href='#home'>Home</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#education'>Education</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav