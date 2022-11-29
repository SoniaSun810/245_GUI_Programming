import "./Main.css";

function Main(props, children) {
    return (
        <section className="details">
            <article>
                <figure>
                    <img src="../public/webAppImage.png" alt="Web App" />
                    <figcaption>Digital Menu Web App</figcaption>
                </figure>
                <hgroup>
                    <h2>About My Major</h2>
                    <h3 className="main">{props.content}</h3>
                </hgroup>
            </article>
        </section>
    );
}

export default Main

