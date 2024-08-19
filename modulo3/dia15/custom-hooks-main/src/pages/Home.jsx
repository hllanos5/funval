import {useSearchParams, } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import useData from "../hooks/useData";
import { useEffect, useState } from "react";

export default function Home() {
    const [param, setParam] = useSearchParams()
    const { data } = useData(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${param.get('a') || 'Alcoholic'}`);

    const [category, setCategory] = useState('')

    useEffect(()=>{
        console.log(category);
    }, [category])

    return (
        <main className="p-8 w-full">


            <div className="w-full  flex justify-end  max-w-screen-lg py-8">
                <Dropdown onChange={setCategory} value={category}/>
            </div>


            <ul className="grid-card max-w-screen-lg mx-auto">
                {data &&
                    data.map(drink =>

                        <li key={drink.idDrink} className=" overflow-hidden w-60">
                            <figure className="w-full">
                                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full" />
                                <figcaption>{drink.strDrink}</figcaption>
                            </figure>
                        </li>
                    )


                }

            </ul>

        </main>
    )
}
