import React, { useState } from 'react';

interface Question {
    id: number;
    title: string;
    type: "multiple-choice" | "true-false" | "fill-blank";
    options?: string[]; // For multiple-choice questions
    correctAnswer: string | boolean; // For validation
    points: number;
}

interface QuizPreviewProps {
    quiz: {
        title: string;
        questions: Question[];
    };
    navigateToEditor: () => void; // Function to navigate to the Quiz Editor
}

const QuizPreview: React.FC<QuizPreviewProps> = ({ quiz, navigateToEditor }) => {
    const [answers, setAnswers] = useState<{ [key: number]: string | boolean }>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerChange = (questionId: number, answer: string | boolean) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = () => {
        let calculatedScore = 0;

        quiz.questions.forEach((question) => {
            if (answers[question.id] === question.correctAnswer) {
                calculatedScore += question.points;
            }
        });

        setScore(calculatedScore);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Quiz Preview: {quiz.title}</h1>
            {!submitted ? (
                <div>
                    {quiz.questions.map((question) => (
                        <div key={question.id}>
                            <h2>{question.title}</h2>
                            {question.type === "multiple-choice" && question.options && (
                                <div>
                                    {question.options.map((option, index) => (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                onChange={() =>
                                                    handleAnswerChange(question.id, option)
                                                }
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            )}
                            {question.type === "true-false" && (
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            value="true"
                                            onChange={() => handleAnswerChange(question.id, true)}
                                        />
                                        True
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            value="false"
                                            onChange={() => handleAnswerChange(question.id, false)}
                                        />
                                        False
                                    </label>
                                </div>
                            )}
                            {question.type === "fill-blank" && (
                                <div>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            handleAnswerChange(question.id, e.target.value)
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <h2>Your Score: {score}</h2>
                    <p>You answered the quiz. Your responses have been saved.</p>
                    <button onClick={navigateToEditor}>Edit Quiz</button>
                </div>
            )}
        </div>
    );
};

export default QuizPreview;
