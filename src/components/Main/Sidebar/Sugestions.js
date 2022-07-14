import Sugestion from "./Sugestion"

export default function Sugestions() {
    const sugestionsArray = [
        {
            img: 'images/owl-logo.png',
            name: 'owlreaders'
        }, {
            img: 'images/cutepanda-logo.jpg',
            name: 'cute_animals'
        }, {
            img: 'images/sweetbakery-logo.jpg',
            name: 'sweet-bakery'
        }, {
            img: 'images/grapes-logo.jpg',
            name: 'winecellar'
        }, {
            img: 'images/catcoffe-logo.png',
            name: 'cat.vibes'
        }
    ]
    return (
        <ul className="sugestion-box">
            <li className="sugestion-title">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </li>
            {sugestionsArray.map( (sugestion, index) => (
                <Sugestion key={index} {...sugestion} />
            ))}
        </ul>
    )
}