import React, { useState } from "react";

const AddTodo = (props)=> {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleDescChange = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  }
  const add = (e) => {
    e.preventDefault();
    if (name === "" || desc === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addTodosHandler({name: name, desc: desc});
    setDesc('');
    setName('');
    props.history.push("/");
  };
  
    return (
      <div className="ui main">
        <h2>Add Task</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Task Name...</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={desc}
              onChange={handleDescChange}
            />
          </div>
          <button className="ui button blue">Add Task</button>
        </form>
      </div>
    );
  
}

export default AddTodo;
