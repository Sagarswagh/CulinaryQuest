import { useEffect, useState } from "react"
import styles from './fooddetails.module.css'
import ItemList from "./ItemList"
export default function FoodDetails({foodId})
{   
    const[food,setFood]=useState("")
    const[isLoading,setIsLoading]=useState(true)
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false`
    const API_Key="4afad214da934e25806fc85f4ff25eaf"
    useEffect(()=>{
        async function fetchFood()
        {
            const result=await fetch(`${URL}&apiKey=${API_Key}`)
            const data = await result.json();
            console.log(data);
            setFood(data);
            setIsLoading(false)
        }
        fetchFood()
    },[foodId])
     
    return (<div >
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" /> 
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⌚️{food.readyInMinutes}</strong>
                    </span>
                    <span>
                        <strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? "🥕Vegetarian":"🍖non-vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>{food.vegan? "🐄Vegan":""}</strong>
                    </span>
                </div>        
                <div>
                $   <strong><span>{food.pricePerServing/100} PerServing</span></strong>
                </div>
                <ItemList key={food.id} food={food} isLoading={isLoading}/>
                {console.log(food.extendedIngredients)}
                <div className={styles}>
                    <h2>Instructions</h2>
                    <ol>
                        {isLoading ? (<p>Loading...</p>):
                        (
                            food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>)))
                        }
                    </ol>                   
                </div>
            </div>
        </div>)
}