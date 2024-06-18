import React, { useEffect } from 'react';

import Heading from './../Heading';
import Result from './../Result';
import Buttons from './../Buttons';
import Cards from './../Cards';
import { useState } from 'react'; 
const result = "";

export const RandomContext = React.createContext(); // create the context

const HomePage = () => {
    const heading = "Calculator"; // define the value you want to pass
    const [fetchReturn, setFetchReturn] = useState(''); // create a state to store the fetch return
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('http://localhost:5000/');
            const datajson = await data.json();
            setFetchReturn(datajson);
        }
        fetchData();
        console.log(fetchReturn);   
    }, 
    [])

    return (
        <RandomContext.Provider value={heading}>
            <div>
                
                <Heading /> 
                <Result result={result}/>
                <Buttons />
                <Cards />
            </div>
        </RandomContext.Provider>
    );
}

export default HomePage;