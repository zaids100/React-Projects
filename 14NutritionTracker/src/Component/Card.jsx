import { useState } from "react";
function Card({ itemName, calories, protein, carbs, fat, onEdit,onDelete }) {
  const [amount, setAmount] = useState(1);

  const addValue = () => {
    setAmount((prev) => prev + 1);
  };

  const remValue = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="card">
      <div className="nutritions">
        <h3 className="itemName">{itemName}</h3>
        <span>Calories: {(calories * amount).toFixed(2)}</span>
        <span>Protein: {(protein * amount).toFixed(2)}g</span>
        <span>Carbs: {(carbs * amount).toFixed(2)}g</span>
        <span>Fat: {(fat * amount).toFixed(2)}g</span>
      </div>
      <div className="counter">
        <button onClick={addValue}>+</button>
        <span>{amount}</span>
        <button onClick={remValue}>-</button>
      </div>

      <div className="edit-delete">
        <button className="edit" onClick={onEdit}>Edit</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
