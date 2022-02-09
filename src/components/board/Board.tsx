import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { BoardCard } from './BoardCard';
import { Ticket, TicketStatus } from './schema/Schema';

export const Board = () => {
  let [tickets, setTickets] = useState<Ticket[]>([]);
  const [userInput, setUserInput] = useState('');

  const changeUserInput = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const addTicketItem = (e: any) => {
    e.preventDefault();
    if (!userInput) return;
    tickets.push({
      id: tickets.length + 1,
      text: userInput,
      title: '',
      status: TicketStatus.TODO,
    });
    setUserInput('');
  };

  const changeTicketStatus = (t: Ticket) => () => {
    tickets = tickets.map((i) => {
      if (i.id === t.id) {
        if (i.status === TicketStatus.TODO) {
          i.status = TicketStatus.IN_PROGRESS;
        } else if (t.status === TicketStatus.IN_PROGRESS) {
          i.status = TicketStatus.DONE;
        }
      }
      return i;
    });
    setTickets(tickets);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Board
      </Typography>
      <Stack
        component="form"
        onSubmit={addTicketItem}
        noValidate
        autoComplete="off"
        spacing={2}
      >
        <TextField
          value={userInput}
          onChange={changeUserInput}
          required
          id="outlined-required"
          label="Ticket"
          helperText="Press <Enter> to add"
        />
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              TODO
            </Typography>
            {tickets
              .filter((t) => t.status === TicketStatus.TODO)
              .map((ticket) => {
                return (
                  <BoardCard
                    key={ticket.id}
                    ticket={ticket}
                    changeStatus={changeTicketStatus}
                  />
                );
              })}
          </Grid>
          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              IN PROGRESS
            </Typography>
            {tickets
              .filter((t) => t.status === TicketStatus.IN_PROGRESS)
              .map((ticket) => {
                return (
                  <BoardCard
                    key={ticket.id}
                    ticket={ticket}
                    changeStatus={changeTicketStatus}
                  />
                );
              })}
          </Grid>
          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              DONE
            </Typography>
            {tickets
              .filter((t) => t.status === TicketStatus.DONE)
              .map((ticket) => {
                return (
                  <BoardCard
                    key={ticket.id}
                    ticket={ticket}
                    changeStatus={changeTicketStatus}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
