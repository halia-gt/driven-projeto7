import Comment from "./Comment";
import Publish from "./Publish";

export default function Comments(props) {
    const commentsArray = props.comments;

    return (
        <div className="comments">
            <p><span>{props.name}</span> {props.text}</p>
            <button type="button">Ver todos os comentários</button>

            {commentsArray.map( (comment, index) => (
                <Comment key={index} {...comment} />
            ))}

            <Publish />
        </div>
    )
}