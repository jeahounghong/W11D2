import {combineReducers} from 'redux';
import todosReducer from './todos_reducers';
import stepsReducer from './steps_reducer';



const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer
});


export default rootReducer