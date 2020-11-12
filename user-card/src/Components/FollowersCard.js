import React from 'react';
import styled from 'styled-components';
import UserFollowersCard from './UserFollowersCard';
import UserFollowingCard from './UserFollowingCard';



const FollowersCard = (props) => {
  
    return (
        <div>
            {props.followersData.map((item)=>(
                // console.log(item)
                 <div key={item.id}>
                  <h1 className="follower-header">User's Follower</h1>   
                 <FollowersImage >
                 <div>
                     <img src={item.avatar_url} alt="avatar_url" />
                 </div>
                 <div>
                   <button onClick={props.fetchFollowers}>Followers</button>
                 </div>
                 <div>
                   <button onClick={props.fetchFollowing}>Following</button>
                 </div>
                 
                
                </FollowersImage>

            
                
                </div>
            ))}
            <UserFollowersCard userFollowers={props.userFollowers} FollowersImage={FollowersImage} fetchFollowers={props.fetchFollowers} />
            <UserFollowingCard userFollowing={props.userFollowing} FollowersImage={FollowersImage} fetchFollowing={props.fetchFollowing} />
            
        </div>
    )
}
 
const FollowersImage = styled.div `
    
    max-width: 1000px;
    margin: 0 auto;

    

      img {
          border-radius: 50%;
          width: 15%;
          height: 20%;
          margin: 10px;
          

      }
      h1 {
          width: 100%;
          margin: 0 auto;
      }
`

 

export default FollowersCard;

