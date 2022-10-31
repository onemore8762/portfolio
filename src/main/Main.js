import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I'm Denis Churkin</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
};

export default Main;