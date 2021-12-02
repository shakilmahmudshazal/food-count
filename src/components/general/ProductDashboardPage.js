import React from 'react';
import { history } from '../../routers/AppRouter';
import { connect } from 'react-redux';
import { startEditUser, startSetUsers } from '../../actions/users';
// import ClearCache from "react-clear-cache";

export const ProductDashboardPage = (props) => {
  const onClickAdmin = () => {
    history.push('/admin');
  }
  const onClickUser = () => {
    history.push('/user');
  }
  const onClickProfile = () => {
    history.push('/addUser');
  }
  const createUser = () => {

    if (!props.user) {
      const user = {
        name: props.auth.name
      }
      props.startEditUser(user);
      props.startSetUsers();
    }
  }
  createUser();
  return (
    <div  >

      {
        props.user &&
        <div className="dashboard-btn">
          {
            props.user.admin == 1 &&
            <button className='buttonAdmin' onClick={onClickAdmin} > Admin </button>
          }
          <button className='buttonUser' onClick={onClickUser} > Buy</button>
        </div>
      }
      <button className='buttonProfile' onClick={onClickProfile} > Manage Profile</button>
      {/* <div>
        <ClearCache>
          {({ isLatestVersion, emptyCacheStorage }) => (
            <div>
              {!isLatestVersion && (
                <p>
                  <button className='buttonAdmin' onClick={e => {
                    e.preventDefault();
                    emptyCacheStorage();
                  }}>  Update version</button>
                </p>
              )}
            </div>
          )}
        </ClearCache>
      </div> */}
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === state.auth.uid),
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => ({

  startEditUser: (user) => dispatch(startEditUser(user)),
  startSetUsers: () => dispatch(startSetUsers())
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductDashboardPage);

// export default ProductDashboardPage;

