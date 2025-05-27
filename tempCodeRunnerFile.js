function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);  // calling function after duration
}

myOwnSetTimeout(function(){
    console.log("hi there");
}, 1000)