import React, { FunctionComponent }  from 'react';
import { ActionButton } from '../../Components/ActionButton';
import "./GalleryPreview.scss"

export const GalleryPreview:FunctionComponent = () => {
    return(
        <div id="galleryPreview-wrapper" className='home-wrapper'>
            <h2>I love creating new stuff</h2>
            <div id="galleryPreview-container">

            </div>
            <ActionButton text="browse more"/>
        </div>
    )
}