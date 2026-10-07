import { useQuiz } from "../../hooks/useQuiz";
import type { QuizQuestion } from "../../types/quiz.types";
import { Navbar } from "../Navbar";

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export function Quiz({ title, questions: allQuestions }: QuizProps) {
  const {
    questions,
    selectedAnswers,
    submitted,
    score,
    percentage,
    selectAnswer,
    submitQuiz,
    resetQuiz,
  } = useQuiz(allQuestions);

  const getFeedback = () => {
    if (percentage >= 80) {
      return "Excellent!";
    }

    if (percentage >= 50) {
      return "Good Job!";
    }

    return "Try Again!";
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">{title}</h1>
      <Navbar />
      <div className="bg-white p-4 rounded shadow">
        {questions.map((question, index) => {
          const selectedAnswer = selectedAnswers[question.id];
          const isCorrect =
            submitted && selectedAnswer === question.answer;
          const isWrong =
            submitted && selectedAnswer !== question.answer;

          return (
            <div
              key={question.id}
              className={`question mb-3 p-3 border rounded ${
                isCorrect ? "correct" : ""
              } ${isWrong ? "wrong" : ""}`}
            >
              <p className="fw-bold">
                {index + 1}. {question.question}
              </p>

              {question.options.map((option) => {
                const optionId = `${question.id}-${option}`;

                return (
                  <div className="form-check" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={question.id}
                      id={optionId}
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() =>
                        selectAnswer(question.id, option)
                      }
                      disabled={submitted}
                    />

                    <label
                      className="form-check-label"
                      htmlFor={optionId}
                    >
                      {option}
                    </label>
                  </div>
                );
              })}

              {submitted && isWrong && (
                <div className="correct-answer">
                  Correct Answer: {question.answer}
                </div>
              )}
            </div>
          )}
        )}
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-primary btn-lg me-2"
          onClick={submitQuiz}
          disabled={submitted}
        >
          Submit Quiz
        </button>

        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={resetQuiz}
        >
          Reset Quiz
        </button>
      </div>

      {submitted && (
        <div className="text-center mt-4 fs-4 fw-bold">
          Your Score: {score} / {questions.length} ({percentage}%) -{" "}
          {getFeedback()}
        </div>
      )}
    </div>
  );
}
