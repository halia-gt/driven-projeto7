import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";

export default function Content() {
    return (
        <section className="main-content">
            <Stories />
            <Posts />
        </section>
    )
}