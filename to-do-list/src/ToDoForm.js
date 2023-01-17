import React from "react";
import useInputState from "./hooks/useInputState";
import {
  ListItemText,
  List,
  ListItem,
  Paper,
  Divider,
  TextField,
} from "@mui/material";

function ToDoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default ToDoForm;
