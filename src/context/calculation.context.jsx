import { createContext, useState} from "react";

export const CalculationContex = createContext({
    currentCalculation: '0',
    setCurrentCalculation: () => '0'
});

export const CalculationProvider = ({children}) =>{
    const [currentCalculation, setCurrentCalculation] = useState('0');
    const value = {currentCalculation,setCurrentCalculation};
    return <CalculationContex.Provider value={value}>{children}</CalculationContex.Provider>
}