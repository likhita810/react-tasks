import React from 'react'
import TrueComp from './TrueComp'
import FalseComp from './FalseComp'

class Check extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users:[
                {
                    userName: 'Likhita',
                    email: 'likhitakonathala@gmail.com',
                    phone: 9876543210,
                    role: 'SDE L-1',
                    admin: true
                }
            ]
        }
    }

    toggleUser = () => {
        const updatedUsers = [...this.state.users];
        updatedUsers[0].admin = !updatedUsers[0].admin;
        this.setState({users: updatedUsers})
    }

    render() {
        return ( 
            <>
            {
                (this.state.users[0].admin) ?
                <>
                {/* <h1>Executed true comp</h1> */}
                    <TrueComp userData={this.state.users[0]} toggleFunc={this.toggleUser}></TrueComp>

                </>
                : 
                <>
                    {/* <h1>executed false comp</h1> */}
                    <FalseComp toggleFunc={this.toggleUser}></FalseComp>
                </>
            }
            </>
        )
    }
}

export default Check
