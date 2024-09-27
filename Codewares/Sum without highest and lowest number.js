//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
function sumArray(array) {
    if(array==null) return 0
    return array.sort((a,b)=>a-b).slice(1,-1)
    .reduce((acc,current)=> acc+current,0)
    
    // return array.filter((x)=> x !== Math.max(...array)&& x !== Math.min(...array))
    // .reduce((acc,current)=> acc+current,0)
}
console.log(sumArray([1,2,3,4,5,6,7,8,9]));

