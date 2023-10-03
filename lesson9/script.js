// 1
// let num = +prompt("Write number");
// const getArea = (number) => Math.PI * Math.pow(number,2);
// if(typeof(num) == "number"){
//     if(Number.isNaN(num)){
//         console.log("Повинно бути числове значення");
//     }
//     else if(num == 0){
//         console.log("Будь ласка, введіть радіус!");
//     }
//     else{
//         if(num<0){
//             num = Math.abs(num);
//         };
//         console.log(`Площа дорівнює ${getArea(num)} то квадратних одиниць.`);
//     }
// }
// else{
//     console.log('ERROR')
// }


// 2
// let num = +prompt("Write number");
// const getSqrt = (number) => Math.sqrt(num);
// if(typeof(num) == "number"){
//     if(num<0){
//         console.log('Введіть додатнє число');
//     }
//     else if(Number.isNaN(num)){
//         console.log("Повинно бути числове значення");
//     }
//     else if(num == 0){
//         console.log("Будь ласка, введіть число!");
//     }
//     else{
//         console.log(`Квадратний корінь з ${num} дорівнює ${getSqrt(num)}.`);
//     }
// }
// else{
//     console.log('ERROR')
// }


//3

let MyMath = {
    PI(){
        return 3.141592653589793;
    },
    pow(num1, degree){
        let result = num1;
         for (let i = 1; i < degree; i++) {
         result *= num1;
    }
        return result;
    },
    abs(number){
        if(number>0){
            return number;
        }
        else if(number<0){
            number += number * -2;
        };
        return number;
    },
    max(...numbers){
        let stop = 0;
        for(let i = 0;i<numbers.length;i++){
            if(numbers[i]>stop){
                stop = numbers[i];
            }
        };
        return stop;
    },
    min(...numbers){
        let stop = 100;
        for(let i = 0;i<numbers.length;i++){
            if(numbers[i]<stop){
                stop = numbers[i];
            }
        };
        return stop;
    }
};

console.log('MyMath.PI()',MyMath.PI());
console.log('MyMath.pow(5, 5)',MyMath.pow(5, 5));
console.log('MyMath.abs(-100)',MyMath.abs(-100));
console.log('MyMath.max(10,100,255,674,1,1000,67',MyMath.max(10,100,255,674,1,1000,67));
console.log('MyMath.min(10,100,255,674,1,1000,67)',MyMath.min(10,100,255,674,1,1000,67));

