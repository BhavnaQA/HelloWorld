function printName()
{

    console.log("My name is Bhavna")
    function printRole()
    {
        console.log("My Role is QA")
    }

    printRole()
}

printName()


/**
 * Parametric Functions
 */

function takeName(name)
{
    console.log("Hello ", name)

}

takeName('Aaditya')

/**
 * Function with Return value
 */

function addNumb(a,b){
    return a+b
}

console.log("Sum is",addNumb(3,4))