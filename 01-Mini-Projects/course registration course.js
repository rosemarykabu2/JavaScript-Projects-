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
/*
let registererdCourses = courses.filter(function(course)
{
  return course.registered === true
});

for(let course of registererdCourses){
  console.log(course.name)
} */
  let total = 0;
  let registererdCourses = courses.filter(function(course)
{

  return course.registered === true;
 
});

for(let course of registererdCourses){
  console.log(course.name)
}

let hasRegisteredCourse = courses.every(function(course)
{
  return course.registered === true
}
);

console.log(hasRegisteredCourse)