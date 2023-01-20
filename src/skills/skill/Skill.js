import React from 'react';
import s from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.iconContainer}>
                <div className={s.icon} style={props.style}>
                </div>
                <span className={s.text}>
                    <h3>{props.title}</h3>
                </span>
            </div>
            {/*<div className={s.description}>*/}
            {/*    {props.description}*/}
            {/*</div>*/}
        </div>
    );
};

export default Skill;
