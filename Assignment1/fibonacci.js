// Assignment 1 : 
// Fibonacci Sequence  

function fibonacci(n){
    let arr = [0,1];
    let a=arr[0];
    let b=arr[1];

    for (let index = 2; index < n; index++) {
        let temp = b;
        b=a+b;
        a=temp;
        arr.push(b);
    }

    return arr;
}

function fibRec(n){
    //base case
    if(n <= 2) return [0,1];

    let arr = fibRec(n-1);
    arr=[...arr, arr[arr.length-1]+arr[arr.length-2]];
    
    return arr;
}

// running 
console.log(fibonacci(8));
console.log(fibRec(8));