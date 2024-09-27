//You get an array of numbers, return the sum of all of the positives ones.

function sumOfPositive(arr){
    return arr.filter((x) => x>0)
    .reduce((acc,current)=> acc + current,0)
    // let sum=0
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>0)
    //         sum+=a[i]
    // }
    // return sum;
}
console.log(sumOfPositive([1,-4,7,12]));
