import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: todo => dispatch(receiveTodo(todo)),
        removeTodo: todo => dispatch(removeTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// import { connect } from 'react-redux';
// import { resetItems } from '../../actions/items' // action creator
// import List from '../list'; // presentational component to connect

// const mapStateToProps = (state) => ({ // map slice of state to props object
// 	items: state.items
// });

// const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
// 	resetItems: () => dispatch(resetItems());
// });

// const ListContainer = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(List);

// export default ListContainer;