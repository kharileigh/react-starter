import React from 'react';

const LikeButton = (props) => {
    return <span><button onClick={props.action}>&#10084;</button> {props.count}</span>
}

export default LikeButton;