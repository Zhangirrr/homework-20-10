// const rgb = (r = 0, g = 0, b = 0) => {
//     return `rgb(${r}, ${g}, ${b})`;
// } 
    

// console.log(rgb(15, 15));


    // const avg = () => {
    //     let sum = 0;
    //     for(let i = 0; i < arguments.length; i++){
    //         sum += arguments[i];
    //     }
    //     return sum / arguments.length;
    // }

    // console.log(avg(1,2,3))
    // console.log(arguments)


// function avg(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }
// console.log(avg(1,2,3,45,45,54,4,5,5,8,5,8))
    // console.log(arguments)


    // function repeat(str, n){      думал что так, потом узнал о функции repaat.
    //     return str * n
    // }

    // console.log(repeat("asd", 2))



    function repeat(str, n = 2) {
        return str.repeat(n);
    }
    
    console.log(repeat('asd', 2));