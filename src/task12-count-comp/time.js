import React from "react";

class TimeComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: 75000
        }
        this.interValid= null;
    }
    static getDerivedStateFromProps(props, state) {
        return {msg: props.msg}
    }

    componentDidMount() {
            setInterval(() => {
                if (this.state.timeLeft> 0) {
                    this.setState({timeLeft: this.state.timeLeft - 1000})
                }
            }, 1000);    
    }

    render() {
        const minutes = Math.floor(this.state.timeLeft / 60000);
        // console.log(minutes)
        const seconds = Math.floor((this.state.timeLeft % 60000) / 1000)
        // console.log(seconds)
        return(
            <>
               <h4>Count down Application</h4> 
               <p>msg: {this.state.msg}</p>
               <h1>{minutes}: {seconds < 10 ? '0' : ''}{seconds}</h1>
            </>
        )
    }
}

export default TimeComp