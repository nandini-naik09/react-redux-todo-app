import React from "react";
import { connect } from "react-redux";
import {addTodo} from "../actions";

const AddToDo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node=>input=node} />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  )
}

export default connect()(AddToDo);
