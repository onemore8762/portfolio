import React, {useState} from 'react';
import s from './BurgerNav.module.scss'

import {Link} from 'react-scroll'

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.nav}>
          <div className={menuIsOpen?`${s.items} ${s.show}`:`${s.items}` }>
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
            <div className={s.btn} onClick={onBurgerBtnClick}>

            </div>
        </div>
    );
};


