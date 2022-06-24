import React from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  console.log(props);

  const deleteTodoHandler = (id) => {
    props.getTodosId(id);
  };

  const renderTodoList = props.todos.map((todo) => {
    return (
      <TodoCard
        todo={todo}
        clickHander={deleteTodoHandler}
        key={todo.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Todo List
        <Link to="/add">
          <button className="ui button blue right">Add Tasks</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderTodoList}</div>
    </div>
  );
};

export default TodoList;
