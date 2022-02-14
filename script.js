 
// "use strict";

                                    //lesson N 1 strong variable//
//a = 15;
//console.log(a);

//  let number = 5;
//  let Number = 5;//this different variable//
 
//  const leftBorderWidth = 1;

//  number = 10;
//  console.log(number);

// //leftBorderWidth = 10; dont this do it//
//  console.log(leftBorderWidth);

//  const obj = {
//      a: 50
//  };

//  obj.a = 10;
//  console.log(obj);

//  console.log(name);
//  var name = 'Ivan'; //old variable//
//  name = 'Alex1';

//  {
//     let result = 50;
//  }
// console.log(result);
  

// "use srtict";
                                            // // Lesson N2 Type data

// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// const persone = "Alex";

// let und;
// console.log(und);

// const bool = `true or false`;

// console.log(something);


// const obj = {
//  /0/   name: "john",
//  /1/   age: 25,
//  /2/   isMarried: false
// };
// //console.log(obj.name);
// // console.log(obj ["name"]);
//                   0           1        2    3           4  5
//  let arr = ['plum.png', 'oranje.jpg', 6, 'apple.bmp', {}, []];
//  console.log(arr[1]);


                                        // lesson N3 simple communication with the user

//alert('hello');
//const result = confirm("are you here");
//console.log(result);

 //const answer = prompt("Вам есть 18?", "18");
 //const answer = +prompt("Вам есть 18?", "18"); // преобразовывает в числовой тип данных
// console.log(typeof(answer));
// const answers = [];
// answers[0] = prompt ('как ваше имя?', '');
// answers[1] = prompt ('как вашf фамилия?', '');
// answers[2] = prompt ('сколько вам лет', '');

// document.write(answers);

                                        //Lesson N3 interpolation 

//const category = 'toys';

//console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);
                                        //Lesson N4 interpolation operators in JS

console.log('arr' + " - object");
//console.log(4 + +" - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;
//incr++; //lift up at 1 number; Постфиксцная система записи
//decr--; //down up at 1 number; Постфиксцная система записи
++incr; // Префиксная система записи
--decr; // Префиксная система записи
console.log(++incr);
console.log(--decr);

console.log(5%2);// Возвращает остаток от деления 

console.log(2*4 == '8'); //оператор сравнивания
console.log(2*4 === 8); //оператор Строгого сравнивания
console.log(2 + 2 * 2 !== '6');

// && // и
// || // или 
// !  // оператор отрицания

const isChecked = true;
      isClose = false;
        console.log(isChecked || isClose);