export default function Posttop(props) {
    return (
        <div className="post-top">
            <div className="post-profile">
                <img src={props.profile} alt="" />
                <h3>{props.name}</h3>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    )
}