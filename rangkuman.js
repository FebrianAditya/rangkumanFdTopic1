// penamaan variable harus mengandung huruf, angka atau simbol "$" dan "_"

// cara nulis variable
let huruf1 = 28
let _age = 29

// Ini menggunakan kaidah camel case
let firstName = "Febrian"
// ini menggunakan underscore
let first_name = "Febrian"

// {}
// scoping adalah yang didalam curly bracket !!!!
if (5 > 3) { // ini contoh aja yaa untuk scoping
    // console.log(true); // ==> ini local scoping
    var name = "Hafizh"
}

// console.log(name, "===> ini yang nama");

// let cobain = () => {
//     var car = "Kiaz" // ini yang dimaksud dengan block scope casenya menggunakan function
//     let car = "Hyunsang"
//     console.log(car, "=> ini car");
// }
var luasLapangan = 27
var caseContoh = "longsor"

if(caseContoh === "longsor") {
    var luasLapangan = 26
    // console.log(luasLapangan, "==> ini orang pertama");
}
luasLapangan = 28
// console.log(luasLapangan,"==> ini orang kedua");

var age = 26
age = 17 // Ini yang disebut reassigned
var age = 100 // ini yang disebut dengan redeclare
// console.log(age, "=> Ini yang age");

item = "book" // ==> Ini yang dimaksud dengan hoisting
var item
// console.log(item, "=> ini item");

// ===========================================================
// LET
let motorCycle = "Sizuka"
// let motorCycle = "Yamahmud"
motorCycle = "Hando"

if (6 > 3) {
    let motorCycle = "Kaoskaki"
}

// console.log(motorCycle, "=>>  Motor");
// city = "Jakarta"
// let city
// console.log(city, "=> Ini yang city");

// contoh lagi
let day = "monday"
// ===========================================================

//HOUR = 24 => Hoisting
const HOUR = 23 // INI penmaan const pakai capital case
// HOUR = 20 => Reassign

/**
 * Rangkuman
 * Redeclare = membuat lagi variable dengan nama variable yang sama/mendeklarasikan ulang
 * Reassigne = mengisi ulang/update value lagi dari variable
 * 
 * Variable
    *  scope = tidak bisa membedakan global dan local scoping
    *  reasigned dan redeclare = semuanya bisa
    *  Hoisting = true
    * 
 * Let
    * Scope =  bisa membedakan mana yang global scope dan local scope
    * reassigne dan redeclare = hanya bisa reassigne dan redeclare itu tidak bisa
    * Hoisting = di local diabisa kena error karena adanya engine Javascript, namun di online code editor dia tidak akan terkena
    * 
 * Const
    *  Scope =  bisa membedakan mana yang global scope dan local scope
    * reassigne dan redeclare = hanya bisa reassigne dan redeclare itu tidak bisa
    * Hoisting = di local diabisa kena error karena adanya engine Javascript, namun di online code editor dia tidak akan terkena
    * 
    * 
 * Infinity masih masuk kedalam group tipe data number
 * 
 * Array dan object merupakan tipe data structured
 * Array index selalu dimulai dari 0
 * cara akses index dengan nyebutin indexnya, pakai square bracket
 *  contoh : ada dibawah
 * Panjangnya array (.length), dimulai dari satu
 */

// ===========================================================


// Tipe Data Primitive Di JavaScript
// console.log(typeof "Febrßßian", "==> INI CEK TIPE DATA"); // ===> Ini cara mengetahui tipe data di JS

// String
let color = "red" // ini menggunakan double quote
let country = 'Indonesia' // ini menggunakan single qoute
let animal = `Lion ${country}` // ini menggunakan backtic, Ini template literal
let concatString = color + " " + country
// console.log(concatString);

// Number
let numberOne = "Febrian"
let numberTwo = 0
let result = numberOne / numberTwo
// console.log(result);
// console.log(typeof result);


// Boolean
// Hanya ada 2 value, diantaranya true dan false
let iniTrue = true
let iniFalse = false
// console.log(iniTrue);

// Nilai truthy falsy
let resultDua = 6 > 7 // ==> Falsy
let resultTiga = 6 > 4 // ==> truety
// console.log(resultDua, "=> nilainya");

// Ini contoh
if(6 > 7) {
    // console.log("Masuuuuuk");
}

// null
let nyawaManusia = null
// console.log(nyawaManusia);

// undefined
let platNumber
// console.log(platNumber);



// Object
// Rangkuman cara menulis object menggunakan curlyBracket
let student = {
    "name": "Rigan", // ini lemari level 1
    "age": 26, // ini lemari level 2
    "addres": {
        rt: 20
    }, // ini lemari level 3
    "status": "single" // ini lemari level 4
}
// console.log(student.name); // ini salah satunya
// console.log(student["addres"]["rt"]); // ini salah dua akses object
// console.log(typeof student);

// Cara penulisan array menggunakan square bracket, lalu biasakan dengan plural, biasakan array itu semua indexnya merepresentasikan hal yang sama
let bilanganGenap = [2, 4, 6, 8]
let contohNewArray = new Array(1,3,5)
// cara akses array dengan menggunakan index
// console.log(contohNewArray, "==> Inin array yang ");
// console.log(bilanganGenap[0]); // index selalu dimulai dari 0
// console.log(bilanganGenap.length); // ===> ini cara mengecek panjang dari array

// method push in array
// let animals = ["cat", "dog", "elephent"]
// console.log(animals, "==> Ini sebelum dipakai .push");
// animals.push("ant") // ini menambahkan index value dipaling belakang
// animals.pop() // ini method unutk mengeluarkan value index terakhir
// console.log(animals);
// console.log(animals);

animals.forEach(el => { // forEach adalah untuk mengeluarkan value satu-satu 
    // console.log(el);
})

let animals = ["cat", "dog", "elephent"]
for (let index = 0; index < animals.length; index++) {
    // const element = array[index];
    console.log(index, "==> Ini indexnya looh");
    console.log(animals[index]);
}
// Breakdown dari for looping
/*
let index = 0
0 < animals.length
0 < 3 ==> Truety
    console.log(index, "==> Ini indexnya looh"); // ini print 0
    console.log(animals[index]); // "cat"
index++
let index = 1
1 < animals.length
1 < 3 => truety
    console.log(index, "==> Ini indexnya looh"); // ini print 0
    console.log(animals[index]); // "cat"
index++
let index = 2
2 < animals.length
2 < 3 => Truety
    console.log(index, "==> Ini indexnya looh"); // ini print 0
    console.log(animals[index]); // "cat"
index++
3 < 3 => falsy // sudah stop ga jalanin yang console.log
*/
