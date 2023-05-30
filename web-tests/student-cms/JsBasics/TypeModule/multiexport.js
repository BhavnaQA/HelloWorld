let myPerson = {
    name: ' test Name',
    age: 32,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

export default myPerson