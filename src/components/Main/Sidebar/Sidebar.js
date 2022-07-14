import Links from "./Links";
import Profile from "./Profile";
import Sugestions from "./Sugestions";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Profile username="catanacomics" name="Catana" img="images/catanacomics-logo.jpg" />
            <Sugestions />
            <Links />
        </div>
    )
}