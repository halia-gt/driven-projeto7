export default function Postimg(props) {
    function addLike() {
        if (props.iconName === 'heart-outline' && props.iconClass === 'heart-icon') {
            props.setIconName('heart');
            props.setIconClass('heart-icon liked');
        }
    }

    return (
        <div className="post-img">
            <img src={props.img} alt="" onClick={addLike} />
        </div>
    )
}