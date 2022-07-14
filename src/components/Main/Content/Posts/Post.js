export default function Post(props) {
    return (
        <li className="post">
            <div className="post-top">
                <div className="post-profile">
                    <img src={props.profile} alt="" />
                    <h3>{props.name}</h3>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <div className="post-img">
                <img src={props.img} alt="" />
            </div>
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
            <div className="comments">
                <p><span>{props.name}</span> {props.text}</p>
                <button type="button">Ver todos os comentários</button>
                <div className="comment">
                    <p><span>{props.comment}</span>  {props.comment}</p>
                    <button type="button"><ion-icon name="heart-outline"></ion-icon></button>
                </div>
                <div className="publish-comment">
                    <input type="text" placeholder="Adicione um comentário..." />
                    <button type="button">Publicar</button>
                </div>
            </div>
        </li>
    )
}