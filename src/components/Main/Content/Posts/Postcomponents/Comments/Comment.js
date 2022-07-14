export default function Comment(props) {
    return (
        <div className="comment">
            <p><span>{props.by}</span>  {props.text}</p>
            <button type="button"><ion-icon name="heart-outline"></ion-icon></button>
        </div>
    )
}