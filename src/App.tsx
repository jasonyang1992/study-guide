import { JavaQuiz } from "./features/java/JavaQuiz";
import { SpringBootQuiz } from "./features/springboot/SpringBootQuiz";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/home"
          element={<Navigate to="/java" replace />}
        />

        <Route path="/java" element={<JavaQuiz />} />

        <Route
          path="/spring-boot"
          element={<SpringBootQuiz />}
        />

        <Route
          path="*"
          element={<Navigate to="/java" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
