import React from 'react';
import s from './Nav.module.scss'

import {Link} from 'react-scroll'

const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}>
                Home
            </Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}>
                Skills
            </Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}>
                Projects
            </Link>
            <Link activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}>
                Contacts
            </Link>
        </div>
    );
};

export default Nav;

