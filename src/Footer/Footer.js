import React from 'react';
import s from './Footer.module.scss'
import vkImg from '../assets/icon/vk.svg'
import telegramImg from '../assets/icon/telegram.svg'
import githubImg from '../assets/icon/github.svg'

const Footer = () => {
    const icons = [
        {icon: vkImg, url: 'https://vk.com/id_139'},
        {icon: telegramImg, url: 'https://t.me/den4ik_qq'},
        {icon: githubImg, url: 'https://github.com/onemore8762'},
    ]
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerContainer}`}>
                <a href='' className={s.footerLogo}>
                    <h3>Denis Churkin</h3>
                </a>

                <div className={s.iconContainer}>
                    {icons.map(el => {
                        const style = {
                            backgroundImage: `url(${el.icon})`
                        }
                        return <a href={el.url} target='_black'>
                            <div className={s.icon} style={style}></div>
                        </a>
                    })}
                </div>
                <h3 className={s.footerText}>© 2022 churkin, All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;