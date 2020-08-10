import React from 'react';

const UserCard = (props) => {
  
    return (
        <div className="user-card">
            <h1>{props.user.name}</h1>
            <h2>Username: {props.user.login}</h2>
            <p>
               <img src={props.user.avatar_url} />
            </p>
            <h2>Bio: {props.user.bio}</h2>
            <h2>Followers: {props.user.followers}</h2>
            <h2>Following: {props.user.following}</h2>
            <h2>URL: {props.user.html_url}</h2>

        </div>
    )
}

export default UserCard;