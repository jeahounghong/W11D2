import React from 'react'

class TodoListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log("HII")
        console.log(this.props)
        return (
        <div className="todo-list-item">
            <h4 onClick={this.props.toggleView}>{this.props.todo.title}</h4>
            <p>Done: {this.props.todo.done ? "Done" : "Not Done"} 
            <button onClick={()=>(this.props.toggleDone(this.props.todo))}>Toggle</button></p>
            <input type="hidden" value="false" />
            {/* <p>{this.props.todo.body}</p>
            <button onClick={()=>{props.removeTodo(props.todo)}}>Remove Todo</button> */}
        </div>
        )
    }
}

export default TodoListItem;