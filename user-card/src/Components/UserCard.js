import React from 'react';
import styled from "styled-components";
import FollowersCard from "./FollowersCard";


const UserCard = (props) => {
       console.log("UserCard.js component rendering");
    return (
        <div>
        <MyCard>
            <img src={props.userData.avatar_url} alt="avatar_url" />
            <h2>{props.userData.name}</h2>
            <h2>Username: {props.userData.login}</h2>
            <h2>Bio: {props.userData.bio}</h2>
            <h2>Followers: {props.userData.followers}</h2>
            <h2>Following: {props.userData.following}</h2>
            <h2>Location: {props.userData.location}</h2>
            <a href={props.userData.html_url}>{props.userData.html_url}</a>

        </MyCard>
        <FollowersCard followersData={props.followersData} userFollowers={props.userFollowers} userFollowing={props.userFollowing} MyCard={MyCard} fetchFollowers={props.fetchFollowers} fetchFollowing={props.fetchFollowing} />
        
        </div>
    );
}

const MyCard = styled.div `
    width: 70%;
    border: 2px solid;
    padding: 15px;
    margin: 0 auto;
    background-color: #680000;
    margin-top: 3rem;

        img {
            border-radius: 50%;
            width: 30%;
            height: 30%;
        }

        h2 {
            margin: 10px 0;
            font-size: 2.2rem;
        }

        a {
            text-decoration: none;
            color: #200000;
            font-size: 2.2rem;
        }
`

export default UserCard;