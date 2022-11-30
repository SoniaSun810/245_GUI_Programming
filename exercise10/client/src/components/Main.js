import "./Main.css";

function Main(props, children) {
    return (
        <section className="details">
            <article>
                <figure>
                    <img className="Image" src={props.image} alt="web image" />
                    <figcaption>Digital Menu Web App</figcaption>
                </figure>
                <hgroup>
                    <h2 className="title">{props.title}</h2>
                    <h3 className="main">{props.content}</h3>
                </hgroup>
            </article>
        </section>
    );
}

export default Main

