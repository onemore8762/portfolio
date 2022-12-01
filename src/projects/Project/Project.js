import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href="" target='_blank'>Смотреть</a>
                <div className={s.backGround}></div>
            </div>
            <div className={s.descriptionBlock}>
                <span className={s.title}>{props.title}</span>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;