import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const goal = {
      text: enteredValue,
      id: Math.random().toString(),
    };
    props.onAddGoal(goal);

    setEnteredValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Todo</label>
        <input
          autoFocus={true}
          type="text"
          onChange={onChangeHandler}
          value={enteredValue}
        ></input>
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};
export default CourseInput;
