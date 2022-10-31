import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <h3>My projects</h3>
                <div className={s.projects}>
                    <Project title={"Название проекта"} description={'Краткое описание'}/>
                    <Project title={"Название проекта"} description={'Краткое описание'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;