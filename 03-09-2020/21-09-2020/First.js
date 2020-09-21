function printSmallestArrayElement(A)
{
    A.sort() 
    return A[0]
}

console.log(printSmallestArrayElement([3,4,5,1,5,6,10,12,14,19,22,25]))
console.log(printSmallestArrayElement([1,2,48,19,,16,110,212,314,419,522,125]))
