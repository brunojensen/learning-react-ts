import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { memo, useState } from 'react';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export const TodoList = memo(() => {
  let [todos, setTodos] = useState<Todo[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleToggle = (item: Todo) => () => {
    todos = todos.map((i: Todo) => {
      if (i.id === item.id) i.checked = !item.checked;
      return i;
    });
    setTodos(todos);
  };

  const changeUserInput = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const addTodoItem = (e: any) => {
    e.preventDefault();
    if (!userInput) return;
    todos.push({ id: todos.length + 1, text: userInput, checked: false });
    setUserInput('');
  };

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Todo
      </Typography>
      <Stack
        component="form"
        onSubmit={addTodoItem}
        noValidate
        autoComplete="off"
        spacing={2}
        sx={{ mb: 1 }}
      >
        <TextField
          value={userInput}
          onChange={changeUserInput}
          required
          id="outlined-required"
          label="TODO"
          helperText="Press <Enter> to add"
        />
      </Stack>
      <List>
        {todos.map((item: Todo) => {
          const labelId = `checkbox-list-label-${item.id}`;

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle({ ...item })}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={item.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
});
