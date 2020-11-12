import React from 'react';


 const UserFollowersCard = (props) => {
    
    return (
        <div>
            <h1 className="follower-header">User's Followers followers</h1> 

            <props.FollowersImage>
                {props.userFollowers.map(item => 
                   
                     <img key={item.id} src={item.avatar_url} alt="followers" />
                   
                    
                )}
            </props.FollowersImage>
        </div>
    )
 }

 export default UserFollowersCard;