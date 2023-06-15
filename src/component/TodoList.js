import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggletodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onclick={() => toggletodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggletodo: PropTypes.func.isRequired,
};

export default TodoList;
