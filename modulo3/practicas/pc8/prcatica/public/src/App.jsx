import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
    
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data;
            setFact(fact);
            
        })

    }, [])

    useEffect(()=> {
        if(!fact) return
        
        const firstWord = fact.split(' ',3).join(' ');
            
        fetch (`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { _id } = response
            const url = `/cat/${_id}/says/${firstWord}`                
            setImageUrl(`https://cataas.com/${url}`);
        })

    },[fact])
    
    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt='cat'/>}
            </section>
        </main>
    )
}
