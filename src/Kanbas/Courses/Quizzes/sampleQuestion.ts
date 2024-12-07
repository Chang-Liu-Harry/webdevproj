const sampleQuizzes = [
    {
        id: 1,
        title: "Sample Quiz",
        questions: [
            {
                id: 1,
                title: "What is the capital of France?",
                type: "multiple-choice",
                options: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswer: "Paris",
                points: 5,
            },
            {
                id: 2,
                title: "The earth is flat.",
                type: "true-false",
                correctAnswer: false,
                points: 3,
            },
            {
                id: 3,
                title: "Complete the sentence: The sun rises in the ___",
                type: "fill-blank",
                correctAnswer: "east",
                points: 2,
            },
        ],
    },
];

export default sampleQuizzes;
