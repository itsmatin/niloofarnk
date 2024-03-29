import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import { ease } from "../utils/config";
import ProjectHeader from "../sections/ProjectHeader";
import ProjectDetails from "../sections/ProjectDetails";
import ProjectShowcase from "../sections/ProjectShowcase";
import Ending from "../sections/Ending";
import ProjectProcess from "../sections/ProjectProcess";
import ProjectInfo from "../sections/ProjectInfo";
import database from "../utils/database";

const Project = ({ setBgColor, bgColor }) => {
  const [project, setProject] = useState(false);
  const [nextProject, setNextProject] = useState({});

  useEffect(() => {
    const { pathname } = window.location;
    const itemToSearch = pathname.replace(/\D/g, "");
    const projectList = database.researches.concat(database.designs);
    var foundProject = projectList.find((element, index) => {
      if (projectList[index + 1] !== undefined)
        setNextProject(projectList[index + 1]);
      else setNextProject(projectList[0]);
      return element.id == itemToSearch;
    });

    if (!foundProject) window.location.replace("/404");
    else setProject(foundProject);
  }, []);

  return (
    project && (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ ease: ease }}
        className="project"
      >
        <Helmet>
          <title>{project.title} - Niloofar Nikookar</title>
          <meta
            name="description"
            content={project.headerDescription + project.infoDescription}
          />
        </Helmet>
        <ProjectHeader project={project} />
        <ProjectInfo project={project} bgColor={bgColor} />
        <ProjectShowcase
          project={project}
          bgColor={bgColor}
          setBgColor={setBgColor}
          shouldChangeColor={project.shouldChangeColor}
        />
        <ProjectProcess
          shouldChangeColor={project.shouldChangeColor}
          project={project}
          setBgColor={setBgColor}
        />
        <ProjectDetails project={project} bgColor={bgColor} />
        <Ending
          to={`/project/${nextProject.id}`}
          title={`${nextProject.id}. ${nextProject.title}`}
        />
      </motion.div>
    )
  );
};

export default Project;
