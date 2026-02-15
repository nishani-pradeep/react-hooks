
import {useReducer} from "react";

const initialState = {
    count: 0,
    error: null
};    

const reducer = (state, action) => {
    const {type} = action;
        switch(type){
            case 'increment':
                
            return { ...state, count: state.count+1 >5 ? 5: state.count+1, error: state.count +1 > 5 ? "Count is out of limit": null};
            case 'decrement':
                return { ...state, count: state.count-1 < 0 ? 0 : state.count-1, error: state.count -1 < 0 ? "Count cannot be negative": null};
        default : 
        return state;
            }
}

function CounterAppReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="App">
            <h2>Counter App - useReducer example</h2>
            <button className="counterBtn decrement" onClick={() => dispatch({type: 'decrement'})}>-</button>
            <span>{state.count}</span>
            <button className="counterBtn increment" onClick={() => dispatch({type: 'increment'})}>+</button>

            {state.error && <p className="error">{state.error}</p>}
        </div>
    )
}

export default CounterAppReducer;