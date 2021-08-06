import { useEffect, useState } from "react";
import "./App.css";
import CourseInput from "./Components/CourseGoal/CourseInput/CourseInput";
import CourseGoalList from "./Components/CourseGoal/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [isToggle, setToggle] = useState(true);
  const [editId, setEditId] = useState(null);
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("item"));
    if (todos) {
      setCourseGoals(todos);
    }
  }, []);

  useEffect(() => {
    console.log(courseGoals);
    localStorage.setItem("item", JSON.stringify(courseGoals));
  }, [courseGoals]);

  const addGoalHandler = (enteredText) => {
    const goalData = {
      ...enteredText,
    };

    setCourseGoals((prevgoal) => [goalData, ...prevgoal]);
    setToggle(true);
  };

  const deleteHandler = (outData) => {
    setCourseGoals(courseGoals.filter((item) => item.id !== outData));
  };
  const editHandler = (editId) => {
    
    // console.log(courseGoals);
    const editTask = courseGoals.find((goal) => goal.id === editId);
    console.log(editTask);
    setEditId(editTask.id);
    

    setEditValue(editTask.text);
    setToggle(false);
  };
  const onChangeHandler = (e) => {
    setEditValue(e.target.value);
  };
// console.log(editRef);
  const updateEditHadler = (e) => {
    e.preventDefault();
    
    // console.log(editRef.current);
    const editedTodo = courseGoals.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue};
      }
      return todo;
    });
    // console.log(courseGoals);
    // console.log(editValue);
    setCourseGoals(editedTodo);
    setToggle(true);
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {isToggle ? (
          <CourseGoalList
            goal={courseGoals}
            onEditHandler={editHandler}
            onDeleteHandle={deleteHandler}
          />
        ) : (
          <form onSubmit={updateEditHadler}>
            <div className='form-control'>
              <label>Editing Todo</label>
              <input
              autoFocus={true}
                
                type="text"
                placeholder="editing"
                value={editValue}
                onChange={onChangeHandler}
              />
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default App;
