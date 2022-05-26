import React from 'react';
import counter from './store/counter';
import { observer } from "mobx-react-lite" // Or "mobx-react".

const Counter = observer( () => {
    return (
        <div>
            <div style={{width: '200px', height: '100px', margin: '50px', border: '1px solid black'}}>
            <div>{counter.total}</div>
                <div style={{display:'flex', marginTop:'20px', justifyContent: 'space-around'}}>
                    <button style={{width: '50px'}} onClick={() => counter.increment()}>+</button>
                    <button style={{width: '50px'}} onClick={() => counter.decrement()}>-</button>
                </div>
            </div>
        </div>
    );
})

export default Counter;