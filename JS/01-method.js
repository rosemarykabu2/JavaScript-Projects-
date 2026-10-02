
    let fruits = ['mango','Banana'];
    fruits.push('Apple')
    fruits.pop('Banana')
    fruits.unshift('Orange')
    fruits.shift('mango')
    console.log(fruits)
    ////

    let students = ['Ama','Kojo']
    students.push('Rose')
    students.unshift('Yaw')
    students.pop()
    console.log(students)
    ////

    let students1 = ['Rose','Ama','Kojo'];
    console.log(students1.includes('Ama'));
    console.log(students1.indexOf('Kojo'))
    /////

    let courses =['JavaScript','Database','Python','Networking']
    console.log(courses.includes('Python'))
    console.log(courses.indexOf('Python'))
    ////

    let courses2 =['JavaScript','Database','Python','Networking']
    console.log(courses2.length) 
    /////

    let courses3 =['JavaScript','Database','Python','Networking']
    let selectedCourse = courses3.slice(1,3);
    console.log(selectedCourse);
    ///


    let fruits2 = ['Apple','Mango','Banana','Orange'];
    let selectedFruits = fruits2.slice(1,3);
    console.log(selectedFruits);
    ////

     let fruits3 = ['Apple','Mango','Banana','Orange'];
     fruits3 .splice(1,1);
     console.log(fruits3)
     ////

     let students3 = ['Rose','Ama','Kojo','Yaw'];
     students3.splice(2,1);
     console.log(students3);

