import Postimg from "./Postcomponents/Postimg";
import Posttop from "./Postcomponents/Posttop";
import Postbottom from "./Postcomponents/Postbottom";
import Comments from "./Postcomponents/Comments/Comments";
import React, { useState } from "react";

export default function Post(props) {
    const [iconName, setIconName] = useState('heart-outline');
    const [iconClass, setIconClass] = useState('heart-icon');

    return (
        <li className="post">
            <Posttop profile={props.profile} name={props.name} />
            <Postimg img={props.img} setIconName={setIconName} setIconClass={setIconClass} iconName={iconName} iconClass={iconClass} />
            <Postbottom likedimg={props.likedimg} likedby={props.likedby} likes={props.likes} setIconName={setIconName} setIconClass={setIconClass} iconName={iconName} iconClass={iconClass} />
            <Comments name={props.name} text={props.text} comments={props.comments} />
        </li>
    )
}