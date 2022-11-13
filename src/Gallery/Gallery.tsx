<<<<<<< HEAD
import React, { FunctionComponent, useState, useEffect, useRef }  from 'react';
import images from "./files.json"
import "./Gallery.scss"
import "../index.scss"
import { WhiteButton } from '../Components/WhiteButton';
const setProp = (ref, prop, value) => ref.current.style.setProperty(prop, value);



const Photo = (props) => {
    const imageRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = useState(false)

    const setImageSize = () => {
        console.log("setImagesize")
        if(containerRef.current && imageRef.current){
            setProp(containerRef, "--containerWidth", containerRef.current.clientWidth);
            setProp(containerRef, "--width", imageRef.current.width)
            setProp(containerRef, "--height", imageRef.current.clientHeight)
        }
    };

    const mouseEnter = () => {
        setHovered(true)
    }

    const mouseLeave = () => {
        setHovered(false)
        console.log("mouser leave")
    }

    useEffect(() => {
        window.addEventListener('resize', setImageSize)
    }, [])

    return (
        <div ref={containerRef} className="imageContainer" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img ref={imageRef} className="image" alt="" src={"/images/" + images[props.index]} onLoad={setImageSize}  />
            <div className={`imageData ${hovered ? "visible" : "unvisible"}`}>
                <div className="purchase" />
            </div>
        </div>
    )
}

export const Gallery:FunctionComponent = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div id="galleryPage" className={`verticalFlex glitch`}>
            {/* <div id="catWrapper" className="horizontalFlex">
                <WhiteButton text='Animation'/>
                <WhiteButton text='Illustration'/>
                <WhiteButton text='3D'/>
            </div> */}
            <hr id="gallery-divider" />
            <div id="images-wrapper">
                {
                    images.map((photo, index) => {
                        return (
                            <Photo index={index} focus={focus} setFocus={setFocus} />
                        )
                    })
                }
            </div>
        </div>
=======
import React, { FunctionComponent }  from 'react';

export const Gallery:FunctionComponent = () => {
    return(
        <></>
>>>>>>> 44ce0450cacafcc2fb1e72f1312ce656ea40bf60
    )
}