let students = [
  {
    name: 'John',
    age: 21,
    score: 85
  },
  {
    name: 'Fati',
    age: 20,
    score: 67
  },
  {
    name: 'Kojo',
    age: 67,
    score: 48
  }
];
let total = 0;

for(let student of students){
  if (student.score >=80){
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: A\n`)
       
  }else if (student.score >=70){
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: B\n`)
       
    }else if (student.score >=60){
      console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: C\n`)

    }else if (student.score >= 50){
      console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: D\n`)   

    }else{
      console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: F` )  
    }

    total = student.score ++ student.score
} 

let averageScore = total / students.length
console.log(`Class Average: ${averageScore}`);