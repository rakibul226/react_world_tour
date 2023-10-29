import { useState } from 'react';
import './css/country.css'

const MyCountry = ({proops ,handleVisitedCountry}) => {
    const {name,flags,alt} = proops;

    const [visited, setVisited] = useState(false);
    console.log(handleVisitedCountry);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    // const handleVisited = () =>{
    //     setVisited(true);
    // }

    return (
        <div className={`myCountry ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited ? 'black':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
        </div>
    );
};

export default MyCountry;