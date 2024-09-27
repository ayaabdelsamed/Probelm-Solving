//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];
    let positives = input.filter((x)=> x>0).length
    let sumNegatives = input.filter((x)=> x<0).reduce((acc,current)=>acc+current,0)

    // let positives=0,negative=0;
    // input.map((m)=>{
    //     if(m>0)
    //         positives++;
    //     else negative+=m
    // })
    return [positives,sumNegatives]
}