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

    const handleVisitedCountry = country =>{
      console.log('add this to your visited county');
      const newVisitedCountry = [...visitedCountry, country];  //can not use push pop here //insted of push pop use these
      setVisitedCountry(newVisitedCountry);
    }
  
    return (
      <div>
        
        <h3>Lets make a tour</h3>
        <h2>TotalCountries: {countries.length}</h2>
        <div>
            <h5>Visited Country: {visitedCountry.length}</h5> 
            <ul>
                {
                  visitedCountry.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                }
            </ul>
        </div>
        <div>
              <h5>Visited Country</h5>
                <ul>
                  
                </ul>
        </div>
        <div className="parentCounty">
          {
            countries.map(country => <MyCountry key={country.cca2}
            country={country} handleVisitedCountry={handleVisitedCountry}></MyCountry>)
          }
        </div>
        
      </div>
    )
  }

export default Country;

