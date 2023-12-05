// const a = "moiz";
// console.log(a);
// Global Object
console.log(global)
// Global object
global.setTimeout(() => {
    console.log('in the street')
    clearInterval(a)
},3000);
//set interval
const a = setInterval(()=>{
    console.log('object 1000')
},1000);
//Directory Name
console.log(__dirname);
console.log(__filename);