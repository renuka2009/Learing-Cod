
function DeleteFirstTwoElement (A)
{
     A.splice(0,2)
     return A
}

console.log(DeleteFirstTwoElement(["Akshara","Renuka","Dhanu","Priya","Neetu","Kushi","Purva","Kiran"]))
console.log(DeleteFirstTwoElement(["Dhasrat","Chotu","Krish","Lalu"]))
