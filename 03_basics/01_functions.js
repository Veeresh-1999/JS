function myName() {
    console.log("Veeresh");
}

// myName() // Veeresh

// with parameter

// function addTwoNumber (n1, n2)
// {
//     console.log(n1 + n2);
// }

// addTwoNumber(2,1)

// function addTwoNumber (n1, n2)
// {
//     return n1+n2
// }

// console.log(addTwoNumber(2,3))


function userName(name)
{
    if(!name)
    {
        console.log("enter valid name");
        return
    }
    else
    {
        return `Hi, Welcome ${name}`
    }
}

console.log(userName());