

import {useState} from 'react';



function CounterApp() {

  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h2>Counter App - useState example</h2>
      
      <button className="counterBtn decrement" onClick={() => setCount(count-1 < 0 ? 0 : count-1)}>-</button>
      <span>{count}</span>
      <button className="counterBtn increment" onClick={() => setCount(count+1)}>+</button>
    </div>
  );
}

export default CounterApp;
