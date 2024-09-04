import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeComponent: React.FunctionComponent = () => {
    const [text] = useTypewriter({
        words : ['Software Engineer !!!', 'MERN Stack Developer', 'Chess Enthusiast'],
        loop  : true
    });
    return (
        <div className="typeWritter">
            <span>{text}</span>
            <Cursor cursorColor='#ffc107' />
        </div>
    );
}

export default TypeComponent;