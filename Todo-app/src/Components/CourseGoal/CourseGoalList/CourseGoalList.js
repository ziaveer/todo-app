import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
const CourseGoalList = (props) => {
  
  const deleteHandler = (dat) => {
    props.onDeleteHandle(dat);
  
  };
  const editHandler = (editing) => {
  
    props.onEditHandler(editing);
  };
  return (
    <ul className="goal-list">
      {props.goal.length === 0 && <p>No Task </p>}
      {props.goal &&
        props.goal.map((item) => (
          <CourseGoalItem
            key={item.id}
            id={item.id}
            onEdit={editHandler}
            onDelete={deleteHandler}
          >
            {item.text}
          </CourseGoalItem>
        ))}
    </ul>
  );
};
export default CourseGoalList;
