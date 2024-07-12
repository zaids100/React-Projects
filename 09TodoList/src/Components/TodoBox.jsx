import React, { useState } from 'react';

function TodoBox() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Function to add a new todo
    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue.trim(), completed: false }]);
            setInputValue('');
        }
    };

    // Function to remove a todo by index
    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // Function to toggle todo completion
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="w-1/2 mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl text-center mb-4 text-gray-800">Todo List</h1>
            <div className="flex items-center space-x-2 mb-4">
                <input 
                    className="bg-white w-full outline-none border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    type="text" 
                    placeholder="Add a new task" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button 
                    type="button" 
                    onClick={addTodo}
                    className="bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg px-4 py-2"
                >
                    Add
                </button>
            </div>
            <div className="w-full">
                <ul className="divide-y divide-gray-200">
                    {todos.map((todo, index) => (
                        <li key={index} className={`flex items-center justify-between py-2 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                            <span 
                                className="cursor-pointer"
                                onClick={() => toggleTodo(index)}
                            >
                                {todo.text}
                            </span>
                            <button 
                                className="text-red-600 hover:text-red-700 focus:outline-none"
                                onClick={() => removeTodo(index)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoBox;
