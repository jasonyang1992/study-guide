import { Quiz } from "../../components/quiz/Quiz";
import { springbootQuestions } from "./data/springbootQuestions";

export function SpringBootQuiz() {
  return (
    <Quiz
      title="Spring Boot Quiz"
      questions={springbootQuestions}
    />
  );
}
