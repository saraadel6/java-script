//Bouns
var createCounter = function(init){
    let original = init;
    let obj = {
        increment: function(){
            init++;
            console.log(init);
            return init;
        },
        decrement: function decrement(){
            init--;
            console.log(init);
            return init;
        },
        reset: function decrement(){
            init = original;
            console.log(init);
            return init;
        },
        
    }
    return obj;
}
console.log("Test case one: ");
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

console.log("Test case two: ");
const counter1 = createCounter(5);
counter1.increment(); // 6
counter1.reset(); // 5
counter1.decrement(); // 4