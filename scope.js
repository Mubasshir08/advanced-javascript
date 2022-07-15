function varScope(num1,num2){
    var result_in_scope = num1 + num2;
    return result_in_scope;
}

const result = varScope(1,2)

//console.log(result);
//console.log(result_in_scope);  //not defined as it's not in global scope

function scope(num3,num4) {
    if(num3 > 4){
        // let name = "Jack";
        // var name = "Jack";
    }
    console.log(name); // not defined as we use let :: when we use var rather then let then it will be available everywhere in that function scope 
}
//scope(5,6);

console.log(day); // undefined cause it's find nothing before assign a result into a variable (var type) :: on the other hand if we use let/const it will return ""ReferenceError: Cannot access 'day' before initialization"" as we can not access it before initialization;

// var day = "friday" 
let day = "friday" 