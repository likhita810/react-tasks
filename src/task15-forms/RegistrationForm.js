import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      err:''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleBlur = (e) => {
    console.log('Input lost focus:', e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.password, this.state.confirmPassword)
    if (this.state.password !== this.state.confirmPassword) {
      alert('passwords doesnt match')
    } else {
      console.log('Registration Form Submitted', this.state);
    }
  };

  handleDoubleClick = (e) => {
    console.log('Field was double-clicked:', e.target.name);
  };

  render() {
    return (
      <form style={{boxShadow: '2px 2px 6px grey', width: '300px', padding: '10px', margin: '10% 30%'}}>
        <h2 style={{color: 'blueviolet', textAlign: 'center'}}>Registration Form</h2>
        <div style={{marginBottom: '15px'}}>
          <label style={{color:'white'}}>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{color:'white'}}>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{color:'white'}}>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{color:'white'}}>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
          <p style={{color:'red'}}>{this.state.err}</p>
        </div>
        <button type="submit" onClick={(e)=>this.handleSubmit(e)} style={{backgroundColor: 'lightblue', borderRadius: '5px', border: 'none', padding: '10px'}}>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;