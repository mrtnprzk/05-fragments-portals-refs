import React, { useState, useRef, Fragment } from "react";
import CardWrap from "../UI/CardWrap";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    function addUserHandler(e) {
      e.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredAge = ageInputRef.current.value;

      if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) { //trim removes all white space
        setError({
          title: "Invalid Input",
          text: "Non-Empty Values",
        });
        return;
      } else if (+enteredAge < 1) { //that + make it from string to number
        setError({
          title: "Invalid Age",
          text: "Type age more then 0",
        });
        return;
      }

      props.onAdd(enteredName, enteredAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }

    function errorHandler(){
      setError(null);
    };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          text={error.text}
          onConfirm={errorHandler}
        />
      )}
      <CardWrap className={classes.input}>
        <form onSubmit={addUserHandler} className="form">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" name="age" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </CardWrap>
    </Fragment>
  );
}

export default AddUser