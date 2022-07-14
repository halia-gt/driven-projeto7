import Post from "./Post";

export default function Posts() {
    const postArray = [
        {
            profile: 'images/book-logo.jpg',
            name: 'booksh',
            img: 'images/books.jpg',
            likedby: 'coffee.vibes',
            likedimg: 'images/coffee-lover-logo.jpg',
            likes: '101.523',
            text: 'Book vortex',
            comments: [{
                by: 'coffee.vibes',
                text: 'I love books with coffee'
            }
            ]
        }, {
            profile: 'images/dog-logo.jpg',
            name: 'barking',
            img: 'images/dog.jpg',
            likedby: 'berryshop',
            likedimg: 'images/strawberry-logo.jpg',
            likes: '99.504',
            text: 'My dog is more photogenic than me...',
            comments: [{
                by: 'cute_animals',
                text: 'I want to hug him so much'
            }, {
                by: 'berryshop',
                text: 'So cute!'
            }
            ]
        }, {
            profile: 'images/cat-logo.jpg',
            name: 'meowing',
            img: 'images/cat-space.jpg',
            likedby: 'funny',
            likedimg: 'images/funny-logo.jpg',
            likes: '58.388',
            text: 'This cat is a disney princess',
            comments: [{
                by: 'barking',
                text: 'I want to be a disney princess too'
            }
            ]
        }
    ]

    return (
        <ul className="posts-column">
            {postArray.map( (post, index) => (
                <Post key={index} {...post} />
            ))}
        </ul>
    )
}