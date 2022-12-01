import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import todoListImg from '../assets/image/demo_todolist.jpg'
import socialImg from '../assets/image/social.png'
const Projects = () => {
    const todoList = {
        backgroundImage: `url(${todoListImg})`
    }
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const titleTodo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <div className={s.title}>
                    <h2>Projects</h2>
                </div>
                <div className={s.projects}>
                    <Project style={social} title={"Social network"} description={titleTodo}/>
                    <Project style={todoList} title={"TodoList"} description={titleTodo}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;