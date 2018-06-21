import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class UserList extends Component {
    createListItems() {
        return this.props.users.map((user) => {
            return(
                <li key={user.firstName}
                onClick = {()=> {this.props.selectUser(user)}}
                >
                {user.firstName}</li>
            )
        })
    }
    render() {
        return(
            <ul>
               {this.createListItems()}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    console.log('match dispatch');
    return bindActionCreators({selectUser: selectUser}, dispatch)
 }
export default connect(mapStateToProps, matchDispatchToProps)(UserList)