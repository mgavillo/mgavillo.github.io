import React, { FunctionComponent }  from 'react';
import { ActionButton } from '../../Components/ActionButton';
import "./Contact.scss";

export const Contact:FunctionComponent = () => {
    return(
        <div id="contact-wrapper" className='home-wrapper'>
           <ActionButton text="contact"/>
        </div>
    )
}