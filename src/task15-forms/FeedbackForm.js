import React from 'react';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      feedback: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleKeyUp = (e) => {
    console.log('Key Up:', e.key);
  };

  handleBlur = (e) => {
    console.log('Input lost focus:', e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Form Submitted', this.state);
  };

  render() {
    return (
      <form style={{boxShadow: '2px 2px 4px white', width: '300px', padding: '10px', margin: '10% 30%'}}>
        <h2 style={{color: 'blueviolet', textAlign: 'center'}}>Feedback Form</h2>
        <div>
          <label style={{color:'white'}}>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)} onKeyUp={(e)=>this.handleKeyUp(e)} onBlur={(e)=>this.handleBlur(e)}/>
        </div>
        <div style={{marginTop: '10px'}}>
          <label style={{color:'white', display: 'block'}}>Feedback:</label>
          <textarea name="feedback" value={this.state.feedback} onChange={(e)=>this.handleChange(e)} onKeyUp={(e)=>this.handleKeyUp(e)} onBlur={(e)=>this.handleBlur(e)}/>
        </div>
        <button type="submit" onSubmit={(e)=>this.handleSubmit(e)} style={{background: 'lightgreen', marginTop: '10px'}}>Submit Feedback</button>
      </form>
    );
  }
}

export default FeedbackForm;