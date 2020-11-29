// function sum(a){
//   return function sumInner(b){
//     a+=b
//     console.log(a)
//     return sumInner
//   }
//     return sumInner
// }
// const result = sum(2)(5)(10)(15);
// console.log(result)




// function sum(a){
//   return function sumInner(b){
//     a+=b
//     console.log(a)
//     return sumInner
//   }
// }
// const result = sum(2)(5)(10)(15);
// console.log(result(0))




// function sum(a) {
//   const innerSum= function (b) {
//     a += b
//     console.log(a)
//     return sumInner
//   }
//   innerSum.toString = function () {
//     return a
//   }
//   return innerSum
// }
// const result = sum(2)(5)(10)(15);
// console.log(result)




//  /Задание 1

// Рассчитать количество метров трубы которая может поместиться в
// контейнер 

// Пользователь вводит параметры контейнера
// И вводит диаметр трубы

// Как результат мы должны видеть 
// количество погонных метров трубы которое можно разместить в контейнере

// const containerWidth = prompt ('Введите ширину контейнера','');
// const containerLength = prompt ('Введите длинну контейнера','');
// const containerHeigth = prompt ('Введите высоту контейнера','');

// const pipeDiameter = prompt ('Введите диаметр трубы','');

// let containerCapacity = containerWidth*containerHeigth
// let pipeArea = (Math.PI*Math.pow(pipeDiameter,2))/4

// let pipeAmount = (Math.floor(containerCapacity/pipeArea)*containerLength)

// const a = prompt('Введите длину контейнера');
// const b = prompt('Введите ширину контейнера');
// const h = prompt('Введите высоту контейнера');
// const d = prompt('Введите диаметр трубы');

// let SContainer = a * b;
// // console.log(SContainer);
// let SPipe = Math.PI*Math.pow(d/2, 2);
// // console.log(SPipe);
// let n = Math.floor(SContainer/SPipe)*h;
// alert(`В контейнер поместится ${n} метров трубы`);

console.log(2020);
console.log(typeof 2020);


