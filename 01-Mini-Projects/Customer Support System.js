let tickets = [
  {
    id : 101,
    customer : 'Ama',
    status : 'open'
  },

  {
    id : 102,
    customer : 'Kojo',
    status : 'closed'
  },

   {
    id : 103,
    customer : 'Esi',
    status : 'open'
  },

   {
    id : 104,
    customer : 'Yaw',
    status : 'pending'
  },

   {
    id : 105,
    customer : 'Abena',
    status : 'open'
  }
]

let openTickets =
tickets.filter(function(tickets)
{
  return tickets.status === 'open';
}
);

for (let ticket of openTickets){
  console.log(ticket.customer)
}