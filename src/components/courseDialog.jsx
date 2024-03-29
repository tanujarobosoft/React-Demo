import { useDispatch } from "react-redux";
import "../todo.css";
import {  valueEdit } from "../redux/reducers/conditions";
import { useEffect, useState } from "react";

const MyDialog = ({ open, onClose, data }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [TotalHrs, setTotalHrs] = useState("");
  const [status, setstatus] = useState("");
  useEffect(() => {
    if (data) {
      console.log(data);
      setTaskName(data.taskName || "");
      setTotalHrs(data.TotalHrs || "");
      setstatus(data.status || "");
    }
  }, [data]);
 
  return (
    <dialog open={open} onClose={onClose}>
      <div className="arrangefields">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Number of hrs"
          value={TotalHrs}
          onChange={(e) => {
            setTotalHrs(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => {
            setstatus(e.target.value);
          }}
        />
       <div className="flex gap-3">
       <button className="button-styling"
          onClick={() => {
            const updatedValue = {
              taskName: taskName,
              TotalHrs: TotalHrs,
              status: status,
              index: data.index ?? data ,
            };
              dispatch(valueEdit(updatedValue)) ;
        
            onClose();
          }}
        >
          Save
        </button>
        <button className="button-styling" onClick={onClose}>Close</button>
       </div>
      </div>
    </dialog>
  );
};

export default MyDialog;
