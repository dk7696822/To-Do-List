import React from "react";
import useToggle from "./hooks/useToggle";
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTodoForm from "./EditTodoForm";
function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {" "}
            {task}{" "}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
