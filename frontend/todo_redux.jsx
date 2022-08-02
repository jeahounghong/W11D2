import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions'


document.addEventListener("DOMContentLoaded", ()=>{

    let root = document.getElementById("root");
    const store = configureStore();
    window.store = store;

    const newTodos = [
        { 
          id: 1, 
          title: 'Learn Redux', 
          body: 'It is fundamental', 
          done: false 
        }, 
        { 
          id: 2, 
          title: 'Learn Redux', 
          body: 'It is fundamental', 
          done: false 
        }, 
        // ...etc
      ];
      const newSteps = [
        { 
          id: 1, 
          title: 'Dispatch actions', 
          done: false, 
          todo_id: 1 
        }, 
        { 
          id: 2, 
          title: 'Dispatch actions', 
          done: false, 
          todo_id: 1 
        }, 
      ];
      store.dispatch(receiveTodos(newTodos));
      store.dispatch(receiveSteps(newSteps));
      store.getState(); // should return only the new todos and steps
      
      store.dispatch(receiveTodo({ id: 3, title: "New Todo" /* ...etc */ }));
      store.dispatch(receiveStep({ id: 3, title: "New Step" /* ...etc */ }));
      store.getState(); // should include the newly added todo and step
      
      store.dispatch(receiveTodo({ id: 3, title: "Newer Todo" /* ...etc */ }));
      store.dispatch(receiveStep({ id: 3, title: "Newer Step" /* ...etc */ }));
      store.getState(); // should update the previously added todo and step
      
      store.dispatch(removeTodo({ id: 3, title: "Newer Todo" /* ...etc */ }));
      store.dispatch(removeStep({ id: 3, title: "Newer Step" /* ...etc */ }));
      store.getState(); // should not include the previously added todo
    console.log(store.getState());

    ReactDOM.render(<h1>Working</h1>,root);
})