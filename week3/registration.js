class Student {  //create a student class
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

let testStudent = new Student('Bugs Bunny', 'bugs@bunny.com'); //instantiate a new object of student class
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

class Bootcamp { //create the bootcamp class
    constructor(name, level, students =[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    //add method to register students
    registerStudent(studentToRegister){
        // studentToRegister = new Student();
        if(!studentToRegister.name || !studentToRegister.email){
            console.log("Invalid name or email");
            return false;
        }
        let isEmailRegistered = false;
        this.students.forEach((student)=>{ //Iterate through the student array
            if(student.email === studentToRegister.email){
                console.log("Email already registered");
                isEmailRegistered = true;
            }
        });
            if(!isEmailRegistered){
                this.students.push(studentToRegister);
                console.log(`Successfully registered ${studentToRegister.name}`);
                return true;
            }
            return false;
    }//end registration method

    listStudents(){  //get list of all students
        if(this.students.length === 0){
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }
        console.log(`The students registered in ${this.name} are:`);
        this.students.forEach((student)=>{
            console.log(`${student.name}: ${student.email}`)
        });
        return true;

    }


}

let reactBootcamp = new Bootcamp("React", "Advanced"); //create instance of the bootcamp class

console.log(reactBootcamp); //Test
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


// Define the testStudent
const testStudent2 = new Student("Babs Bunny", "babs@example.com");
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent2);