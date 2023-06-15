import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";
import TodoList from "../component/TodoList";
import { toggletodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error("Unknown Filter:  " + filter)
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggletodo(id))
})

export default connect(mapDispatchToProps, mapStateToProps)(TodoList)
