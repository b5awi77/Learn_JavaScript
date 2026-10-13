let person={
    name:'Ahmad',
    age:20,
    city:'Baghdad',
};
console.log(person);
console.log(person.name);
console.log(person['age']);

person.age=21;
person.job='Student';
console.log(person);

delete person.city;
console.log(person);

let student={
    name:'Ali',
    grsdes: [90,72,89],
    greet: function(){
        console.log('Hello, I am '+this.name);
    },
};

student.greet();
console.log(student.grsdes);

let people=[
    {name:'Sara',age:24},
    {name:'Noor',age:29},
];

for(let i=0; i<people.length; i++){
    console.log(people[i].name + ' is ' + people[i].age);
}


// Exercises

let car={
    brand:'Toyota',
    year:2019,
    color:'black',
    describe:function(){
        console.log(`My car is a ${this.brand} from ${this.year}.`);
    
    }
};
console.log(`My car is a ${car.brand} from ${car.year}.`);
car.describe();


let books=[
    {title: 'Book 1', price: 10},
    {title: 'Book 2', price: 20},
    {title: 'Book 3', price: 90},   
];
let total=0;
for(let i=0; i<books.length; i++){
     total +=books[i].price;
}
console.log(`Total= ${total}`);
