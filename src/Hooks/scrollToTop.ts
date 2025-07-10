import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function useScrollToTop() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
        
        console.log(`Scrolling to top for ${location.pathname}`);
        
    }
    ,[location.pathname]);
    
}