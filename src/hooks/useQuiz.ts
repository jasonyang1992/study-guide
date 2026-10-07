import { useState } from "react";
import type { QuizQuestion } from "../types/quiz.types";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => 0.5 - Math.random());
}

export function useQuiz(allQuestions: QuizQuestion[]) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    shuffleArray(allQuestions).slice(0, 20)
  );

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const [submitted, setSubmitted] = useState(false);

  const selectAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setQuestions(shuffleArray(allQuestions).slice(0, 20));
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = questions.reduce((total, question) => {
    const selectedAnswer = selectedAnswers[question.id];

    if (selectedAnswer === question.answer) {
      return total + 1;
    }

    return total;
  }, 0);

  const percentage =
    questions.length > 0
      ? Math.round((score / questions.length) * 100)
      : 0;

  return {
    questions,
    selectedAnswers,
    submitted,
    score,
    percentage,
    selectAnswer,
    submitQuiz,
    resetQuiz,
  };
}
