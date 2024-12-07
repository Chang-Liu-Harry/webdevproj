import React, { useState } from 'react';
import QuizInfo from './QuizInfo';
import QuizPreview from './QuizPreview';
import sampleQuizzes from './sampleQuestion';

const QuizList: React.FC = () => {
    const [selectedQuiz, setSelectedQuiz] = useState<any | null>(null);
    const [isPreview, setIsPreview] = useState(false);

    return (
        <div>
            {!selectedQuiz ? (
                <div>
                    <h1>Quizzes</h1>
                    <ul>
                        {sampleQuizzes.map((quiz) => (
                            <li
                                key={quiz.id}
                                onClick={() => setSelectedQuiz(quiz)}
                                style={{ cursor: 'pointer' }}
                            >
                                {quiz.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : isPreview ? (
                <QuizPreview
                    quiz={selectedQuiz}
                    navigateToEditor={() => {
                        setSelectedQuiz(null); // Reset to the quiz list
                        setIsPreview(false);
                    }}
                />
            ) : (
                <QuizInfo
                    quiz={selectedQuiz}
                    userType="Faculty"
                    navigateToPreview={() => setIsPreview(true)}
                    navigateToEditor={() => {
                        console.log("Navigate to Quiz Editor");
                        setSelectedQuiz(null);
                    }}
                />
            )}
        </div>
    );
};

export default QuizList;
