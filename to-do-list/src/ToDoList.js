import React from "react";
import { ListItemText, List, ListItem, Paper, Divider } from "@mui/material";

function ToDoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
