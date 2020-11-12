import React from 'react';

const UserFollowingCard = ({FollowersImage, userFollowing}) => {
    
    return (
        <div>
            <h1 className="follower-header"> User's Followers followers</h1>

            <FollowersImage>
                {userFollowing.map(item => 
                    <img key={item.id} src={item.avatar_url} alt="following" />
                )}
            </FollowersImage>
        </div>
    )
}

export default UserFollowingCard;