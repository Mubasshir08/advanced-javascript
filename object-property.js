const students = [
    {id: 1, name: "Iqbal"},
    {id: 2, name: "Martin"},
    {id: 3, name: "Sadat"},
    {id: 4, name: "Roxina"},
];

// const nameArray = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const {name} = element;
//     nameArray.push(name); 
// };
// console.log(nameArray);

const names = students.map(names => names.name);
const find_Iqbal = students.filter(n => n.name == "Iqbal");
//console.log(names);
console.log(find_Iqbal);

