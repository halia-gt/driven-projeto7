import Post from "./Post";

export default function Posts() {
    const postArray = [
        {
            profile: 'images/meowed-logo.png',
            name: 'meowed',
            img: 'images/cat-glasses.jpg',
            likedby: 'respondeai',
            likedimg: 'images/respodeai-logo.png',
            likes: '101.523',
            text: 'A galaxy cat!',
            comments: [{
                by: 'cat.vibes',
                text: 'Loved the glasses, I want one too'
            }
            ]
        }, {
            profile: 'images/barked-logo.jpg',
            name: 'barked',
            img: 'images/dog-wallpaper.jpg',
            likedby: 'berryshop',
            likedimg: 'images/strawberry.jpg',
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
            profile: 'images/meowed-logo.png',
            name: 'meowed',
            img: 'images/cat-space.jpg',
            likedby: '9gag',
            likedimg: 'images/9gag_logo.svg.png',
            likes: '58.388',
            text: 'This cat is a disney princess',
            comments: [{
                by: 'barked',
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