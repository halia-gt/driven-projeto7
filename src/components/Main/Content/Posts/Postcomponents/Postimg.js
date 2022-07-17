import { useState } from "react";

export default function Postimg(props) {
    const [imageHeart, setImageHeart] = useState('post-heart');

    function addLike() {
        if (props.iconName === 'heart-outline' && props.iconClass === 'heart-icon') {
            props.setIconName('heart');
            props.setIconClass('heart-icon liked');
            setImageHeart('post-heart animation');
        } else {
            setImageHeart('post-heart');
        }
    }

    return (
        <div className="post-img">
            <img src={props.img} alt="" onClick={addLike} />
            <div className={imageHeart}>
            </div>
        </div>
    )
}