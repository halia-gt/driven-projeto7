import React, { useState } from "react";

export default function Comment(props) {
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
        <div className="comment">
            <p><span>{props.by}</span>  {props.text}</p>
            <button type="button"><ion-icon name={iconName} class={iconClass} onClick={toggleLike}></ion-icon></button>
        </div>
    )
}