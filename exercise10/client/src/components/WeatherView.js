
import "./WeatherMap.css";

import React, { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

const WeatherMap = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);

  // set Latitude and Longitude of Irvine
  const [lat, setLat] = useState("33.6425");
  const [lon, setLon] = useState("-117.8417");
  const [zip, setZip] = useState("92617");
  const [country, setCountry] = useState("US");

  // set API key of Open Weather Map
  const APIkey = "7d7fc5519b96e0b642cee566bb0d7752";

  useEffect(() => {
    setLoading(true);
    // start the fetching
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No valid response");
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
        setLoading(false);
      });
  }, [lat, lon]); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!

  useEffect(() => {
    setLoading(true);
    // start the fetching
    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${APIkey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No valid response");
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setLat(actualData.lat);
        setLon(actualData.lon);
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
        setLoading(false);
      });
  }, [zip, country]);

 function setLocation() {
    

  }

  return (
    <>
      <div className="weatherDetails">
        <input className="zipNum"
          defaultValue={zip}
          onChange={(e) => setZip(e.currentTarget.value)}
        ></input>
        <br />
        <input className="countryName"
          defaultValue={country}
          onChange={(e) => setCountry(e.currentTarget.value)}
        ></input>
        {/* <button title="Submit" onClick={()=> setLocation() } /> */}
        {loading == true ? (
          "still loading"
        ) : error ? (
          "Error occured"
        ) : (
         <div className="weatherOutput" >
            <br />Latitude: {lat} 
            <br /> Longitude: {lon}
            <br />
            location: {data.name}
            <br />
            current temp: {Math.round(data.main.temp - 273)} °C
            <br />
            Max temp: {Math.round(data.main.temp_max - 273)} °C
            <br />
            Min temp: {Math.round(data.main.temp_min - 273)} °C
            <br />
            Wind speed: {data.wind.speed}
            <br />
            Wind degree: {data.wind.deg}
            <br />
            Weather Description : {data.weather[0].description}
         </div>
        )}
      </div>
    </>
  );
};

export default WeatherMap;
