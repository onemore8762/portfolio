import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import reactIconImg from '../assets/icon/react.svg'
import htmlIconImg from '../assets/icon/html.svg'
import gitIconImg from '../assets/icon/git.svg'
import javascriptIconImg from '../assets/icon/javascript.svg'
import reduxIconImg from '../assets/icon/redux.svg'
import sassIconImg from '../assets/icon/sass.svg'
import cssIconImg from '../assets/icon/css.svg'
import typeScriptIconImg from '../assets/icon/typescript.svg'
import formikIconImg from '../assets/icon/formik.svg'
import Fade from 'react-reveal/Fade';

const Skills = () => {

    const skills = [
        {icon: reactIconImg, title: 'React', text: ''},
        {icon: reduxIconImg, title: 'Redux', text: ''},
        {icon: javascriptIconImg, title: 'JavaScript', text: ''},
        {icon: typeScriptIconImg, title: 'TypeScript', text: ''},
        {icon: htmlIconImg, title: 'Html', text: ''},
        {icon: cssIconImg, title: 'Css', text: ''},
        {icon: gitIconImg, title: 'Git', text: ''},
        {icon: sassIconImg, title: 'Sass', text: ''},
        {icon: formikIconImg, title: 'Formik', text: ''}
    ]

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Fade top cascade>
                    {skills.map(el => {
                        const reactIcon = {
                            backgroundImage: `url(${el.icon})`
                        }
                        return <Skill style={reactIcon} title={el.title} description={el.text}/>
                    })}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;
