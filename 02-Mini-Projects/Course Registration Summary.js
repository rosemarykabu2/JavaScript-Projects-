let courses = [
  {
    name : "Database Management",
    credits : 3,
    registered : true
  },

  {
    name : "Web Development",
    credits : 3,
    registered : false
  },

   {
    name : "Java Programming",
    credits : 3,
    registered : true
  },

   {
    name : "Information Security",
    credits : 3,
    registered : true
  },

   {
    name : "Networking",
    credits : 3,
    registered : false
  }
]

let registeredCourses = courses.filter(function(course)
{
  return course.registered === true
}
);

for (let course of registeredCourses){
  console.log(course.name)
}

let registeredCourse = registeredCourses.map(function(course)
{
  return course.name
}
);
for (let course of registeredCourse){
  console.log(registeredCourse)
}

let totalCredits = registeredCourse.reduce(function(total,course)
{
  return total + course.credits
},0
);
console.log(totalCredits)

let result = courses.find(function(course){
  return course.name === 'Java Programming'
});
console.log(result)

let result2 = courses.some(function(course)
{
  return course.credits > 3
}
);
console.log(result2)


let result3 = courses.every(function(course)
{
  return course.registered === true
}
);
console.log(result3)

let result4 = courses.sort(function(a,b)
{
  return b - a
}
);
console.log(result4)