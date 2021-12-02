import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { startAddProduct } from '../../actions/products';

export class AddProductPage extends React.Component {
  onSubmit = (product) => {
    this.props.startAddProduct(product);
    this.props.history.push('/admin');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Product</h1>
          </div>
        </div>
        <div className="content-container">
          <ProductForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddProduct: (product) => dispatch(startAddProduct(product))
});

export default connect(undefined, mapDispatchToProps)(AddProductPage);
