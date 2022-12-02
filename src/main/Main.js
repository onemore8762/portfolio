import React from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import myPhotoImg from '../assets/image/myPhoto.jpg'

const Main = () => {
    const myPhoto ={
        backgroundImage: `url(${myPhotoImg})`
    }


    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer + ' '+sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I'm <span> Denis Churkin</span>
                    </h1>
                    <p>FrontEnd Developer</p>

                </div>
                <div className={s.imgContainer}>
                    <div className={s.photo} style={myPhoto}>
                    </div>
                    <div className={s.borderPhoto}> </div>
                </div>
            </div>
        </div>
    );
};

export default Main;