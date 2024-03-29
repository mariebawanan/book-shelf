import React from 'react';

const User = (props) => {
    console.log(props);
    let user = props.user.login;
    return (
        <div className="user_container">
            <div className = "avatar">
                <img alt="avatar" src="/images/avatar.png" />
            </div>
            <div className="nfo">
                <div><span>Name: </span> {user.name} </div>
                <div><span>Last Name: </span> {user.lastname} </div>
                <div><span>Email: </span> {user.email} </div>
            </div>
            
        </div>
    );
};

export default User;