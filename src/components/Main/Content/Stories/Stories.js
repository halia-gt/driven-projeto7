import Story from "./Story"

export default function Stories() {
    const storiesArray = [
        {
            img: 'images/9gag_logo.svg.png',
            title: '9gag'
        }, {
            img: 'images/meowed-logo.png',
            title: 'meowed'
        }, {
            img: 'images/barked-logo.jpg',
            title: 'barked'
        }, {
            img: 'images/nathanpyle-logo.jpg',
            title: 'nathanwpyle'
        }, {
            img: 'images/wawawiwacomics-logo.png',
            title: 'wawawiwacomics'
        }, {
            img: 'images/respodeai-logo.png',
            title: 'respondeai'
        }, {
            img: 'images/filomoderna-logo.jpg',
            title: 'filomoderna'
        }, {
            img: 'images/memeriago-logo.jpg',
            title: 'memeriago'
        }
    ]
    
    return (
        <ul className="stories-container">
            {storiesArray.map((story, index) => (
                <Story key={index} {...story} />
            ))}
            <li className="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </li>
        </ul>
    )
}


