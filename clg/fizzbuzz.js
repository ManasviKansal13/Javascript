//let a=100;
function fizzBuzz(arg){
    const arr =[];
    for(let i=1;i<=arg;i++){
        if(i%15==0)
            arr.push('fizzbuzz');
        else if(i%3==0)
            arr.push('fizz');
        else if(i%5==0)
            arr.push('buzz');
        else
            arr.push(i);   
    }
    console.log(arr);
    //return arr;
}
fizzBuzz(100);