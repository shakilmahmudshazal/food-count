import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
// import selectProducts from '../selectors/products';

export const ProductList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Products</div>
      <div className="show-for-desktop">Product</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    <div className="list-body">
      {

        props.products.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No products</span>
          </div>
        ) : (
            props.products.map((product) => {
              return <ProductListItem key={product.id} {...product} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    products: state.products,
    name: state
  };
};

export default connect(mapStateToProps)(ProductList);
