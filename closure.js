function stopwatch() {
    let count = 0;
    return function(){ // build a close environment
        count++;
        return count;
    }
}
const clock = stopwatch(); // keeps a new function
console.log(clock());
console.log(clock());
const clock2 = stopwatch(); // keeps a new function
console.log(clock2());