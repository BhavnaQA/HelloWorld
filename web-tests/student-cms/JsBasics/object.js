// let laptopMake = 'Mac'
// let laptopScreen = 15.6
// let laptopRam = '16GB'
// let laptopColour = 'Grey'


const laptop ={
    laptopMake: 'Mac',
    laptopScreen: 15.6,
    laptopRam: '16GB',
    laptopColour: 'Grey',
    owner: {
        name: 'Bhavna'
    },

    greet: function(){
        return 'Hello'
        
    }
    
}
console.log(laptop)
// Dot Notation 
console.log(laptop.laptopRam)
console.log(laptop.laptopMake)

//Bracket notation
console.log(laptop['laptopRam'])

// add other key: value pair

laptop.laptopOS = 'iOS'  //using dot notation
laptop['laptopBattery'] = '2 Hrs' //using bracket notation 
laptop.laptopColour = 'White'
console.log(laptop)

console.log(laptop.owner.name)
console.log(laptop.greet())