import { createContext, useState} from "react";

export const OrientationContext = createContext({
    portrait: 'true',
    setPortrait: () => 'true'
});

export const OrientationProvider = ({children}) =>{
    const [portrait, setPortrait] = useState(() =>{
        if(window.matchMedia('(min-width: 768px)').matches) return true;
        else return window.matchMedia('(Orientation : portrait)').matches
    });
    const value = {portrait,setPortrait};
    return <OrientationContext.Provider value={value}>{children}</OrientationContext.Provider>
}