import { useState } from "react"
import data from '../foods.json';


export default function DropDownMenu(): JSX.Element {
    let [fruit, setFruit] = useState("Select a Food Item")  
    let handleFoodItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFruit(e.target.value)
    }
    
    return (
        <div>
            <h2>Select a food item</h2>   
        <select onChange={handleFoodItemChange}> 
          <option> -- Select a Food Item -- </option> {data.items.map((item) => <option value={item.name}>{item.name}</option>)}
        </select>
        </div>
      );
}