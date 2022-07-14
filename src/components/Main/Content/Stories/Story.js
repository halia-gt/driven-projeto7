export default function Story(props) {
    return (
        <li className="story">
            <div className="story-circle">
                <img src="images/stories_background.jpg" alt="" />
                <div className="story-img">
                    <img src={props.img} alt="" />
                </div>
            </div>
            <p>{props.title}</p>
        </li>
    )
}