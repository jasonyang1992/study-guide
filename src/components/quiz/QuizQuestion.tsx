import type { QuizQuestion as QuizQuestionType } from "../../types/quiz.types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  index: number;
  selectedAnswer?: string;
  submitted: boolean;
  onSelectAnswer: (answer: string) => void;
}

export function QuizQuestion({
  question,
  index,
  selectedAnswer,
  submitted,
  onSelectAnswer,
}: QuizQuestionProps) {
  const isCorrect =
    submitted && selectedAnswer === question.answer;

  const isWrong =
    submitted && selectedAnswer !== question.answer;

  return (
    <div
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
              onChange={() => onSelectAnswer(option)}
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
  );
}
