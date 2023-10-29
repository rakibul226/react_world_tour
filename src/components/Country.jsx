import { useState } from "react";
import { useEffect } from "react";
import MyCountry from "./myCountry";
import './css/country.css'


const Country = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
  
    useEffect (()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
    },[])

    const handleVisitedCountry =country =>{
      console.log('add this to your visited county');
      console.log(country);
    }
  
    return (
      <div>
        <h3>Lets make a tour</h3>
        <h2>TotalCountries: {countries.length}</h2>
        <div className="parentCounty">
          {
            countries.map(country => <MyCountry key={countries.cca3}
            proops={country} handleVisitedCountry={handleVisitedCountry}></MyCountry>)
          }
        </div>
        
      </div>
    )
  }

export default Country;

