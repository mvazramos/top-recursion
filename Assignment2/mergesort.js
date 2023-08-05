// Assignment 2:
// Merge Sort Recursive

function mergeSort(arr){
    if(arr.length<2) return arr;

    let midpoint = Math.round(arr.length/2); 
    let left = arr.slice(0,midpoint);
    let right = arr.slice(midpoint);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    // it assumes that left and right are sorted arrays
    let ordered= [];

    while(left.length!==0 && right.length!==0){
        if(left[0]<=right[0]){
            ordered.push(left.shift());
        }else{
            ordered.push(right.shift());
        }
    }

    // There might be left 1 element in one of the arrays
    while(left.length!==0){
        ordered.push(left.shift());
    }

    while(right.length!==0){
        ordered.push(right.shift());
    }

    return ordered;
}


console.log(mergeSort([3,4,9,1,2,2,2,3]))
//console.log(merge([ 3, 4, 9 ], [ 1, 2 ]))