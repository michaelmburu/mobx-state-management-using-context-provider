import {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import { CounterContext } from './Context/CounterContext/CounterContext';


export const CounterButton = observer(() => {

    // Get counter from context
    const {counter} = useContext(CounterContext);
    const[incrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <p>You have clicked the button {counter.numberOfClicks} times</p>
            <label>Increment By</label>
            <input value={incrementBy} type="number" onChange={e => setIncrementBy(Number(e.target.value))}/>
            <button onClick={() => counter.increment(incrementBy)}>Increment</button>
        </>
    )

})