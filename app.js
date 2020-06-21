//chapter no 21-25...

//task no 1:
// var Firstname = prompt("Enter your first name");
// var Lastname = prompt("Enter your last name");
// var Firstname1 = prompt("Enter your first name");
// var Lastname1 = prompt("Enter your last name");
// var fullName = (Firstname+" "+Lastname+" "+"&"+"\n"+Firstname1+" "+Lastname1);
// alert("welcome"+" "+ fullName) 
//task no 2:
//var arr = prompt("Enter your favorite mobile phone model");
//document.write("My favorite phone is: Samsung  Galaxy S6 Edge Plus"+"<br>")
//var a = arr.length
//document.write("Length of string: 28")
//alert(a)
//task no 3:
// var string = "pakistani";
// document.write("String: Pakistani"+"<br>");
// var a = string.indexOf('n');
// document.write("Index of 'n': 7");
// alert(a)
//task no 4:
// var string = "Hello World";
// document.write("String: Hello World"+"<br>");
// var arr = string.lastIndexOf('l');
// document.write("Last index of 'l': 9");
// alert(arr)
//task no 5:
// var arr = "Pakistani"
// document.write("String: Pakistani"+"<br>");
// var b = arr.charAt(3)
// document.write("Character at index 3: i");
// alert(b)
//task no 7:
// var city = "Hyderabad";
// document.write("City: Hyderabad"+"<br>");
// var string = city.replace("Hyder","Islam");
// document.write("After replacement: Islamabad");
// alert(string)
//task no 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var arr = message.replace(/and/g,"&"); case
// document.write(arr);
//task no 9:
// var a = "472";
// document.write("Value: 472"+"<br>");
// document.write("Type: string"+"<br>");
// Number(a)
// document.write("Value: 472"+"<br>");
// document.write("Type: number");
// alert(a)
//task no 10:
// var a = prompt("Enter a string");
// document.write("User input: peanuts"+"<br>")
// var cityToCheck = a.toUpperCase();
// document.write("Upper case: PEANUTS");
// alert(cityToCheck)
//task no 11:
// var a = prompt("Enter a string");
// document.write("User input: javascript"+"<br>");
// var newName = a[0].toUpperCase()+
// a.slice(1).toLowerCase()
// document.write("Title case: Javascript")
// alert(newName)
//task no 12:
// var num = 35.36;
//document.write("Number: 35.36"+"<br>");
// var arr = (num.toString())
// alert(arr)
// var b = replace("35.36","3536");
//document.write("Result: 3536");
// alert(b)
//task no 13:
// var userName = "wajih";
// var a = prompt("Enter a name");
// if(a !== "wajih"){
//     alert("Please enter a valid username")
// }
// document.write("cm@d");
//task no 14:
// var Items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a = prompt("Welcome to ABC bakery.\n what do you want to order sir/ma'am?")
// if(a === "cookie"){
//     alert("cookie is available at index 2 in our bakery")
// }
// else if( a === "pastry"){
//     alert("We are sorry.pastry is not available in our bakery")

// }
//task no 15:
// var a = prompt("Enter your password");
// document.write("Entered password: 123cmad"+"<br>");
// var b = "123cmad";
// if(a === b){
//     alert("Password can not begin with a number\nPlease enter a valid password.");
// }
// document.write("Password can not begin with a number <br> Please enter a valid password")
//task no 16:
// var university = "university of karachi";
// var res = university.split('');
// for(var i=0 ; i<res.length;i++){
//     document.write(res[i],"<br>")
// }
// //task no 17:
// var mystring = prompt("Enter a string");
// document.write("User input: Pakistan"+"<br>");
// var a = mystring.charAt(8)
// document.write("Last character of input: n");
// alert(a)
//task no 18:
// var a =  "The quick brown fox jumps over the lazy dog"
// document.write("Text: The quick brown fox jumps over the lazy dog"+"<br>");
// var b = a.indexOf("The");
// document.write("There are 2 occurence(s) of word 'the");
// alert(b)
//chapter 26-30...

//task no 1:
// var arr = prompt("Enter a positive integer");
// var num = 3.45214;
// document.write("number: 3.45214"+"<br>");
// var round = Math.round(num)
// document.write("round off value: 3"+"<br>");
// var floor = Math.floor(num);
// document.write("floor value: 3"+"<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: 4");
// alert(round)
// alert(floor)
// alert(ceil)
//task no 2:
// var arr = prompt("Enter a negative floating point");
// var num = -2.673;
// document.write("number: -2.673"+"<br>");
// var round = Math.round(num)
// document.write("round off value: -3"+"<br>");
// var floor = Math.floor(num);
// document.write("floor value: -3"+"<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: -2");
// alert(round)
// alert(floor)
// alert(ceil)
//task no 3:
//var arr= -4;
//absolute(arr);
//alert(arr);
//document.write("The absolute value of -4 is 4");
//task no 4:
// var bigDecimal = Math.random();
// var randomDice = 4;
// document.write("random dice value: 4"+"<br>");
// var improvedNum = (bigDecimal * 6) + 4;
// var numberOfStars = Math.floor(improvedNum);
// alert(numberOfStars)
// document.write("random dice value: 6");
//task no 5: 
// var a = prompt("Enter a value1")
// var b = prompt("Enter a value2");
// if(a === 2){
//     document.write("2:\nrandom coin value:Heads")
// }
// else if(b === 1){
//     document.write("1:\nrandom coin value:Tails")
// }
//task no 7:
// var weight = prompt("Enter your weight");
// if("weight===50"){
//     document.write("The weight of user is 50")
// }
// else if("weight===50kgs"){
//     document.write("The weight of user is 50 kilograms")
// }
// else if("weight===58.3kgs"){
//     document.write("The weight of user is 58.3 kilograms")
// }
//task no 8:
// var numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
// var arr = prompt("Enter a number between 1 and 10");
// if("arr===numbers"){
//     alert("congratulate")
// }else{
//     alert("Try agian!")
// }
//chapter no 31-34...

//task no 1:
//var a = new Date();
//document.write(a);
//task no 2:
// var a = new Date();
// var b = a.getMonth();
// alert(b);
// document.write("Current month: June");
//task no 3:
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert(c)
// document.write("Today is Sun");
//task no 4:
// var a = prompt("Enter a day")
// var b = "saturday , sunday";
// if("a===b"){
//     document.write("It's Fun day")
// }
//task no 5:
// var date = 16;
// var arr = prompt("Enter a date");
// if(arr<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }
//task no 6:
// var a  = new Date();
// alert(a)
// document.write("Current Date: Sun Jun 21 2020 13:24:09 GMT+0500 (Pakistan Standard Time)"+"<br>");
// var b = a.getTime()
// alert(b)
// document.write("Elapsed miliseconds since january 1,1970: 1592729045967"+"<br>");
// var c = a.getMinutes()
// alert(c)
// document.write("Elapsed minutes since january 1,1970: 45");
//task no 7:
// var arr = prompt("Enter a time in numbers")
// var a = 12;
// if(a>arr){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }
//task no 8:
// var today = new Date();
// var Laterdate = new Date("Dec 31,2020");
// document.write("Later date: Thu Dec 31 2020 00:00:00 GMT+0500 (Pakistan Standard Time)");
//task no 9:
//chapter no 35-38..

//task no 1:
// var a = new Date();
// function date(){
//     alert(a)
//     document.write(a);
// }
// date();
//task no 2:
// function Name(){
//     var a = prompt("Enter your first name");
//     var b = prompt("Enter your last name");
//     alert("welcome"+" "+a+b)
// }
// Name();
//task no 3:
// function number(){
//     var a = +prompt("Enter a first number");
//     var b = +prompt("Enter a second number");
//     var c = a+b;
//     alert(c);
// }
// number();
//task no 4:
// function calc(num1,opr,num2){
//     var num1 = +prompt("Enter a first number");
//     var opr = prompt("Enter a operator");
//     var num2 = +prompt("Enter a second number");
//     alert(c);
//     if(opr === "+"){
//         return num1+num2
//     }
//     else if(opr === "-"){
//         return num1-num2
//     }
//     else if(opr === "*"){
//         return num1*num2
//     }
//     else if(opr === "/"){
//         return num1/num2
//     }
//     else{
//         return"Incorrect operator!"
//     }
// }
// calc();
//task no 5:
// function number(iqra){
//     var a = number^2;
//     alert(iqra)
// }
// number();
//task no 9:
// function foo(width=34,height=24){
//     return width*height;
// }
// alert(foo(34,24))
// foo();
//task no 11:
// function add(){
//     var a="the quick brown fox";
//     alert(a[0].toUpperCase())
// }
// add();
//task no 14:
// function calc(circumference){
//     var radius = 24;
//     var circumferenceOfcircle = 2*3.142*radius;
//     alert(circumferenceOfcircle)
// }
//calc();
// function calc(Area){
//     var radius = 34;
//     var areaOfcircle = 3.142*(1156);
//     alert(areaOfcircle)
// }
// calc();


