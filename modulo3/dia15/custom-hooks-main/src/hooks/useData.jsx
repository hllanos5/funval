import { useEffect, useState } from "react";

export default function useData(url) {
    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        console.log(url);
        const getData = async () => {
            const rs = await fetch(url);
            const jsoRs = await rs.json()

            setData(jsoRs.drinks);

        }


        getData()
    }, [url])

    return {
        data, 
        filtered, 
        setFiltered
    }
}
