import Links from "./Links";
import Profile from "./Profile";
import Sugestions from "./Sugestions";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Profile username="reader" name="I love read" img="images/me.jpg" />
            <Sugestions />
            <Links />
        </aside>
    )
}