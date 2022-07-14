import Profile from "./Profile";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Profile username="catanacomics" name="Catana" img="images/catanacomics-logo.jpg" />


            <div className="sugestion-box">
                <div className="sugestion-title">
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
                </div>
                <div className="sugestion">
                    <div className="sugestion-profile">
                       <img src="images/owl-logo.png" alt="" />
                        <div className="sugestion-name">
                           <h3>owlreaders</h3>
                           <p>Segue você</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="sugestion">
                    <div className="sugestion-profile">
                       <img src="images/cutepanda-logo.jpg" alt="" />
                        <div className="sugestion-name">
                           <h3>cute_animals</h3>
                           <p>Segue você</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="sugestion">
                    <div className="sugestion-profile">
                       <img src="images/sweetbakery-logo.jpg" alt="" />
                        <div className="sugestion-name">
                           <h3>sweet-bakery</h3>
                           <p>Segue você</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="sugestion">
                    <div className="sugestion-profile">
                       <img src="images/grapes-logo.jpg" alt="" />
                        <div className="sugestion-name">
                           <h3>winecellar</h3>
                           <p>Segue você</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="sugestion">
                    <div className="sugestion-profile">
                       <img src="images/catcoffe-logo.png" alt="" />
                        <div className="sugestion-name">
                           <h3>cat.vibes</h3>
                           <p>Segue você</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
            </div>
            <div className="about-links">
                <p>Sobre •</p>
                <p>Ajuda •</p>
                <p>Imprensa •</p>
                <p>API •</p>
                <p>Carreiras •</p>
                <p>Privacidade •</p>
                <p>Termos •</p>
                <p>Localização •</p>
                <p>Contas mais relevantes •</p>
                <p>Hashtags •</p>
                <p>Idiomas</p>
                <p id="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}