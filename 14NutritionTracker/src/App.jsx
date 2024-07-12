import { useState } from 'react';
import Header from './Component/Header';
import Inputs from './Component/Inputs';
import Card from './Component/Card';

function App() {
  const [itemName, setItemName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    const item = data[index];
    setItemName(item.itemName);
    setCalories(item.calories);
    setProtein(item.protein);
    setCarbs(item.carbs);
    setFat(item.fat);
    setEditingIndex(index);
  };
  
  const handleDelete=(index)=>{
        const newData=data.filter((item,ind)=>ind!==index);
        setData(newData)
  }

  return (
    <>
      <div className='container'>
        <div className="main-content">
          <Header />
          <Inputs 
            itemName={itemName}
            calories={calories}
            protein={protein}
            carbs={carbs}
            fat={fat}
            setItemName={setItemName}
            setCalories={setCalories}
            setProtein={setProtein}
            setCarbs={setCarbs}
            setFat={setFat}
            setData={setData}
            data={data}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}

          />
          <div className="card-list">
            {data.map((item, index) => (
              <Card
                key={index}
                itemName={item.itemName}
                calories={item.calories}
                protein={item.protein}
                carbs={item.carbs}
                fat={item.fat}
                onEdit={() => handleEdit(index)}
                onDelete={()=>{handleDelete(index)}}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
