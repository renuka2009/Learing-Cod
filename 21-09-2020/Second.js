
function printLargestArrayElement (A)
{
    A.sort
    return A[A.length-1]
}

console.log(printLargestArrayElement([3,4,5,1,5,6,10,12,14,19,22,25]))
console.log(printLargestArrayElement([1,2,48,19,,16,110,212,314,419,522,125]))
