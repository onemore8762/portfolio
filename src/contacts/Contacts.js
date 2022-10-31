import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <h3 className={s.header}>Контакты</h3>
                <form className={s.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <a href=''>Отправить</a>
            </div>
        </div>
    );
};

export default Contacts;