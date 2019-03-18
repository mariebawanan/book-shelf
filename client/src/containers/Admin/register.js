import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, registerUser } from '../../actions';

class Register extends Component {
    
    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleInputName = (event) => {
        this.setState({name:event.target.value})
    }

    handleInputLastName = (event) => {
        this.setState({lastname:event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }


    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});
        this.props.dispatch(registerUser({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname
        }, this.props.user.users))
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
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputName}
                        />
                    </div>
                    <div className="form_element">

                        <input 
                            type="text"
                            placeholder="Enter last name"
                            value={this.state.lastname}
                            onChange={this.handleInputLastName}
                        />
                     </div>
                    <div className="form_element">
                        <input 
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                     </div>
                    <div className="form_element">
                        <input 
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <button type="submit">Add User</button>

                    <div className="error">
                    
                    </div>

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
    console.log(state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);