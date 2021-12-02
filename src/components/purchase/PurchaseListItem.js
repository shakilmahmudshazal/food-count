import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { startEditUser } from '../../actions/users';
import { startAddUserPurchaseHistory } from '../../actions/userPurchaseHistory';
import { normalDate } from '../helper/utility'
import { Col, Row, Button, Card, Icon, Modal, message } from 'antd';

// import Modal from 'react-modal';
const { Meta } = Card;

const customStyles = {
  content: {
    // width: "80%",
    // // height: "50%",
    // top: '30%',
    // background: "white"

  }
};



// Modal.setAppElement('#app')

export class PurchaseListItem extends React.Component {

  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false,
      cart: 1,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal() {

    this.setState({ modalIsOpen: false });
    if (this.state.cart) {
      this.setState((prevState, props) => ({
        cart: 1
      }));
    }
  }
  addCart = () => {
    this.setState((prevState, props) => ({
      cart: prevState.cart + 1
    }));
  }
  removeCart = () => {
    if (this.state.cart>1) {
      this.setState((prevState, props) => ({
        cart: prevState.cart - 1
      }));
    }
  }

  addAmount = () => {
    let today = new Date;

    const initialAmount = this.props.user.amount * 1 ? this.props.user.amount * 1 : '0';
    const user = {
      amount: ((parseInt(initialAmount) + (parseInt(this.props.amount) * this.state.cart)))
    }
    this.props.startEditUser(user);
    this.props.startAddUserPurchaseHistory(this.props.user.id, { name: this.props.name, amount: this.props.amount, quantity: this.state.cart, date: normalDate(today) });
    this.closeModal();
    message.success("Product has been purchased successfully");


  }
  render() {
    return (
      <div>
        <div className='show-for-mobile'>
          <Col span={24}>
            <Card
              bordered={true}
              style={{ height: 300 }}
              cover={
                <img
                  alt="example"
                  src={this.props.image ? this.props.image : "https://www.ukmarket.in/sites/default/files/styles/large/public/default_images/default-product.jpg?itok=Ptm5dtOz"}
                  height={'200'}
                // width={'200'}
                />
              }
              actions={[
                <button style={{ color: 'red' }} className="list-item-button " onClick={this.openModal}> <Icon type="shopping-cart" /> Buy Now </button>
              ]}
            >
              <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={this.props.name}
                description={numeral(this.props.amount).format('‎0,0.00')}
              />
            </Card>
        </Col>
        </div>

        <div className='show-for-desktop' >
          <Col span={8}>
            <Card
              bordered={true}
              style={{ height: 300 }}
              cover={
                <img
                  alt="example"
                  src={this.props.image ? this.props.image : "https://www.ukmarket.in/sites/default/files/styles/large/public/default_images/default-product.jpg?itok=Ptm5dtOz"}
                  height={'200'}
                />
              }
              actions={[
                <button style={{ color: 'red' }} className="list-item-button " onClick={this.openModal}> <Icon type="shopping-cart" /> Buy Now </button>
              ]}
            >
              <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={this.props.name}
                description={numeral(this.props.amount).format('‎0,0.00')}
              />
            </Card>
        </Col>

        </div>

        <Modal
          title="Buy this product"
          visible={this.state.modalIsOpen}
          onOk={this.addAmount}
          onCancel={this.closeModal}
          width='80%'
          footer={false}
        >
          <div className='show-for-mobile'>
            <div className='cart_subtitle'>
              <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.name}</h2>
            </div>
            <div className="price-div">Price:{this.props.amount} bdt</div>
            <div className="cost-div">Total Cost:{(parseInt(this.props.amount)) * this.state.cart} bdt</div>

            <div className="quantity">
              <span>
                <button className="removeCart" onClick={this.removeCart}>-</button>
              </span>
              <span className="box-item">
                {this.state.cart}
              </span>

              <span>
                <button className="addCart" onClick={this.addCart}>+</button>

              </span>
            </div>

            <br />


            <button className="cancelButton" onClick={this.closeModal}>close</button>
             <button className="purchaseButton" disabled={this.state.cart<1} onClick={this.addAmount}>Purchase</button>
          </div>
          <div className='show-for-desktop'>
            <Row gutter={[40, 24]}>
              <Col span={8} offset={8}>
                <Card title={"Purchase"}  >
                  <div className='cart_subtitle'>
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.name}</h2>
                  </div>
                  <div className="price-div">Price:{this.props.amount} bdt</div>
                  <div className="cost-div">Total Cost:{(parseInt(this.props.amount)) * this.state.cart} bdt</div>

                  <div className="quantity">
                    <span>
                      <button className="removeCart" onClick={this.removeCart}>-</button>
                    </span>
                    <span className="box-item">
                      {this.state.cart}
                    </span>
                    <span>
                      <button className="addCart" onClick={this.addCart}>+</button>
                    </span>
                  </div>
                  <br />
                </Card>
              </Col>
            </Row>
            <Row gutter={[40, 24]}>
              <Col span={8} offset={10}>
                <Button type='danger' onClick={this.closeModal}>close</Button> {' '}
                <Button type='primary' disabled={this.state.cart<1} onClick={this.addAmount}>Purchase</Button>
              </Col>
            </Row>

          </div>
        </Modal>
      </div>
    )


  }

};


const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === state.auth.uid)

  }
};

// const mapDispatchToProps = (dispatch) => ({

//   startEditUser: (user) => dispatch(startEditUser(user))
// });

export default connect(mapStateToProps, { startEditUser, startAddUserPurchaseHistory })(PurchaseListItem);
