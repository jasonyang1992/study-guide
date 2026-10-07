import { Quiz } from "../../components/quiz/Quiz";
import { javaQuestions } from "./data/javaQuestions";

export function JavaQuiz() {
  return (
    <Quiz
      title="Java Quiz"
      questions={javaQuestions}
    />
  );
}
