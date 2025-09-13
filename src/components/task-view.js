export const Taskview = ({ tasks, onClearAll,singleDelete,onEdit }) => {


  return (
    <>
      <div
        className="title"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          Todo
          <span className="count"> {tasks.length} </span>
        </div>

        <button className="clearAll" onClick={onClearAll}>
          Clear All
        </button>
      </div>

      <ul>
    
        {tasks.length === 0 ? (
          <li>No tasks yet</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
             <p>  {task} </p>
            <span className="edit"  onClick={() => onEdit(task, index)}>✎</span>
            <span className="delete" onClick={singleDelete}>x</span>
            </li>
            
          ))
        )}
      </ul>
    </>
  );
};
