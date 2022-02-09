import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Ticket, TicketStatus } from './schema/Schema';

export const BoardCard = (props: any) => {
  const ticket: Ticket = props.ticket;
  const changeStatus = props.changeStatus;

  return (
    <Card key={ticket.id} sx={{ mb: 1 }}>
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'end' }}
        >
          TCKT-{ticket.id}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {ticket.text}
        </Typography>
      </CardContent>
      <CardActions>
        {ticket.status === TicketStatus.TODO ? (
          <Button size="small" onClick={changeStatus(ticket)}>
            MOVE TO PROGRESS
          </Button>
        ) : ticket.status === TicketStatus.IN_PROGRESS ? (
          <Button size="small" onClick={changeStatus(ticket)}>
            MOVE TO DONE
          </Button>
        ) : (
          <Typography variant="caption" color="text.disabled">
            DONE
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};
