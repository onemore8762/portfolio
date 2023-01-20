import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title/Title";

const Contacts = () => {
    return (
        <div id={"contacts"} className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <Title title={'Contact'}></Title>
                <form className={s.contactsForm}>
                    <input className={s.input} name={'name'} placeholder={'Name'} required/>
                    <input className={s.input} name={'email'} placeholder={'E-mail'} required/>
                    <textarea className={s.textarea} placeholder={'Your message'}/>
                </form>
                <button className={s.btn} type='submit'>Send message</button>
            </div>
        </div>
    );
};

export default Contacts;
