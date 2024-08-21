import { useEffect, useState } from 'react'

export function useImage() {

    const [data, setData] = useState([])    

    function getData() {       

        fetch(`https://rickandmortyapi.com/api/character`)
        .then(res => res.json())
        .then(response => {
            setData(response.results);
        })
    }

    useEffect(() => {
        getData();
    }, [])

  return ({ data })
}
