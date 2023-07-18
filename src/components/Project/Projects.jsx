import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = ({ title, img, index }) => {
  return (
    <NavLink to={`/card/${index}`}>
      <li className="project">
          <img src={img} alt={title} className="project__img" />
          <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Projects;
