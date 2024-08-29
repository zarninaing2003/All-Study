// const student1 = {
//     name: "kyaw kyaw",
//     age: 15,
//     major: "web",
//     learn(){
//         return this.name + "can learn";
//     },
//     study(){
//         return this.name + "can study";
//     }
// }

// // console.log(student1);

// class Student{
// //  name;
// //  age;
// //  township;
// //  major
//     schoolName  =  "MMS IT";
//     #majors   = [

//         {
//             id: 1,
//             title: "Web",
//             subjects : ["Frontend","Backend"]
//         },
//         {
//             id:2,
//             title: "App",
//             subjects : ["Design","Api"]
//         }
//     ]


//  constructor(inputName,inputAge,majorName,gender,townShip){
//     // data initialization
//     this.name = inputName;
//     this.age =  inputAge;
//     this.majorName =  majorName;
//     this.townShip =  townShip;
//     this.gender =  gender;
//     this.fullName   = (this.gender === "Male" ? "Mg" : "Ma") + " " + this.name;
//     this.birthYear =  2024 - this.age;
//  }


//  learn(){
//     return this.name+ " can learn"
//  }

//  study(){
//     return  this.name + " can study"
//  }

//    smile(){
//     return " I am Smile";
//  }
// }


// const st1 = new Student("zar ni","20","Web Development", "Male","Yangon");
// const st2  =  new Student("su su","21","Web Designer","Female", "Mandalay");

// // console.log(st1);
// // console.log(st2);
// // console.log(st1.smile());
// // console.log(st1.schoolName);

// // console.log(st1.learn());
// // console.log(st1.study());
// // console.log(st1.schoolName);

// class A {
//     a  = "aaa";
//     b  =  "bbb";
//     c = "ccc";
// }


// class B extends A {
//     x =  "xxxx";
//     y =  "yyyy"
// }

// class C extends B {}
// const a  =  new A();
// // console.log(a);
// const b =  new B();
// // console.log(b);
// const c =  new C();
// // console.log(c);

class Person {
    constructor (name,birthYear,gender){
        this.name  =  name;
        this.birthYear = birthYear;
        this.gender =  gender;
        this.namePrefix =  this.gender === "Male" ? "Mg" : "Ma";
    }
}


const person1    = new Person("kyaw kyaw",2003,"Male");
const person2    = new Person("Su Su",2002,"Female");
console.log(person1);
console.log(person2);


class AllStudent extends Person {
    constructor(name,birthYear,gender,schoolName,major) {
        super(name,birthYear,gender);
        this.schoolName =  schoolName;
        this.major =  major;
    }

    intro(){
        return  `My name is ${this.name}  and I am ${2024 - this.birthYear} year  old` 
    }
}


class Doctor extends Person{
        constructor(name,birthYear,gender,hospitalName) {
        super(name,birthYear,gender);
        this.hospitalName =  hospitalName;
    }
}

class Monitor extends AllStudent {
        constructor(name,birthYear,gender,schoolName,major,roomNumber) {
        super(name,birthYear,gender,schoolName,major);
        this.roomNumber  =  roomNumber;
    }
}

const monitor1 =  new Monitor("zar ni",2003,"Male","MMS it","Web Development","123")
console.log(monitor1);

const doctor1  =  new Doctor("Tun Tun ",1993,"Male","SSC",)
const student2 =  new AllStudent("Mg Mg",2005,"Male","MMS It","Frontend Development");
console.log(student2.intro());
console.log(doctor1);

// const obj =  {
//     a:"aaaa",
// }

// obj.a = "bbb"
// console.log(obj.a);


// class BankAccount {
//     #balance =  0;
//     #history =  [];
//     checkBalance(){
//         return this.#balance;
//     }
//     checkHistory(){
//         return this.#history;
//     }

//      #transition(message){
//         this.#history.push(message);
//     }
//     deposit(amount){
//         this.#balance += amount;
//         this.#transition(amount + " added");

//     }
//     transfer(amount){
//         if(amount <= this.#balance){
//         this.#balance -= amount;
//         this.#transition(amount + " transfer successful");

//             return amount + " transfer successful";
//         }
//         return  "transfer Fail"
//     }
//     receive (amount){
//         this.#balance += amount;
//         this.#transition(amount + " receive successful");
//         return amount + " receive successful"
//     }   
// }
// const ac1 =  new BankAccount();
// // ac1.#balance =  10000;
// ac1.deposit(500);
// ac1.deposit(1500);
// ac1.deposit(2500);
// console.log(ac1.transfer(200));
// console.log(ac1.receive(500));
// console.log(ac1.checkBalance());
// console.table(ac1.checkHistory());