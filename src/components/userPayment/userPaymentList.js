import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import PaymentListItem from './userPaymentListItem';
import { startSetCurrentUserPaymentHistory } from '../../actions/currentuserHistory';
import { withRouter } from 'react-router-dom';


export const PaymentList = (props) =>{
  useEffect(() => {
    if (props.match.params.id) {
      props.startSetCurrentUserPaymentHistory(props.match.params.id)
    }
  },[props.match.params.id]);

  
  return(
  <div className="content-container">
    <div className="list-item" >
    
    <h5 className="list-item__data"> Date</h5>
    <h5 className="list-item__data">Amount</h5>

      
     
    </div>
    
    <div className="list-body">
    {
      
      props.currentUserHistory.length === 0 ? (
        <div className="list-item-user list-item--message">
          <span>No History</span>
        </div>
      ) : (
          props.currentUserHistory.map((user) => {
            return <PaymentListItem key={user.id} {...user} />;
          })
        )
    }
    <button className="button-red" onClick={()=>{props.history.goBack();}}>Back</button>

  </div>
  </div>
);
}
const mapStateToProps = (state, props) => {
  return {
    currentUserHistory: state.currentUserHistory ,
     id : props.match.params.id
  };
};

export default connect(mapStateToProps,{startSetCurrentUserPaymentHistory})(PaymentList);
