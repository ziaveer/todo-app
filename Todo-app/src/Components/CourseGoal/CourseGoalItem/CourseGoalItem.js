import React from "react";
import "./CourseGoalItem.css";
const CourseGoalItem = (props) => {
//   console.log(props);
  const deleteHandler = () => {
    
    props.onDelete(props.id);
  };
  const editHandler = ()=>{ 
    props.onEdit(props.id);
  };
  return (
    <div className='head'>
      <li className="goal-item" >
        {props.children}
        
      </li>
      <span onClick={editHandler}>Edit</span>
      <span onClick={deleteHandler}>delete</span>
      
    </div>
  );
};
export default CourseGoalItem;
