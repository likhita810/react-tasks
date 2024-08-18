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

export default Contact