import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function ToDoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Read react",
      completed: false,
    },
    {
      id: 2,
      task: "Read JS",
      completed: true,
    },
    {
      id: 1,
      task: "Read SQL",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS with HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <ToDoForm />
      <ToDoList todos={todos} />
    </Paper>
  );
}

export default ToDoApp;
