import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <ul className="nav nav-tabs mb-4" id="quizTabs">
      <li className="nav-item">
        <NavLink
          to="/java"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Java Quiz
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/spring-boot"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Spring Boot Quiz
        </NavLink>
      </li>
    </ul>
  );
}