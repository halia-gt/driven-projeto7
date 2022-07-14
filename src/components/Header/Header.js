import Icons from "./Icons";
import Logo from "./Logo";
import NavMobile from "./Navmobile";

export default function Header() {
    return (
        <header className="header">
            <nav className="topnav">
                <Logo />
                <input type="text" placeholder="Pesquisar"></input>
                <Icons />
            </nav>
            <NavMobile />
        </header>
    )
}