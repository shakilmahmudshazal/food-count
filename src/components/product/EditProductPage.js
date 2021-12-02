import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { startEditProduct, startRemoveProduct } from '../../actions/products';

export class EditProductPage extends React.Component {
  onSubmit = (product) => {
    this.props.startEditProduct(this.props.product.id, product);
    this.props.history.push('/admin');
  };
  onRemove = () => {
    this.props.startRemoveProduct({ id: this.props.product.id });
    this.props.history.push('/admin');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Product</h1>
          </div>
        </div>
        <div className="content-container">
          <ProductForm
            product={this.props.product}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Product</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  product: state.products.find((product) => product.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditProduct: (id, product) => dispatch(startEditProduct(id, product)),
  startRemoveProduct: (data) => dispatch(startRemoveProduct(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);
