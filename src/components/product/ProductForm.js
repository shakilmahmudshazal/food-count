import React from "react";
import { withRouter } from "react-router-dom";
import { storage } from "./../../firebase/firebase";
import { Spin } from "antd";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.product ? props.product.name : "",

      image: props.product ? props.product.image : "",

      amount: props.product ? props.product.amount.toString() : "",

      error: "",
      file: null,
      loading: false,
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

  setFile = (data) => {
    this.setState({
      file: data,
    });
  };

  handleImageChange = (e) => {
    this.setFile(e.target.files[0]);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { file } = this.state;
    debugger;
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        this.setFile(null);
        this.setState({
          image: url,
        });
        // setURL(url);

        if (!this.state.name || !this.state.amount) {
          this.setState(() => ({ error: "Please provide name and amount." }));
        } else {
          this.setState(() => ({ error: "" }));
          this.props.onSubmit({
            name: this.state.name,
            amount: this.state.amount,
            image: this.state.image ? this.state.image : "",
          });
        }
      });
    });
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.loading && (
          <div size="middle">
            <Spin size="large" />
          </div>
        )}
        ,{this.state.error && <p className="form__error">{this.state.error}</p>}
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
        <input type="file" onChange={this.handleImageChange} />
        {/* <input
        type="text"
        placeholder="Paste Image url"
        className="text-input"
        value={this.state.image}
        onChange={this.onImageChange}
      /> */}
        <div>
          <button className="button">Save Product</button>
          <button
            className="button-red"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Back
          </button>
        </div>
      </form>
    );
  }
}
export default withRouter(ProductForm);
