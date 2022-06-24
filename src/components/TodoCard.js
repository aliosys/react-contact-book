import React from "react";

const ContactCard = (props) => {
  console.log(props)
  const { id, name, desc } = props.todo;
  return (
    <div className="item">
      <div className="content">

          <h2 className="header">{name}</h2>
          <p>{desc}</p>
    
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
