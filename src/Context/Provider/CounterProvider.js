import { Counter } from "../../MobX/Counter";
import { CounterContext } from "../CounterContext/CounterContext";

export const CounterProvider = ({children}) => {

    // Instantiate a new counter
    const counter= new Counter();
    
    return (
        <CounterContext.Provider value={{counter}}>
            {children}
        </CounterContext.Provider>
    )
}