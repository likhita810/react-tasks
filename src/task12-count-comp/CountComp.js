import React from "react";

class CountComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startValue : 4 ,
            msg: ''
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {msg: props.msg}
    }

    componentDidMount() {
            setInterval(() => {
                if (this.state.startValue > 0) {
                    this.setState({startValue: this.state.startValue - 1})
                }
            }, 2000);    
    }

    render() {
        return(
            <>
               <h4>Count down Application</h4> 
               <p>msg: {this.state.msg}</p>
               <h1>{this.state.startValue}</h1>
            </>
        )
    }
}

export default CountComp