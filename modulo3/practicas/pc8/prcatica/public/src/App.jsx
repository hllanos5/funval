import React, { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = `https://cataas.com/fact`;
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

export function App() {

    const [fact, setFact] = useState('ddds');
    
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))

    }, [])
    
    return (
        <div>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
        </div>
    )
}
