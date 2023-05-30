class Car{
    constructor(){
        this.make = "Benz"
        this.color = "Black"

    }

    isAutomation() {
        return false
    }
}
// creating obj here
//let carBenz = new Car()
//console.log(carBenz)


//export default carBenz
//export {carBenz}

// if we dont want to create an obj here 
export{Car}