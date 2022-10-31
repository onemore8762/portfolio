import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerContainer} ${sContainer.container}`}>
                <h3 className={s.footerText}>Денис Чуркин</h3>
                <div className={s.iconContainer}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3 className={s.footerText}>2022 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;