import styles from './fooditem.module.css';
import FoodDetails from './FoodDetail';
export default function FoodItem({food,setFoodId})
{
    return <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt="" /><br />
        <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
        </div>
        <div className={styles.buttoncontainer}>
            <button className={styles.itemButton} onClick={()=>{setFoodId(food.id)}}>View Recipe</button>
        </div>
    </div>
}