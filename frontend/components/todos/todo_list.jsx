import React from 'react'
import TodoListItem from './todo_list_item'
import TodoDetailViewContainer from '../todo_list/todo_detail_view';

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(todo){
        let newTodo = todo;
        newTodo.done = newTodo.done ? false : true;
        this.props.receiveTodo(newTodo)
    }

    render() {
        return (<div>
            <h2>Todo List!</h2>
            <ul>
                {this.props.todos.map((todo, i) => {
                    // return <TodoListItem todo={todo} key={i} removeTodo={this.props.removeTodo} toggleDone={this.toggleDone}/>
                    return <TodoDetailViewContainer todo={todo} toggleDone={this.toggleDone}/>
                })}
            </ul>
        </div>)
    }
}
export default TodoList;

// import React from 'react';
// import Item from 'components/list/item';

// const List = ({ items, resetItems }) => {
// 	const listItems = items.map((item, idx) => (
// 		<Item key={idx} item={item} />
// 	);

// 	return (
// 		<div className="list">
// 			<h1 onClick={resetItems}>
// 				Click to Reset
// 			</h1>
// 			<ul className='list-items'>
// 				{listItems}
// 			</ul>
// 		</div>
// 	);
// };

// export default List;