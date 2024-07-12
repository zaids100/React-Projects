import Input from './Input';

function Inputs({ itemName, calories, protein, carbs, fat, setItemName, setCalories, setProtein, setCarbs, setFat, setData, data, editingIndex, setEditingIndex }) {

  const addCard = () => {
    const newData = {
      itemName: itemName,
      calories: calories,
      protein: protein,
      carbs: carbs,
      fat: fat,
    };

    if (newData.itemName !== "" && newData.calories && newData.protein && newData.carbs && newData.fat) {
      if (editingIndex !== null) {
        const updatedData = [...data];
        updatedData[editingIndex] = newData;
        setData(updatedData);
        setEditingIndex(null);
      } else {
        setData([...data, newData]);
      }

      // Clear the input fields
      setItemName("");
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");
    } else {
      alert("Enter all fields");
      return;
    }
  };

  const clearAll = () => {
    setData([]);
  };

  return (
    <div className="inputs-buttons">
      <div className="inputs">
        <Input type="text" placeholder="Item Name" value={itemName} handleValue={setItemName} />
        <Input type="number" placeholder="Calories" value={calories} handleValue={setCalories} />
        <Input type="number" placeholder="Protein" value={protein} handleValue={setProtein} />
        <Input type="number" placeholder="Carbs" value={carbs} handleValue={setCarbs} />
        <Input type="number" placeholder="Fat" value={fat} handleValue={setFat} />
      </div>
      <div className='buttons'>
        <button className='add' onClick={addCard}>{editingIndex !== null ? 'Update' : 'Add'}</button>
        <button className='clear' onClick={clearAll}>Clear all</button>
      </div>
    </div>
  );
}

export default Inputs;
