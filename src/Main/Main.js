import React, {useCallback} from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import myPhotoImg from '../assets/image/myPhoto.jpg'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
const particleOptions = {
    fullScreen: false,
    background: {
        color: {
            value: ''
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: ''
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 40
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 2 }
        }
    },
    detectRetina: true
}

const Main = () => {
    const myPhoto ={
        backgroundImage: `url(${myPhotoImg})`
    }
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div id={"home"} className={s.mainBlock}>
            <Particles className={s.particles} init={particlesInit} options={particleOptions}/>
            <Fade>
            <div className={s.mainContainer + ' '+sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I'm
                        <span> Denis Churkin</span>
                    </h1>
                    {/*<p>FrontEnd Developer</p>*/}
                    <ReactTypingEffect className={s.typingText} typingDelay={1000} text={"FrontEnd Developer."}>

                    </ReactTypingEffect>

                </div>
                <div className={s.imgContainer}>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={s.photo} style={myPhoto}></div>
                    </Tilt>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Main;
