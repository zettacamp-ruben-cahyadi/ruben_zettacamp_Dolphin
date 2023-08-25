// TEST

const data = {
    age: 23,
    firstname: 'Ruben',
    lastname: 'Cahyadi',
    isTrue: true,
    x: null,
    greeting: function(){ // function
        console.log(`Hello, my name is ${this.firstname} ${this.lastname} ` )
    }
}

console.log(data.firstname)
console.log(data.lastname)
console.log(data.age)
console.log(data.isTrue)
console.log(data.x)
data.greeting()







