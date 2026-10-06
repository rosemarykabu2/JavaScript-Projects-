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
let highestScore = 0;
let topstudent;

for (let student of students) {
  if (student.score >= 80) {
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: A\n`);
  } else if (student.score >= 70) {
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: B\n`);
  } else if (student.score >= 60) {
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: C\n`);
  } else if (student.score >= 50) {
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: D\n`);
  } else {
    console.log(`Name: ${student.name}\nAge: ${student.age}\nScore: ${student.score}\nGrade: F\n`);
  }

  total += student.score;

  if (student.score > highestScore) {
  highestScore =  student.score; 
  topstudent = student
  }
   console.log(`Highest Scorer: ${topstudent.name}, Highest Score:${highestScore}`);
}
let averageScore = total / students.length;

console.log(`Class Average: ${averageScore.toFixed(2)}`);

/*
HIGHEST SCORE — WHAT I LEARNED

1. We need to compare each student's score with the highest score
   we have found so far.

   if (student.score > highestScore)

   This is the COMPARISON.
   It asks: "Is this student's score higher than my current highest score?"

2. highestScore is created BEFORE the loop:

   let highestScore = 0;

   This allows the loop to access and change the same variable.

3. If the comparison is true, we UPDATE the existing highestScore:

   highestScore = student.score;

   This does NOT create a new variable.
   It replaces the old value with the student's score.

   Example:
   highestScore = 0
   John → 85 > 0 → highestScore becomes 85
   Fati → 67 > 85 → false → stays 85
   Kojo → 48 > 85 → false → stays 85

4. We should not print the final "Top Student" result inside the if.
   The loop is still searching, so we do not know the final top student yet.

   The loop should:
   COMPARE → UPDATE → CONTINUE SEARCHING

   After the loop finishes, we can print the final result.

5. Printing inside the if is not necessarily an error.
   It can print a student who is currently the highest at that moment.
   But it may print more than one student as the loop continues.

   Therefore:
   - INSIDE LOOP/IF → find and update the current best
   - AFTER LOOP → print the final best result

6. We also need another variable, such as topStudent,
   to remember WHICH student owns the highest score.

   highestScore → remembers the highest number
   topStudent   → remembers the student who owns that number
*/