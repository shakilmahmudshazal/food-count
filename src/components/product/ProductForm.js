import React from 'react';
import { withRouter } from 'react-router-dom';

 class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.product ? props.product.name : '',

      image: props.product ? props.product.image : '',

      amount: props.product ? (props.product.amount).toString() : '',

      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onImageChange = (e) => {
    const image = e.target.value;
    this.setState(() => ({ image }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };


  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide name and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        amount: this.state.amount,
        image:this.state.image ? this.state.image:'',

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
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <input
        type="text"
        placeholder="Paste Image url"
        className="text-input"
        value={this.state.image}
        onChange={this.onImageChange}
      />



        <div>
          <button className="button">Save Product</button>
          <button className="button-red" onClick={()=>{this.props.history.goBack();}}>Back</button>

        </div>
      </form>
    )
  }
}
export default  withRouter(ProductForm);