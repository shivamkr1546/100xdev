function sum(a,b){  //synchronuos function
    return a+b;     // single thread will go line by line
}

//async call
// using readfile
function onDone(content){
    console.log(content);
}

readFile("a.txt", onDone) //async call

console.log("hi there");
for(let i = 0; i<10; i++){
    //do something
}

//using setTimeout
setTimeout(onDone, 1000); //thread reached here and it will call onDone after 1sec
console.log("after setTimeout");