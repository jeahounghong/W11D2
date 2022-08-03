import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoFormContainer from './todo_list/todo_form_container';

const App = () => (
    <div> 
        <TodoListContainer/>
        <TodoFormContainer/>
        <div>End</div>
    </div>

)

export default App;

