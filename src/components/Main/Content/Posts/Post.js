import Postimg from "./Postcomponents/Postimg";
import Posttop from "./Postcomponents/Posttop";
import Postbottom from "./Postcomponents/Postbottom";
import Comments from "./Postcomponents/Comments/Comments";

export default function Post(props) {
    return (
        <li className="post">
            <Posttop profile={props.profile} name={props.name} />
            <Postimg img={props.img} />
            <Postbottom likedimg={props.likedimg} likedby={props.likedby} likes={props.likes} />
            <Comments name={props.name} text={props.text} comments={props.comments} />
        </li>
    )
}