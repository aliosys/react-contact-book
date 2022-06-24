import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
//import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);

  const addTodosHandler = (todo) => {
    //console.log(todo);
    setTodos([...todos, { id: uuid(), ...todo }]);
  };

  const removeTodosHandler = (id) => {
    const newTodosList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodosList);
  };

  useEffect(() => {
    const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTodos) setTodos(retriveTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TodoList
                {...props}
                todos={todos}
                getTodosId={removeTodosHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTodo {...props} addTodosHandler={addTodosHandler} />
            )}
          />

          {/* <Route path="/contact/:id" component={ContactDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
