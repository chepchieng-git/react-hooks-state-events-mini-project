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
import React from "react";

function Task({task, onDeleteTask}) {
  function handleDeleteClick() {
    onDeleteTask(task.id);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text"> {task.text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
