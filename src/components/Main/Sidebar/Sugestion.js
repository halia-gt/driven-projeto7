export default function Sugestion(props) {
    return (
        <li className="sugestion">
            <div className="sugestion-profile">
                <img src={props.img} alt="" />
                <div className="sugestion-name">
                    <h3>{props.name}</h3>
                    <p>Segue você</p>
                </div>
            </div>
            <p>Seguir</p>
        </li>
    )
}