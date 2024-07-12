import React, { useState, useEffect } from 'react';

const QuizSetup = ({ types, onStartQuiz }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState(5); // Default to 5 questions
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch categories from API
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://opentdb.com/api_category.php');
                const data = await response.json();
                setCategories(data.trivia_categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleStartQuiz = () => {
        if (selectedCategory && selectedType && numberOfQuestions > 0) {
            onStartQuiz(selectedCategory, selectedType, numberOfQuestions);
        } else {
            alert('Please select all options before starting the quiz.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Quiz Setup</h2>
                
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium mb-2 text-gray-700">Select Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block text-lg font-medium mb-2 text-gray-700">Select Type:</label>
                    <select
                        id="type"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        {types.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-lg font-medium mb-2 text-gray-700">Number of Questions:</label>
                    <input
                        id="number"
                        type="number"
                        min="1"
                        value={numberOfQuestions}
                        onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleStartQuiz}
                    className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading || !selectedCategory || !selectedType || numberOfQuestions <= 0}
                >
                    {loading ? 'Loading...' : 'Start Quiz'}
                </button>
            </div>
        </div>
    );
};

export default QuizSetup;
