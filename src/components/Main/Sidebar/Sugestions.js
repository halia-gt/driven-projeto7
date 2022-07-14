import Sugestion from "./Sugestion"

export default function Sugestions() {
    const sugestionsArray = [
        {
            img: 'images/owl-logo.jpg',
            name: 'owlreaders'
        }, {
            img: 'images/squirrel-logo.jpg',
            name: 'cute_animals'
        }, {
            img: 'images/sweetbakery-logo.jpg',
            name: 'sweet-bakery'
        }, {
            img: 'images/winecellar-logo.jpg',
            name: 'winecellar'
        }, {
            img: 'images/coffee-logo.jpg',
            name: 'coffee.vibes'
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