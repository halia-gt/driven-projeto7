export default function Profile(props) {
    return (
        <div className="profile">
            <img src={props.img} alt="" />
            <div className="profile-name">
                <h3>{props.username}</h3>
                <p>{props.name}</p>
            </div>
        </div>
    )
}