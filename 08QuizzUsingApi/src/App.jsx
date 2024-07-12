import React, { useState } from 'react';
import QuizSetup from './QuizSetup';
import QuizzBox from './QuizzBox';

const types = ['multiple', 'boolean']; // Types of questions

function App() {
    const [quizData, setQuizData] = useState(null);

    const onStartQuiz = async (categoryId, type, numQuestions) => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${categoryId}&type=${type}`);
            const data = await response.json();
            setQuizData(data.results);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            {!quizData ? (
                <QuizSetup
                    types={types}
                    onStartQuiz={onStartQuiz}
                />
            ) : (
                <QuizzBox questions={quizData} />
            )}
        </div>
    );
}

export default App;
