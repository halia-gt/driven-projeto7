import Icon from "./Icon"

export default function Footer() {
    const ionIcons = [
        {
            name: 'home'
        }, {
            name: 'search-outline'
        }, {
            name: 'add-circle-outline'
        }, {
            name: 'heart-outline'
        }, {
            name: 'person-outline'
        }
    ]
    return (
        <footer className="footer">
            {ionIcons.map( (icon, index) => (
                <Icon key={index} {...icon} />
            ))}
        </footer>
    )
}