export default function Postbottom(props) {

    function toggleLike() {
        if (props.iconName === 'heart-outline' && props.iconClass === 'heart-icon') {
            props.setIconName('heart');
            props.setIconClass('heart-icon liked');
        } else {
            props.setIconName('heart-outline');
            props.setIconClass('heart-icon');
        }
    }

    return (
        <div className="post-bottom">
            <div className="icons">
                <div className="icons-left">
                    <ion-icon name={props.iconName} class={props.iconClass} onClick={toggleLike}></ion-icon>
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