export default function Postbottom(props) {
    return (
        <div className="post-bottom">
            <div className="icons">
                <div className="icons-left">
                    <ion-icon name="heart-outline"></ion-icon>
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