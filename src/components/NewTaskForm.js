import React, {useState} from "react";

// function NewTaskForm() {

//   function handleSubmit(e) {
//     e.preventDefault()
//     const newTask = {
//       text: Task,
//       category: category,
//     }
//     onTaskFormSubmit(newTask)
//     setTask("")
//     setCategory("code")
//   }

//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" onSubmit={handleSubmit}/>
//     </form>
//   );
// }

// export default NewTaskForm;

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: task,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setTask("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
