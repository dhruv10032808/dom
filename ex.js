//Application of call,apply and bind functions
var trial=function(a,b,c,d){
    return this.age+a+b+c+d;
}
var obj1={
    "age":15
};
console.log(trial.call(obj1,1,2,3,4));
var arr=[1,2,3,6];
console.log(trial.apply(obj1,arr));
var bind=trial.bind(obj1);
console.log(bind(1,2,3,7));

//Using bind to print age of student
var Student={
    "age":20
}
function printAge(){
    return this.age;
}
var a=printAge.bind(Student);
console.log(a());

//Currying function
function multiply(a,b){
    console.log(a*b);
}
let m=multiply.bind(this,10);
m(5);

//Currying using closures
function multiply1(x){
    return function(y){
        console.log(x*y);
    }
}
let z=multiply1(6);
z(7);