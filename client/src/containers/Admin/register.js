import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, registeUser } from '../../actions';

class Register extends Component {
    
    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    handleInputEmail = (event) => {

    }

    handleInputName = (event) => {
        
    }

    handleInputLastName = (event) => {
        
    }

    handleInputPassword = (event) => {
        
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    componentWillMount(){
        this.props.dispatch(getUsers());
    }

    showUsers = (user) => (
        user.users ?
            user.users.map(user => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                </tr>
        ))
        : null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                </form>
                <div className="current_users">
                    <h4>Current users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);