import React from "react";

class TrueComp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {admin,userName, email, phone, role} = this.props.userData
        console.log(userName)
        
        return (
            <>
                <h1>Welcome {userName}</h1>
                <p>Email: {email}</p>
                <p>Contact No.: {phone}</p>
                <p>Role: {role}</p>
                <button onClick={this.props.toggleFunc}>LogOut</button>
            </>
        )
    }
}

export default TrueComp