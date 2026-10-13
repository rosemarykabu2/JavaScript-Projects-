let applications = [
  {
    company:'Google',
    position:'Frontend Developer',
    status:'interviewed'
  },
  {
    company:'MTN',
    position:'Software Intern',
    status:'rejected'
  },
  {
    company:'Hubtel',
    position:'Backend Intern',
    status:'pending'
  },
  {
    comapany:'Microsoft',
    position:'Frontend Intern',
    status:'interviewed'
  },
  {
    comapany:'Vodafone',
    position:'Software Intern',
    status: 'pending'
  }
]

let interviewed =
applications.filter(function(application)
{
  return application.status === 'interviewed';
}
);

for(let application of interviewed){
  console.log(application)
}

