import Link from "./Link"

export default function Links() {
    const linksArray = [
        {
            text: 'Sobre'
        }, {
            text: 'Ajuda'
        }, {
            text: 'Imprensa'
        }, {
            text: 'API'
        }, {
            text: 'Carreiras'
        }, {
            text: 'Privacidade'
        }, {
            text: 'Termos'
        }, {
            text: 'Localização'
        }, {
            text: 'Contas mais relevantes'
        }, {
            text: 'Hashtags'
        }
    ]

    return (
        <ul className="about-links">
            {linksArray.map( (link, index) => (
                <Link key={index} {...link} />
            ))}
            <li>Idiomas</li>
            <p className="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
        </ul>
    )
}