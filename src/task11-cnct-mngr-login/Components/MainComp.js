import React from 'react'
import TrueComp from './TrueComp'
import FalseComp from './FalseComp'

class MainComp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            admin: true,
            user: {
                userName: 'Likhita',
                email: 'likhitakonathala@gmail.com',
                phone: 9876543210,
                role: 'SDE L-1',
            }
        }
    }

    toggleUser = () => {
        this.setState({admin: !(this.state.admin)})
    }

    render() {
        return ( 
            <>
            {
                (this.state.admin) ?
                <>
                    <TrueComp userData={this.state.user} toggleFunc={this.toggleUser}></TrueComp>

                </>
                : 
                <>
                    <FalseComp toggleFunc={this.toggleUser}></FalseComp>
                </>
            }
            </>
        )
    }
}

export default MainComp
