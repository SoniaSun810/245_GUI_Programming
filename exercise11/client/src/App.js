// CSS and other resources
import "./App.css";

// External Libraries
import {BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import LandingView from "./components/LandingView";
import SecondDataView from "./components/SecondView";
import WeatherMap from "./components/WeatherView";
import LoginForm from "./components/LoginForm";

function App() {

  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted through the form
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="nextview" element={<SecondDataView />}></Route>
          <Route path="weatherMap" element={<WeatherMap />}></Route>
          <Route path="loginForm" element={<LoginForm onSubmit={handleSubmit} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
