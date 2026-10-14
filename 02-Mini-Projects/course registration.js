let courses = [
  {
    name: 'Databse Management',
    credits:3,
    registered: true
  },

    {
    name: 'Web Development',
    credits:3,
    registered: false
  },

    {
    name: 'Java Programming',
    credits:3,
    registered: true
  },

    {
    name: 'Information Security',
    credits:3,
    registered: false
  }
];

let registeredcourses = courses.filter(function(course)
{
  return course.registered === true
}
);

let totalRegistered = registeredcourses.reduce(function(total,course)
{
  return total + course.credits
},0
);
console.log(totalRegistered)