// CSS and other resources
import "./IntegratedView.css";

// External Libraries
import React from "react"
import {Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import SecondDataView from "./SecondView";
import WeatherMap from "./WeatherView";
import LoginForm from "./LoginForm";

class IntegratedView extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            zip: "",
            country: "",
        };
      }

  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  render() {

    const handleSubmit = (data) => {
        // const json = JSON.stringify(data, null, 4);
        console.clear(); 
        console.log(data.zip)
        console.log(data.country)
        // clearing previous console logs
        // let obj = JSON.parse(json)
        // console.log(obj["zip"])
        // console.log(obj["country"])
        this.setState({
            zip: String(data.zip)
          });
        this.setState({
            country: String(data.country)
        });
        // console.log(this.state.zip)
        // console.log(this.state.country)
      }
    
      return (
        <div className="App">
            <Header />
            <Sidebar />
            <Routes>
              <Route index element={<LandingView />} />
              <Route path="nextview" element={<SecondDataView />}></Route>
              <Route path="weatherMap" element={<WeatherMap data={this.state}/>}></Route>
              <Route path="loginForm" element={<LoginForm onSubmit={handleSubmit} />}></Route>
            </Routes>
            <Footer />
        </div>
      );
    }
  }
  

export default IntegratedView;
