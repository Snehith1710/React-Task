import React, { useState } from "react";
import "./Task.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Button, Dialog } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

function Task({ task, index, completeTask, removeTask }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div style={{ display: "flex" }} className="task">
        <button onClick={() => completeTask(index)}>
          <Checkbox
            color="primary"
            onChange={handleChange}
            inputProps={{ "aria-label": "uncontrolled-checkbox" }}
          />
        </button>
        <div
          style={{ textDecoration: task.completed ? "line-through" : "" }}
          className="taskTitle">
          {task.title}
        </div>
      </div>
    </>
  );
}

function CreateTask({ addTask }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <>
      <Button onClick={handleClickOpen}>
        <Fab color="primary" size="small">
          <AddIcon />
        </Fab>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            className="input"
            value={value}
            placeholder="Add a task"
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </Dialog>
    </>
  );
}

function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      title: "Campus Build",
      completed: true,
    },
    {
      title: "Prasanth hotel",
      completed: true,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="todo-container">
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={index}
            />
          ))}
        </div>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </div>

      <div className="icon">
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}

export default TaskBoard;
