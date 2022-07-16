import React, { useState } from "react";

export default function Postbottom(props) {
    const [iconName, setIconName] = useState('heart-outline');
    const [iconClass, setIconClass] = useState('heart-icon');

    function toggleLike() {
        if (iconName === 'heart-outline' && iconClass === 'heart-icon') {
            setIconName('heart');
            setIconClass('heart-icon liked');
        } else {
            setIconName('heart-outline');
            setIconClass('heart-icon');
        }
    }

    return (
        <div className="post-bottom">
            <div className="icons">
                <div className="icons-left">
                    <ion-icon name={iconName} class={iconClass} onClick={toggleLike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div className="liked-by">
                <img src={props.likedimg} alt="" />
                <p>Curtido por <span>{props.likedby}</span> e <span>outras {props.likes} pessoas</span></p>
            </div>
        </div>
    )
}