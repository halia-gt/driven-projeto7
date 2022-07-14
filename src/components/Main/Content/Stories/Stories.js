import Story from "./Story"

export default function Stories() {
    const storiesArray = [
        {
            img: 'images/cat-logo.jpg',
            title: 'meowing'
        }, {
            img: 'images/dog-logo.jpg',
            title: 'barking'
        }, {
            img: 'images/book-logo.jpg',
            title: 'booksh'
        }, {
            img: 'images/journal-logo.jpg',
            title: 'journaling'
        }, {
            img: 'images/travel-logo.jpg',
            title: 'nice-travelling'
        }, {
            img: 'images/coffee-lover-logo.jpg',
            title: 'coffee.lover'
        }, {
            img: 'images/dessert-logo.jpg',
            title: 'dessert'
        }, {
            img: 'images/funny-logo.jpg',
            title: 'funny'
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


