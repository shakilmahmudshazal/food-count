import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../general/RegistrationForm';
import { startEditUser, startSetUsers } from '../../actions/users';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Card, message } from 'antd';

export class AddUserPage extends React.Component {
  onSubmit = (user) => {
    this.props.startEditUser(user);
    this.props.startSetUsers();
    message.success("Profile has been updated successfully");
    // this.props.history.push('/dashboard');
  };
  render() {
    const { auth } = this.props;
    return (
      <div>
        <div className="content-container">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Profile</h1>
            </div>
          </div>
          <div className="content-container">
            <RegistrationForm user={this.props.existingUser}
              onSubmit={this.onSubmit}
            />
          </div>

          <div className='show-for-desktop' style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Total Cost" bordered={false}>
                  ৳{numeral(this.props.existingUser.amount).format('0,0.00')}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Total Paid" bordered={false}>
                  ৳{numeral(this.props.existingUser.paid).format('0,0.00')}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Total Due" bordered={false}>
                  ৳{numeral(this.props.existingUser.amount - (this.props.existingUser.paid ? this.props.existingUser.paid : 0)).format('0,0.00')}
                </Card>
              </Col>
            </Row>
          </div>
          <div className="show-for-mobile ">
            <div className=" list-item-wallet">
              <h2 className="list-item__data">Total Cost: ৳{numeral(this.props.existingUser.amount).format('0,0.00')}</h2>
              <h2 className="list-item__data">Total Paid: ৳{numeral(this.props.existingUser.paid).format('0,0.00')}</h2>
              <h2 className="list-item__data">Total Due: ৳{numeral(this.props.existingUser.amount - (this.props.existingUser.paid ? this.props.existingUser.paid : 0)).format('0,0.00')}</h2>
            </div>
          </div>
          <div className='show-for-mobile'>
            <br />
            <Button type='primary' onClick={() => { this.props.history.push(`/userPaymentHistory/${this.props.existingUser.id}`); }} >Payment History</Button>{'  '}
            <Button type='primary' onClick={() => { this.props.history.push(`/userPurchaseHistory/${this.props.existingUser.id}`); }} >Purchase History</Button>
          </div>
          <div className='show-for-desktop'>
            <br />
            <Row gutter={[40, 24]}>
              <Col span={12} offset={7}>
                <Button type='primary' onClick={() => { this.props.history.push(`/userPaymentHistory/${this.props.existingUser.id}`); }} >Payment History</Button>{'  '}
                <Button type='primary' onClick={() => { this.props.history.push(`/userPurchaseHistory/${this.props.existingUser.id}`); }} >Purchase History</Button>
              </Col>
            </Row>


          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  //  existingUser: state.users.find((user) => user.id === props.match.params.id)
  existingUser: state.users.find((user) => user.id === state.auth.uid),
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({

  startEditUser: (user) => dispatch(startEditUser(user)),
  startSetUsers: () => dispatch(startSetUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);