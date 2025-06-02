//promises are thing that make code look better
//it prevents us from calling async func inside another async func

//wrapping another async fn
// function myOwnSetTimeout(fn, duration){
//     setTimeout(fn, duration);  // calling function after duration
// }

// myOwnSetTimeout(function(){
//     console.log("hi there");
// }, 1000)

//same code using promises

//promise is class that is java provides
function promisifiedMyOwnSetTimeout(duration){
    let p = new Promise(function (resolve){
        //after 1 second, call resolve
        setTimeout(resolve, 1000);  //calling resolve after time
    });
    return p; //returning the promise
}

// myOwnSetTimeout(1000)
//     .then(function(){
//         console.log("log the first thing")
//     })

//promise
const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeOut is done");
})
// console.log(ans);