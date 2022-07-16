export default function Postimg(props) {
    function toggleLike() {
        if (props.iconName === 'heart-outline' && props.iconClass === 'heart-icon') {
            props.setIconName('heart');
            props.setIconClass('heart-icon liked');
        } else {
            props.setIconName('heart-outline');
            props.setIconClass('heart-icon');
        }
    }

    return (
        <div className="post-img">
            <img src={props.img} alt="" onClick={toggleLike} />
        </div>
    )
}