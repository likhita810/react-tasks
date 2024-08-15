import React from 'react'

import './counter-app.css'

class CounterApplication extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0
        }
    }

    increaseVal = () => {
        this.setState({value: this.state.value + 1})
        console.log('value is increased by 1')
    }

    decreaseVal = () => {
        this.setState({value: this.state.value - 1})
        console.log('value is decreased by 1')
    }

    render() {
        return(
            <div class='cApp'>
                <h1>Counter Application</h1>
                <h2>{this.state.value}</h2>
                <button onClick={this.increaseVal} class='inc'>+</button>
                <button onClick={this.decreaseVal} class='dec'>-</button>
            </div>
        )
    }
}

export default CounterApplication