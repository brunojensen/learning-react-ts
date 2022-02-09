export enum TicketStatus {
  TODO,
  IN_PROGRESS,
  DONE,
}

export type Ticket = {
  id: number;
  title: string;
  text: string;
  status: TicketStatus;
};
