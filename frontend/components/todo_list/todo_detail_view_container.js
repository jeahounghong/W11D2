import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: todo => dispatch(removeTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView);

