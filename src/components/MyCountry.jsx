import { useState } from 'react';
import './css/country.css'
import PropTypes from 'prop-types';

const MyCountry = ({country ,handleVisitedCountry,handleAddFlag}) => {
    const {name,flags} = country;

    const [visited, setVisited] = useState(false);
    

    const handleVisited = () =>{
        setVisited(!visited);
    }
  
    return (
        <div className={`myCountry ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited ? 'black':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} />
            <br />
           <div className='btn'>
             {/* <button onClick={handleVisitedCountry()}>Mark Visited</button> */}
             <button onClick={ () =>handleVisitedCountry(country)}>Mark Visited</button>
            
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
           
            <button onClick={() =>handleAddFlag(country)}>Add Flag</button>
            <br />
            <p className='txt'>{visited ? 'I have visited this country' : 'I want to visit this country'}</p>
           </div>
        </div>
    );
};


MyCountry.propTypes ={
   country: PropTypes.array.isRequired,
   handleVisitedCountry: PropTypes.array,
   handleAddFlag: PropTypes.array
}

export default MyCountry;