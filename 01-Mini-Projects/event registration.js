let attendees = [
  {
    name : 'Ama',
    paid : true
  },
  {
    name : 'Kojo',
    paid : false
  },
  {
    name : 'Esi',
    paid : true
  },
  {
    name : 'Yaw',
    paid : false
  }
]

let paidAttendees = 
attendees.filter(function(attendee)
{
  return attendee.paid === true;
}
);

for(let attendee of paidAttendees){
  console.log(attendee.name)
}