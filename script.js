// const rgb = (r = 0, g = 0, b = 0) => {
//     return `rgb(${r}, ${g}, ${b})`;
// } 
    

// console.log(rgb(15, 15));


const avg = () => {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(avg(1, 2))
