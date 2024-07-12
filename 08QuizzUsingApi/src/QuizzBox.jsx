import React, { useState, useEffect } from 'react';

const QuizzBox = ({ questions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        if (questions && questions.length > 0) {
            const currentQuestion = questions[currentIndex];
            const allOptions = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
            const shuffled = shuffleArray(allOptions.map(option => decodeHtml(option)));
            setShuffledOptions(shuffled);
        }
    }, [questions, currentIndex]);

    const currentQuestion = questions[currentIndex];

    const handleOptionClick = (option) => {
        if (!selectedOption) {
            setSelectedOption(option);

            // Check if the selected option is correct
            if (option === currentQuestion.correct_answer) {
                setScore(prevScore => prevScore + 1);
            }
        }
    };

    const handleNextClick = () => {
        setSelectedOption(null);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setShowScore(true);
        }
    };

    const handleRetry = () => {
        window.location.reload(); // Reload the page
    };

    const getButtonClass = (option) => {
        if (!selectedOption) return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
        if (option === currentQuestion.correct_answer) return 'text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2';
        if (option === selectedOption) return 'text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2';
        return 'text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2';
    };

    if (!currentQuestion) return null;

    if (showScore) {
        return (
            <div className="flex flex-col items-center border-2 border-gray-300 bg-white p-6 rounded-lg shadow-md justify-center"
                 style={{ width: '500px', height: '400px' }}>
                <h1 className="text-2xl text-center">Quiz Completed!</h1>
                <h2 className="text-xl text-center mt-4 mb-2">Your Score: {score}/{questions.length}</h2>
                <button
                    onClick={handleRetry}
                    className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center border-2 border-gray-300 bg-white p-6 rounded-lg shadow-md"
             style={{ width: '500px', height: '400px' }}>
            <div className="max-w-full overflow-hidden mb-4">
                <h1 className="text-lg text-center break-words">{decodeHtml(currentQuestion.question)}</h1>
            </div>

            <div className="flex flex-col gap-2 w-full">
                {shuffledOptions.map((option, index) => (
                    <button
                        key={index}
                        value={option}
                        onClick={() => handleOptionClick(option)}
                        disabled={!!selectedOption}
                        className={getButtonClass(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <button
                type="button"
                onClick={handleNextClick}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 mt-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                disabled={!selectedOption}
            >
                Next
            </button>
        </div>
    );
};

// Function to decode HTML entities
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Function to shuffle array elements
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export default QuizzBox;
