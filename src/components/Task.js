// import React, {useState} from "react";

// function Task() {
//   const [task, onDelete] = useState()
//   function handleClick() {
//     onDelete(task)
//   }
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       
//       <button className="delete" onClick={handleClick}>X</button>
//     </div>
//   );
// }

// export default Task;
import React, {useState} from "react";

function Task() {
  const [task, onDeleteTask] = useState("")
  function handleDeleteClick() {
    onDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text"> {task.text}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Task;
