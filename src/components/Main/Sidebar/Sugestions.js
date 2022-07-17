import Sugestion from "./Sugestion"

export default function Sugestions() {
    const sugestionsArray = [
        {
            img: 'images/owl-logo.jpg',
            name: 'owlreaders',
            reason: 'Segue você'
        }, {
            img: 'images/squirrel-logo.jpg',
            name: 'cute_animals',
            reason: 'Segue você'
        }, {
            img: 'images/sweetbakery-logo.jpg',
            name: 'sweet-bakery',
            reason: 'Segue você'
        }, {
            img: 'images/winecellar-logo.jpg',
            name: 'winecellar',
            reason: 'Segue você'
        }, {
            img: 'images/coffee-logo.jpg',
            name: 'coffee.vibes',
            reason: 'Novo no Instagram'
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