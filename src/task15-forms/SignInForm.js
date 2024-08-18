import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      unameErr: '',
      pswdErr: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleKeyUp = (e) => {
    console.log('Key Press:', e.key);
  };

  handleBlur = (e) => {
    console.log('Input lost focus:', e.target.name);
    const { name, value } = e.target;

    if (name === 'username') {
        if(e.target.value) {
            this.setState({[name] : e.target.value})
        } else {
            this.setState({unameErr : 'please enter username'})
        }
    }
    if (name === 'password') {
        if(e.target.value) {
            this.setState({[name] : e.target.value})
        } else {
            this.setState({pswdErr : 'please enter username'})
        }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-In Form Submitted', this.state);
  };

  render() {
    return (
      <form style={{boxShadow: '2px 2px 6px grey', width: '300px', padding: '10px', margin: '10% 30%'}}>
        <h2 style={{color: 'blueviolet', textAlign: 'center'}}>Sign In Form</h2>
        <div>
          <label style={{color:'white'}}>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={(e)=>this.handleChange(e)} onKeyUp={(e)=>this.handleKeyPress(e)} onBlur={(e)=>this.handleBlur(e)}/>
          <p style={{color: 'red'}}>{this.state.unameErr}</p>
        </div>
        <div>
          <label  style={{color:'white'}}>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} onKeyUp={(e)=>this.handleKeyPress(e)} onBlur={(e)=>this.handleBlur(e)}/>
          <p style={{color: 'red'}}>{this.state.pswdErr}</p>
        </div>
        <button type="submit" onSubmit={(e)=>this.handleSubmit(e)} style={{backgroundColor: 'lightblue', borderRadius: '5px', border: 'none', padding: '10px'}}>Sign In</button>
      </form>
    );
  }
}

export default SignInForm;