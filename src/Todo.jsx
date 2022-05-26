import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import todo from './store/todos';

const Todo = observer(() => {
    const [value, setValue] = useState('');

    const changeHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>To load todos</button>
            <div>
                <h3>add own todo</h3>
                <input type="text" value={value} onChange={changeHandler}></input>
                <button onClick={() => todo.addNewTodo(value)}>add</button>
            </div> 
            {todo.todos.map(t => {
                return (
                    <div key={t.id} style={{width: '200px', height: '50px', margin: '50px', border: '1px solid black'}}>
                        <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t)} />
                        {t.title}
                        <button onClick={() => todo.removeTodo(t.id)}>x</button>
                    </div>
                )
            })}
        </div>
    );
}
)

export default Todo;