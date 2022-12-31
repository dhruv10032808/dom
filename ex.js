//Application of call,apply and bind functions
// var trial=function(a,b,c,d){
//     return this.age+a+b+c+d;
// }
// var obj1={
//     "age":15
// };
// console.log(trial.call(obj1,1,2,3,4));
// var arr=[1,2,3,6];
// console.log(trial.apply(obj1,arr));
// var bind=trial.bind(obj1);
// console.log(bind(1,2,3,7));

//Using bind to print age of student
// var Student={
//     "age":20
// }
// function printAge(){
//     return this.age;
// }
// var a=printAge.bind(Student);
// console.log(a());

//Currying function
// function multiply(a,b){
//     return()=>{

    
//      console.log(a*b);
//     }
//  }
//  let m=multiply.bind(this,10);
//  m(5)();

//Currying using closures
// function multiply1(x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let z=multiply1(6);
// z(7);
// a()

// b()

class Student{
    static i=0;

 constructor(name,age,phonenumber,marks){
this.name=name;

this.age=age;

this.phonenumber=phonenumber;

this.marks=marks;
Student.i=Student.i+1;

    }
static count(){
        console.log(Student.i);
    }

placement(minage){

    return(minmarks)=>{
        if(this.marks>=minmarks && this.age>=minage)
{
            return(this.name+" "+"eligible");
    
        }
    
        else{
    
            return(this.name+" "+"not eligible");
    
        }
    }

}
}
var a=new Student("Ram",15,948474,60);
var b=new Student("Zoya",18,947498,90);
var c=new Student("Xyaa",20,890756,30);
var d=new Student("Yash",19,758949,40);
var e=new Student("Paresh",17,736572,70);
Student.count();
console.log(a.placement(17)(40));
console.log(b.placement(17)(40));
console.log(c.placement(17)(40));
console.log(d.placement(17)(40));
console.log(e.placement(17)(40));



