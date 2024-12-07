import React from 'react';

interface Quiz {
    id: number;
    title: string;
    available: string;
    dueDate: string;
    points: number;
    numQuestions: number;
    status: string;
    quizType: string;
    assignmentGroup: string;
    shuffleAnswers: boolean;
    timeLimit: number; // in minutes
    multipleAttempts: boolean;
    attemptsAllowed: number;
    showCorrectAnswers: boolean;
    accessCode: string | null;
    oneQuestionAtATime: boolean;
    webcamRequired: boolean;
    lockQuestionsAfterAnswering: boolean;
}

interface QuizInfoProps {
    quiz: Quiz;
    userType: "Faculty" | "Student";
    navigateToPreview: () => void;
    navigateToEditor: () => void;
}

const QuizInfo: React.FC<QuizInfoProps> = ({ quiz, userType, navigateToPreview, navigateToEditor }) => {
    return (
        <div>
            <h1>{quiz.title}</h1>
            <p>Quiz Type: {quiz.quizType}</p>
            <p>Points: {quiz.points}</p>
            <p>Assignment Group: {quiz.assignmentGroup}</p>
            <p>Shuffle Answers: {quiz.shuffleAnswers ? "Yes" : "No"}</p>
            <p>Time Limit: {quiz.timeLimit} Minutes</p>
            <p>Multiple Attempts: {quiz.multipleAttempts ? "Yes" : "No"}</p>
            <p>Attempts Allowed: {quiz.multipleAttempts ? quiz.attemptsAllowed : "N/A"}</p>
            <p>Show Correct Answers: {quiz.showCorrectAnswers ? "Yes" : "No"}</p>
            <p>Access Code: {quiz.accessCode || "None"}</p>
            <p>One Question at a Time: {quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
            <p>Webcam Required: {quiz.webcamRequired ? "Yes" : "No"}</p>
            <p>Lock Questions After Answering: {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
            <p>Availability: {quiz.available}</p>
            <p>Due Date: {quiz.dueDate}</p>

            <button onClick={navigateToPreview}>Preview</button>
            {userType === "Faculty" && <button onClick={navigateToEditor}>Edit</button>}
        </div>
    );
};

export default QuizInfo;
