import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

export default function Main() {
    return (
        <main className="page-content">
            <Content />
            <Sidebar />
        </main>
    )
}