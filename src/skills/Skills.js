import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Js'} description={'Unreal text...Unreal text...Unreal text...Unreal text...'}/>
                    <Skill title={'Css'} description={'Unreal text...Unreal text...Unreal text...Unreal text...'}/>
                    <Skill title={'React'} description={'Unreal text...Unreal text...Unreal text...Unreal text...'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;