import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'antd'
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user ? props.user.name : '',

      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };



  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide name .' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,

      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <div>
          <Button type='danger' onClick={() => { this.props.history.goBack(); }}> <Icon type="left" />Back</Button>
          {' '}
          <Button type='primary' htmlType="submit">Save</Button>

        </div>
      </form>
    )
  }
}
export default withRouter(RegistrationForm);