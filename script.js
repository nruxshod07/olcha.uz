// let name = "Рухшод"
// console.log(name);
// let lastName = "Незаметдинов"
// console.log(lastName);
// let age = "16"
// console.log(age);
// let gender = "male"
// console.log(gender);
// let height = "1,73m"
// console.log(height);
// console.log(name, lastName, age, gender, height);
// let name2 = "John"
// let admin = name
// console.log(name2);
// let balance =25000
// let car =4480
// let food =890
// let invoice =5500
// let stock =4200
// let totalBalance = balance - car - food + invoice + stock
// console.log(totalBalance);
// let nameTwo = "Rukhshod"
// let lastNameTwo = " Nezametdinov"
// let ageTwo = 16
// let genderTwo = "male"
// let heightTwo = "1.74m"
// console.log(
// ` Hello my name is  ${nameTwo} ${lastNameTwo}  i  ${ageTwo} y.o. . My gender is  ${gender}  and my height is  ${height}`);
/* let txt = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni obcaecati reiciendis voluptate autem eius ipsam totam dolores, ullam enim nostrum quos quis hic odio accusamus reprehenderit quo saepe. Possimus."
console.log(
    txt.slice(txt.search('r'), txt.search('r') + 1) +
    txt.slice(txt.search('u'), txt.search('u') + 1) +
   "k" +
    txt.slice(txt.search('h'), txt.search('h') + 1) +
    txt.slice(txt.search('s'), txt.search('s') + 1) +
    txt.slice(txt.search('h'), txt.search('h') + 1) +
    txt.slice(txt.search('o'), txt.search('o') + 1) +
    txt.slice(txt.search('d'), txt.search('d') + 1)
); */
/* let text = "Lex luter has a big suit" */
/* console.log(
    text.slice(text.search('a'), text.search('a') + 1).toUpperCase() +
    text.slice(text.search('l'), text.search('l') + 1) +
    text.slice(text.search('e'), text.search('e') + 1) +
    text.slice(text.search('x'), text.search('x') + 1)
);
for(let i=1;i=>0;i++)
 */
/* let str = '   helloworld   ' */ /*
console.log(
   str.trim()
); */
/* let  str = "lorem ipsum dolor sit amet bla bla"
console.log(
    str.replace("dolor","ipsum")
); */
/* str.split("") */
/* str.charAt */
/* let str = "aaa@bbb@ccc"
console.log(
    str.replace("@bbb@","!bbb!")
); */
/* alert('hello') */
/* confirm("") */
/* prompt() */
/* let box = prompt("which fruit i like?")

if (box === "apples") {
    console.log('i like it');
} else {
    console.log('i dont like it');
} */
/* let age = confirm('вам есть 18?')

if (age === true) {
    alert('Добро пожаловать!');
} else {
    alert('Доступ запрещен');
} */
/* let guests = "putin biden zelenskiy mirziyoyev trump"
let nameTwo = prompt("What is your name mr President?").trim()
if (guests.includes(nameTwo)) {
    alert("Здравствуйте господин президент!");
} else {
    alert("Вам доступ запрещен!")
}
if (nameTwo === "putin") {
    alert("ДОбро пожаловать putin!")
} else if (nameTwo === "biden") {
    alert("Welcome mr biden")
} else if (nameTwo === "zelenskiy") {
    alert("Добрi пожаловатi zelemskiy")
} else if (nameTwo === "mirziyoyev") {
    alert("Xush kelibsiz mirziyoyev!")
} else (
    alert("проваливай")
) */
/* let num = +prompt('a')
let mmm = prompt('+ - / *')
let numTwo = +prompt('b')
 if (mmm === "+") {
alert(num + numTwo)
 } else if (mmm === "-") {
    alert(num - numTwo)
 }
 else if (mmm === "/") {
    alert(num / numTwo)
 }
 else if (mmm === "*") {
    alert(num * numTwo)
 } else (
    alert("error!")
 ) */
/*
&& and
|| or
! not */
/* let a = +prompt('a')
let m = prompt('+ - / *')
let b = +prompt('b') */
/*if (m === '+') {
    alert(a + b)
} else if (m === '-') {
    alert('a - b')
} else if (m === '/') {
    alert(a / b)
} else if (m === '*') {
    alert(a * b)
} else (
    alert('error')
) */
/* DRY - Dont Repeat Yourself */
/* switch (m) {
    case "+":
        document.write(<h1>`${a} ${m} ${b} = ${a + b}`</h1>)
        break
    case "-":
        document.write(<h1>`${a} ${m} ${b} = ${a - b}`</h1>)
        break
    case "/":
        document.write(<h1>`${a} ${m} ${b} = ${a / b}`</h1>)
        break
    case "*":
        document.write(<h1>`${a} ${m} ${b} = ${a * b}`</h1>)
        break
        default:
            alert("error")
} */
/* let nameTwo = prompt().toLowerCase().trim()
if (nameTwo[0] === 'a' && nameTwo.length % 2 === 0) {
    alert("hi!")
} else {
    alert("error")
} */
/* if ("") {
    console.log("1");
} else if (undefined) {
    console.log("2");
} else if (null) {
    console.log("3");
} else if(" ") {
    console.log("4");
} */
// array

//string
//number
//boolean
//array (object) []
/* let names = ["ayub", 22, 12, "zafar", ["hello", [[[12]]], 12], ["axror", 122, "10101011"], 0, 12, 12, 3123.213213, true, false, {}, [], undefined, null, 21, NaN, ""]

let total = 0

console.log(
    names[1] + names[2] + names[4][1][0][0][0] + names[4][2] + names[5][1] + names[6] + names[7] + names[8] + names[9] + names[16]
);
console.log(
    names([1] + [2] + [4][1][0][0][0] + [4][2] + [5][1] + [6] + [7] + [8] + [9] + [16]
))
 */
//search
// let students = ['ayub','islom','daler','shaxzod']
/*let idx = students.indexOf(prompt(students))
students.splice(idx, 1)
console.log(students); */
//students.find((name) => name[0] === 'p')
//console.log(callBack);
/*  let arr = ['amir','zokir','ravshan','jamshud','alex']/*

let sn = ''

arr.forEach(baran => {
    if(baran.length > sn.length) {
        sn = baran
    }
})
console.log(sn); */
/* let nums = [2,5,4,3,6,7,8,1,9,22,15,55]
console.log(
    nums.sort((a,b) => a-b)
); */
/* console.log(arr.sort()); */
// let names = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex', 'amir', 'amir']
// let evenNamesCallBack = (name) => name.length % 2 === 0
// let evenNames = names.filter(evenNamesCallBack)
// let oddNamesCallBack = (name) => name.length % 2 !== 0
// let oddNames = names.filter(oddNamesCallBack)
// let arrLength = evenNames.length - oddNames.length
// if (arrLength > 0) {
// alert("Четных больше")
// } else if (arrLength < 0) {
//     alert("Нечетных больше")
// } else (
//     alert("оба равны")
// )
// // Отфильтровать задачи в переменные а и b
// // Сохранить количество в ключе count
// // Сохранить сами задачи в массиве-ключе arr
// let arr = [
//     {
//         userId: 1,
//         id: 1,
//         title: "delectus aut au`tem",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "quis ut nam facilis et officia qui",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "fugiat veniam minus",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: "et porro tempora",
//         completed:
//             true
//     },
//     {
//         userId: 1,
//         id: 5,
//         title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 6,
//         title: "qui ullam ratione quibusdam voluptatem quia omnis",
//         сompleted: false
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: "illo expedita consequatur quia in",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 8,
//         title: "quo adipisci enim quam ut ab",
//         completed: true
//     },
//     {
//         "userId": 1,

//         id: 9,
//         title: "molestiae perspiciatis ipsa",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 10,
//         title: "illo est ratione doloremque quia maiores aut",
//         completed: true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let aFilter = arr.filter((arrItem) => arrItem.completed === true)
// a.count = a.count + aFilter.length
// a.arr.push(aFilter)
// console.log(a);

// let b = {
//     count: 0,
//     arr: []
// }

// let bFilter = arr.filter((arrItem) => arrItem.completed === false)
// b.count = b.count + bFilter.length
// b.arr.push(bFilter)
// console.log(b);
//  let arr = [12,222,3222,422222]
// let total = 0
// arr.forEach(num => total += num)
// console.log(total);

//reduce
// let total = arr.reduce((sum, curr) => sum + curr)
// let max = arr.reduce((a,b) => {
//     if(a > b) {
//         return a
//     } else {
//         return b
//     }
// })
// console.log( max);
// let maxTwo = arr.reduce((a,b) => {
//     if(a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// }),

//increment
// let i = 0

// i = i + 1
// i += 1
// i++

//Object.freeze() // заморозка, запрет на действие
//Object.keys() //вывод ключей
//Object.values() //вывод значений
//Object.entries() // Достает все и помещает ключи и значения по своим массивам
//object.assign() // Присвоение ключей кому  ,  чьи
//object.assign(something, {key}) // присвоение объекта с ключами кому и чьи

//decrement
// i = i - 1

//ТЗ = Техническое Задание
//1.Создать два объекта
//2.Соединить два объекта так чтобы старые не менялись
//3.Получить из нового объекта все ключи  в новых переменных
//4.Получить из нового объекта все значения в новых переменных
//5.Соединить два полученных массива после задания 3,4 в один целый массив
//6.В объект пож названием тайпс вам надо распределить элементы из массива arr по их типам данных
/* let password = 7777
let x = null
do {
    x = +prompt("Enter your password")
} while (x !== password) {
    alert("true!")
} */
// let obj = {
//     name: "Axror",
//     surname: "Adams",
//     age: 22,
//     isMarried: false
// }

// for(let key in obj) {
//     console.log(key);
// }
// let products = [
// {
//     id: 1,
//     name: "milk",
//     type: "milk",
//     price: 10000
// },
//     {
//         id: 4,
//         name: "kefir",
//         type: "milk",
//         price: 12000
//     },
//     {
//         id: 5,
//         name: "ayran",
//         type: "milk",
//         price: 15000
//     },
//     {
//         id: 6,
//         name: "cheese",
//         type: "milk",
//         price: 80000
//     },
//     {
//         id: 7,
//         name: "smetana",
//         type: "milk",
//         price: 17000
//     },
//     {
//         id: 8,
//         name: "kurt",
//         type: "milk",
//         price: 60000
//     },
// ]
// for (let i = 2; i <= 10000; i++) {
//     for (let k = 2; k <= 10000; k++) {
//         document.write(`${i} * ${k} = ${i * k}`, "<br />")
//     }
// }
// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

// let successful = []

// let unSuccessful = []

// let taxes = 0

// let taxesMax = {}

// let taxesMin = {}

// // * // Реальные данные 2021*

// let bank = [

//     {

//         name: 'Apple',

//         budget: 1000000,

//         tax: 28,

//         expensesPerYear: [

//             {
//                 title: 'Salaries',
//                 total: 125000
//             },

//             {
//                 title: 'Utilites',
//                 total: 18000,
//             },

//             {
//                 title: 'Rent',
//                 total: 258000
//             }

//         ]

//     },

//     {

//         name: 'Microsoft',

//         budget: 988000,

//         tax: 21,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 148000

//             },

//             {

//                 title: 'Utilites',

//                 total: 124000,

//             },

//             {

//                 title: 'Rent',

//                 total: 314000

//             }

//         ]

//     },

//     {

//         name: 'HP',

//         budget: 609000,

//         tax: 14,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 414000

//             },

//             {

//                 title: 'Utilites',

//                 total: 19000,

//             },

//             {

//                 title: 'Rent',

//                 total: 114400

//             }

//         ]

//     },

//     {

//         name: 'Xiomi',

//         budget: 889500,

//         tax: 17,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 318000

//             },

//             {

//                 title: 'Utilites',

//                 total: 14000,

//             },

//             {

//                 title: 'Rent',

//                 total: 169000

//             }

//         ]

//     },

//     {

//         name: 'Samsung',

//         budget: 889500,

//         tax: 12,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 650400

//             },

//             {

//                 title: 'Utilites',

//                 total: 29000,

//             },

//             {

//                 title: 'Rent',

//                 total: 212000

//             }

//         ]

//     },

// ]

// * // 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// * // 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// * // 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// * // 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// * // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// * // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// const setup = () => {
//     for (company of bank) {
//         company.expensesPerMonth = 0
//         company.procent = 0
//         let budgetPerMonth = company.budget / 12
//         company.totalMoney = 0
//         company.taxesPerMonth = budgetPerMonth / 100 * company.tax
//         for (expensePerYear of company.expensesPerYear) {
//             company.expensesPerMonth += expensePerYear.total / 12
//         }
//         company.procent = company.expensesPerMonth / (budgetPerMonth / 100)
//         company.totalMoney = budgetPerMonth - (company.expensesPerMonth + company.taxesPerMonth)
//         if (company.totalMoney < 0) {
//             unSuccessful.push(company)
//         } else {
//             successful.push(company)
//         }
//         taxes += budgetPerMonth / 100 * company.tax

//         taxesMax = bank.reduce((a, b) => a.taxesPerMonth < b.taxesPerMonth ? b : a)
//         taxesMin = bank.reduce((a, b) => a.taxesPerMonth > b.taxesPerMonth ? b : a)
//     }

// }

// setup()
// let courses = [

//     {

//         title: 'SMM',

//         howLong: 3

//     },

//     {

//         title: 'Dev',

//         howLong: 6

//     },

//     {

//         title: 'Graph',

//         howLong: 4

//     },

// ]

// let earnings = {

//     total: 0,

//     max: {},

//     min: {}

// }

// let m = 0

// let w = 0

// let average_age = 0

// let smm = 0

// let dev = 0

// let graph = 0

// let students = [

//     {

//         sex: 'm',

//         age: 14,

//         payment: 1220000,

//         course: {

//             title: 'SMM',

//         }

//     },

//     {

//         sex: 'm',

//         age: 24,

//         payment: 1883000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 16,

//         payment: 2190000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'm',

//         age: 19,

//         payment: 718000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 15,

//         payment: 2195000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'm',

//         age: 24,

//         payment: 460000,

//         course: {

//             title: 'SMM'

//         }

//     },

//     {

//         sex: 'w',

//         age: 14,

//         payment: 560000,

//         course: {

//             title: 'SMM'

//         }

//     },

//     {

//         sex: 'w',

//         age: 22,

//         payment: 160000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'm',

//         age: 26,

//         payment: 883000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 26,

//         payment: 750000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'm',

//         age: 23,

//         payment: 212000,

//         course: {

//             title: 'Graph',

//         }

//     },

//     {

//         sex: 'w',

//         age: 24,

//         payment: 883000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 27,

//         payment: 190000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'w',

//         age: 19,

//         payment: 210000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 21,

//         payment: 770000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'm',

//         age: 18,

//         payment: 1200000,

//         course: {

//             title: 'SMM'

//         }

//     },

//     {

//         sex: 'w',

//         age: 51,

//         payment: 880000,

//         course: {

//             title: 'SMM'

//         }

//     },

//     {

//         sex: 'm',

//         age: 51,

//         payment: 2430000,

//         course: {

//             title: 'Dev'

//         }

//     },

//     {

//         sex: 'w',

//         age: 33,

//         payment: 1277000,

//         course: {

//             title: 'Graph'

//         }

//     },

//     {

//         sex: 'w',

//         age: 21,

//         payment: 2750000,

//         course: {

//             title: 'Dev'

//         }

//     },

// ]

// // * // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

// // * // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

// // * // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

// // * // 3. Сохранить заработок учебного центра в earning.total*

// // * // 4. Узнать кто больше всех платит за обучение в earning.max*

// // * // 5. Узнать кто меньше всех платит за обучение в earning.min*

// // * // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

// // * // 7. Посчитать средний возраст студентов в average_age*

// const setup = () => {
//     let totalAges = 0
//     let earningPerMonth = 0
//     for (let student of students) {
//         if (student.sex === "m") {
//             m += student.sex.length
//         } else {
//             w += student.sex.length
//         }
//         for (let course of courses) {

//             if (student.course.title === course.title) {
//                 student.course.howLong = course.howLong
//             }
//             if (student.course.title.toLowerCase() == "SMM".toLowerCase()) {
//                 smm++;
//             } else if (student.course.title.toLowerCase() == "Dev".toLowerCase()) {
//                 dev++;
//             } else if (student.course.title.toLowerCase()== "Graph".toLowerCase()) {
//                 graph++;
//             }
//             earnings.total += student.payment * student.course.howLong
//             earningPerMonth += student.payment
//             totalAges += student.age
//             average_age = totalAges / students.length
//         }
//     }
//     earnings.max = students.reduce((a, b) => (a.payment * a.course.howLong) > (b.payment * b.course.howLong) ? a : b)
//     earnings.min = students.reduce((a, b) => (a.payment * a.course.howLong) < (b.payment * b.course.howLong) ? a : b)
//     console.log(courses);
// }

// setup()
// let discount = prompt('Какая скидка?')

// let totalSale = 0

// let total = 0

// let max = {}

// let min = {}

// let average = 0

// let arr = [

//     {

//         name: 'Milk',

//         price: 3.25

//     },

//     {

//         name: 'Coffee',

//         price: 1.5

//     },

//     {

//         name: 'Ice Cream',

//         price: 7.85

//     },

//     {

//         name: 'Tomatos',

//         price: 4.14

//     },

//     {

//         name: 'Onion',

//         price: 2.25

//     }

// ]

// let arr_sale = []

// const setup = () => {
//     max = arr.reduce((a, b) => a.price > b.price ? a : b)
//     min = arr.reduce((a, b) => a.price > b.price ? b : a)
//     for (item of arr) {
//         total += item.price
//         totalSale = total - (total / 100 * discount)
//         average = total / arr.length
//         item.price = item.price - (item.price / 100 * discount)
//         arr_sale.push(item)
//     }
//     console.log(max);
// }

// setup()

// let hotel = [
//     [
//         {
//             room: 1,
//             price: 300,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 2,
//             price: 4000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 3,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 4,
//             price: 900,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 5,
//             price: 700,
//             brand: "Luxe",
//             children: true,
//         },
//         {
//             room: 6,
//             price: 79000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 7,
//             price: 600,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 8,
//             price: 950,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 9,
//             price: 1900,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 10,
//             price: 5000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 12,
//             price: 250,
//             brand: "Luxe",
//             children: false,
//         },
//     ],
//     [
//         {
//             room: 13,
//             price: 10000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 8000,
//             brand: "President",
//             children: false,
//         },
//     ],
// ];

// let rooms = {
//     all_rooms: [],
//     rooms: 0,
// };
// let brands = {
//     president: [],
//     deluxe: [],
//     luxe: [],
// };

// let room_level = {
//     perviy: 0,
//     vtoroy: 0,
//     tretiy: 0,
//     chetvertiy: 0,
// };
// // 1 отфильтровать по категориям
// // 2 добавить ключ eting с буленовым значением в каждый номер
// // 3 посчитать и красиво раставить все команты переменную rooms
// // 4 найти самую дорогую комнату
// // 5 посчитать сколько стоит каждый этаж
// // 6 посчитать сколько стоят все комнаты вместе взятые
// // 7 найти все комнаты в которых живут дети

// const setup = () => {
//     // let rooms.eting = 0
//     let mostExpensive = 0
//     let roomsTotal = 0
//     let withChildren = []
//     let withoutChildren = []
//     let floorCosts = []
//     for (let floor of hotel) {
//         for (let hotelRoom of floor) {
//             if (hotelRoom.brand.toLowerCase().trim() === "president") {
//                 brands.president.push(hotelRoom)
//             } else if (hotelRoom.brand.toLowerCase().trim() === "deluxe") {
//                 brands.deluxe.push(hotelRoom)
//             } else if (hotelRoom.brand.toLowerCase().trim() === "luxe") {
//                 brands.luxe.push(hotelRoom)
//             }
//             rooms.rooms++
//             rooms.all_rooms.push(hotelRoom)
//             mostExpensive = rooms.all_rooms.reduce((a, b) => a.price > b.price ? a : b)
//             roomsTotal += hotelRoom.price
//             if (hotelRoom.children === true) {
//                 withChildren.push(hotelRoom)
//             } else {
//                 withoutChildren.push(hotelRoom)
//             }

//         }
//         floorCosts.push(floor.reduce((floorCost, room) => floorCost + room.price, 0))
//         room_level.perviy = floorCosts[0]
//         room_level.vtoroy = floorCosts[1]
//         room_level.tretiy = floorCosts[2]
//         room_level.chetvertiy = floorCosts[3]
//     }
//     console.log();
// }
// setup()

// function twiceAsOld(dad, son) {
//     do {
//         dad--;
//     } while (dad / son !== 2)
//     console.log(dad);
// }
// twiceAsOld(36,7)
// function fizzBuzz(num) {
//     for (i = 1; i <= num; i++) {
//         let fizz = (num) => i % 3
//         let buzz = i % 5
//         if (fizz = 0) {
//             i = fizz
//         }
//         console.log(i);
//     }
// }
// fizzBuzz(10)
// let boxes = document.querySelectorAll('item')
// boxes.forEach(item => {
//     item.onmouseenter = () => {
//         item.classList.add('active')
//     }
// })
// let items = document.querySelectorAll('.item')
// items.forEach((item) => {
//     item.onclick = () => {
//         items.forEach(item => item.classList.remove('active'))
//         items.forEach(item => item.classList.remove('transition'))
//         item.classList.add('transition')
//         item.classList.add('active')
//     }
// })
// let form = document.forms.signup
// let inps = form.querySelectorAll('input')

// form.onsubmit = (event) => {
//     event.preventDefault();
//     let error = false

//     if (error) {
//         alert('go home')
//     } else {
//         submit()
//     }
// }

// function submit() {
//     let user = {}

//     let fm = new FormData(form)

//     fm.forEach((value, key) => {
//         user[key] = value
//         inps.forEach((inp) => {
//             if (value.length === 0) {
//                 alert('hi')
//                 inp.style.borderColor = "red"
//             }

//         })
//     })

//     console.log(user);
// }
// let inps = document.querySelectorAll("input");
// let form = document.querySelector("form");
// let error = false;
// let patterns = {
//   name: /^[A | B | C][A-Za-z -]*$/i,
//   age: /^\d+$/,
// };
// inps.forEach((inp) => {
//   inp.onkeyup = () => {
//     let key = inp.getAttribute("name");
//     if (key === "name" && patterns[key].test(inp.value) === true) {
//       inp.style.border = "1px solid green";
//       error = false;
//     } else {
//       inp.style.border = "1px solid red";
//       error = true;
//     }
//     if (key === "age" && inp.value > 20) {
//         inp.style.border = "1px solid green";
//     }
//   };
// });
// form.onsubmit = (event) => {
//   console.log(error);
//   event.preventDefault();
//   if (error) {
//   } else {
//     submit();
//   }
// };

// function submit() {
//   let user = {};
//   let fm = new FormData(form);
//   fm.forEach((value, key) => {
//     user[key] = value;
//   });
//   console.log(user);
// }
// let main = document.createElement('main')
// let block = document.createElement('div')
// let title = document.createElement('h1')
// let age = document.createElement('div')
// let pOne = document.createElement('p')
// let pTwo = document.createElement('p')

// block.classList.add('block')
// age.classList.add('age')
// pOne.classList.add('gray')

// pOne.innerText = "Age"
// pTwo.innerText = "89"
// title.innerText = "Alan Adams"

// document.body.prepend(main)
// main.prepend(block)
// block.prepend(title, age)
// age.prepend(pOne,pTwo)

let main = document.createElement("main");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let arr = [];
let tr = document.createElement("tr");
for (let i = 0; i <= 7; i++) {
  let td = document.createElement("td");
  arr.push(td);
}
let stat = arr[0]
let date = arr[1]
let group = arr[2]
let progress = arr[3]
let course = arr[4]
let count = arr[5]
let days = arr[6]
let classroom = arr[7]



stat.innerHTML = 'Off'
date.innerHTML ='2 сентября'
group.innerHTML ='204'
progress.innerHTML ='86%'
course.innerHTML =''
count.innerHTML =''
days.innerHTML =''
classroom.innerHTML =''

