import React from "react";
import { ListItemText, List, ListItem, Paper, Divider } from "@mui/material";
import Todo from "./Todo";

function ToDoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
