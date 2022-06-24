import React, { useState } from "react";

const AddContact = (props)=> {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler({name: name, email: email});
    setEmail('');
    setName('');
    props.history.push("/");
  };
  
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  
}

export default AddContact;
