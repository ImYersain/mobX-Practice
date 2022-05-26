import { makeAutoObservable } from "mobx"

class Todo{
    todos = [
        {id:1, title: 'Go to shop', completed: false},
        {id:2, title: 'to learn mobx', completed: true},
        {id:3, title: 'practice with typescript', completed: true}
    ]
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo){
        this.todos.push(todo)
    }
    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeTodo(todo){
        todo.completed = !todo.completed
    }
    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos?_limits=10')
            .then(response => response.json())
            .then(json => 
                this.todos = [...this.todos, ...json])
    }
    addNewTodo(todoText){
        const newTodo = {id:4, title:todoText, checked:false}
        this.todos.push(newTodo)
    }
   
}

export default new Todo()