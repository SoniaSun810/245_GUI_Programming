import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
        <aside>
            <section className="work-experience">
                <h2>Education</h2>
                <Link to="/">Major 1</Link>
                <a href="https://uci.edu/">University of California, Irvine
                    <p>Master Program of Software Engineering</p>
                </a>
                <Link to="nextview">Major 2</Link>
                <a href="https://www.manchester.ac.uk/">The University of Manchester
                    <p>Master Program of Renewable Energy</p>
                </a>
                <Link to="weatherMap">Click to see WeatherMap</Link>
                <Link to="loginForm">Click to insert Location</Link>
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

