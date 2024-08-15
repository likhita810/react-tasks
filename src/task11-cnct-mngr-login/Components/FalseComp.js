import React from "react";

class FalseComp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h2>Please Login</h2>
                <button onClick={this.props.toggleFunc}>Login</button>
            </>
        )
    }
}

export default FalseComp