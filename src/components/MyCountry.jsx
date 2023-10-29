import { useState } from 'react';
import './css/country.css'

const MyCountry = ({country ,handleVisitedCountry}) => {
    const {name,flags} = country;

    const [visited, setVisited] = useState(false);
    

    const handleVisited = () =>{
        setVisited(!visited);
    }
    // const handleVisited = () =>{
    //     setVisited(true);
    // }

    return (
        <div className={`myCountry ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited ? 'black':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} />
            <br />
            {/* <button onClick={handleVisitedCountry()}>Mark Visited</button> */}
            <button onClick={ () =>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
        </div>
    );
};

export default MyCountry;