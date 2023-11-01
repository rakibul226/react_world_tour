import { useState } from "react";
import { useEffect } from "react";
import MyCountry from "./MyCountry";
import './css/country.css'


const Country = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [addFlag, setFlag] = useState([]);

  
    useEffect (()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = country =>{
      
      const newVisitedCountry = [...visitedCountry, country];  //can not use push pop here //insted of push pop use these
      setVisitedCountry(newVisitedCountry);
    }
  
    const handleAddFlag = country =>{
        const newFlags = [...addFlag,country];
        setFlag(newFlags)
    }

    return (
      <div>
      
        <h2 className="margin">TotalCountries: {countries.length}</h2>
        <div>
            <h5 className="margin">Visited Country: {visitedCountry.length}</h5> 
            <ul className="visitedFlag">
                <div>
                {
                  // visitedCountry.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                  visitedCountry.map(country => <div className="visitedFlag margin" key={country.ccn3}> 
                                                    <li>{country.name.common}</li> 
                                                    {<img src={country.flags.png} alt="" />}
                                                </div> )
                }
                </div>
            </ul>
        </div>

        <div> 
              <h5 className="margin">ALL THE VISITED COUNTRY</h5>
              <div className="allVisitedFlag" >
                {addFlag.map(flag => <div key={flag.cca2} ><img src={flag.flags.png}/></div> )}
              </div>
        </div>


        {/* <div>
              <h5>Visited Country</h5>
            <ul className="visitedFlag">
                {
                  visitedCountry.map(country => <img src={country.flags.png} alt="" />)
                }
            </ul>             
        </div> */}


        <div className="parentCounty">
          {
            countries.map(country => <MyCountry key={country.cca2}
            country={country} handleVisitedCountry={handleVisitedCountry} handleAddFlag={handleAddFlag}></MyCountry>)
          }
        </div>
        
      </div>
    )
  }

export default Country;

