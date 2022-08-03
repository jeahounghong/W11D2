import React from 'react';
import TodoListItem from '../todos/todo_list_item';

class TodoDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail: false
        }

        this.toggleView = this.toggleView.bind(this);
        this.detailedView = this.detailedView.bind(this);
        this.titleView = this.titleView.bind(this);
    }

    toggleView(e){
        e.preventDefault();
        console.log("HIIII")
        this.setState({detail: !this.state.detail})
    }

    detailedView() {
        return (
            <div>
                <TodoListItem todo={this.props.todo} toggleView={this.toggleView} toggleDone={this.props.toggleDone}/>
                <p>{this.props.todo.body}</p>
                <button onClick={()=>{this.props.removeTodo(this.props.todo)}}>Remove Todo</button>
            </div>
        )
    }

    titleView() {
        return (
            <div>
                <TodoListItem todo={this.props.todo} toggleView={this.toggleView} toggleDone={this.props.toggleDone}/>
            </div>
        )
    }

    render() {
        if (this.state.detail) {
            return this.detailedView();
        } else {
            return this.titleView();
        }
    }
}

export default TodoDetailView;