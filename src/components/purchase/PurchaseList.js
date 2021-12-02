import React from 'react';
import { connect } from 'react-redux';
import PurchaseListItem from './PurchaseListItem';
import { withRouter } from 'react-router-dom';
import { Col, Row, Button, Icon } from 'antd';

export const PurchaseList = (props) => {

  //  const [count, setCount] = useState(0);

  return (
    <div className="content-container">

      <div className="list-header">
        <div className="show-for-mobile">Total Cost : {(props.user.amount ? props.user.amount : 0) - (props.user.paid ? props.user.paid : 0)} </div>
        <div className="show-for-desktop">Total Cost :</div>
        <div className="show-for-desktop">{(props.user.amount ? props.user.amount : 0) - (props.user.paid ? props.user.paid : 0)}</div>
      </div>

      <div className="list-body">
      <br />

        {

          props.products.length === 0 ? (
            <div className="list-item">
              <span>No products</span>
            </div>
          ) : (
              
              <Row gutter={[40, 24]}>
                {props.products.map((product) => {
                  return <PurchaseListItem key={product.id} {...product} />;
                })}
              </Row>
            )
        }
        <Button type={"danger"} onClick={() => { props.history.goBack(); }}><Icon type="left" />Back</Button>


      </div>
    </div>
  );


}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.users.find((user) => user.id === state.auth.uid),
    name: state
  };
};

export default withRouter(connect(mapStateToProps)(PurchaseList));
