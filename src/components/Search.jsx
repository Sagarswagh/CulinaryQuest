import { useEffect, useState } from "react"
import styles from './search.module.css'
export default function Search({foodData,setFoodData}) {
    const URL="https://api.spoonacular.com/recipes/complexSearch";
    const API_Key="4afad214da934e25806fc85f4ff25eaf"
    const[query,setQuery]=useState("pizza")
    
    useEffect(()=>{
        async function fetchFood()
        {
            const result=await fetch(`${URL}?query=${query}&apiKey=${API_Key}`)
            const data = await result.json();
            setFoodData(data.results);
        }
        fetchFood()
    },[query])
    return <div className={styles.searchContainer}>
        <input className={styles.input} type="text" onChange={(e)=>{setQuery(e.target.value)}} value={query} />
    </div>
}