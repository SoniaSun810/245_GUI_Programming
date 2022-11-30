import "./Main.css";

function Main() {
    return (
        <section className="details">
            <article>
                <figure>
                    <img src={require("./webAppImage.png")} alt="Web App" />
                    <figcaption>Digital Menu Web App</figcaption>
                </figure>
                <hgroup>
                    <h2>About Me</h2>
                    <h3>Throughout the course of my career and master program, I have been improving my software development and programming skills. I am a capable and consistent contributor skilled at problem solving, prioritizing and completing work tasks with proficiency, who has been looking for rapid growth, constant learning and dynamic challenges as well. </h3>
                </hgroup>
            </article>
            <article>
                <figure>
                    <img src={require("./iOSAppImage.png")} alt="iOS APP" />
                    <figcaption>Quiz Game App</figcaption>
                </figure>
                <hgroup>
                    <h2>Projects</h2>
                    <h3>Quiz Game App Feature development: Answer questions, Multiple choice or Completion. Keep score in record. Edit & add questions, add
                        images via camera, photo library or drawing a picture. </h3>
                </hgroup>
                <p>iOS Mobile App Development</p>
            </article>
        </section>

    );
}

export default Main