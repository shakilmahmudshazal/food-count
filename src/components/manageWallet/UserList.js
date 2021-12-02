import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';
import { Link } from 'react-router-dom';

export const UserList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Users List </div>
      
     
    </div>
    
    <div className="list-body">
      {
        
        props.users.length === 0 ? (
          <div className="list-item-user list-item--message">
            <span>No User</span>
          </div>
        ) : (
            props.users.map((user) => {
              return <UserListItem key={user.id} {...user} />;
            })
          )
      }
      <button className="button-red" onClick={()=>{props.history.goBack();}}>Back</button>

    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    users: state.users,
    name:state
  };
};

export default connect(mapStateToProps)(UserList);
