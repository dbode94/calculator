import { createContext, useState} from "react";

export const CalculationContex = createContext({
    currentCalculation: '0',
    setCurrentCalculation: () => '0',
    isResult: true,
    setIsResult: () => true
});

export const CalculationProvider = ({children}) =>{
    const [currentCalculation, setCurrentCalculation] = useState('0');
    const [isResult, setIsResult] = useState(true);
    const value = {currentCalculation,setCurrentCalculation, isResult, setIsResult};
    return <CalculationContex.Provider value={value}>{children}</CalculationContex.Provider>
}