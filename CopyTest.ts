let student = {
    name: "Georgi",//pass by value
    age: 15,//pass by value
    grades: [1, 2, 3, 4]//pass by reference
}

let student_2 = { ...student }; //shallow copy

student_2.age = 20;//doesn't modify student
student_2.grades[0] = 6;//modifies student
console.log(student);

let student_3 = JSON
    .parse(JSON.stringify(student)); //deep copy

student_3.grades[0] = 9;//doesn't modify student
console.log(student);