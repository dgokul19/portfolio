import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Static Images
import landingPage from '../assets/landing_bg.jpg';
import aboutPage from '../assets/about_bg.jpg';


export const useBackGroundImage = () => {
    const { pathname } = useLocation();
    
    const [image, setImage] = useState(landingPage);

    useEffect(() => {
        switch(pathname){
            case '/about':
                setImage(aboutPage);
                break;
        }

    },[pathname])

    return { image }
}