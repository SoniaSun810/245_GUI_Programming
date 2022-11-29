import "./Sidebar.css"

function Sidebar() {
    return (
        <>
        <aside>
            <section className="work-experience">
                <h2>Education</h2>
                <a href="https://uci.edu/">University of California, Irvine
                    <p>Master Program of Software Engineering</p>
                </a>
                <a href="https://www.manchester.ac.uk/">The University of Manchester
                    <p>Master Program of Renewable Energy</p>
                </a>
            </section>
            <section className="contact-details">
                <h2>Contact</h2>
                <p id="address">Fengnan Sun<br/>
                    74000S Verano Road<br/>
                    APT# C609<br/>
                    Irvine<br/>
                    California</p>
            </section>
        </aside>
        </>
    );
}

export default Sidebar;