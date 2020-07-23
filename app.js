//                    Assignment # 5



// ===== Chapter # 1      Tesk # 1

// alert("")

// ===== Chapter # 1      Tesk # 2

// alert("Error! Please enter valid password");

// ===== Chapter # 1      Tesk # 3

// alert("Welcome to JS Land....\n Happy Codding!");

// ===== Chapter # 1      Tesk # 4

// alert("Welcome to JS Land....");
// alert("Happy Codding\n \n  Prevent this page from creating additional dialogs" );

// ===== Chapter # 1      Tesk # 5

//  console.log();


// ===== Chapter # 2      Tesk # 1

// var username;

// ===== Chapter # 2      Tesk # 2

// var myName;
// myName = ("Hassan Javed");

// ===== Chapter # 2      Tesk # 3

// var a;
// a = ("Hello Word");
// alert(a);

// ===== Chapter # 2      Tesk # 4

// var name =( "Hassan Javed");
// var age = ("21 years old ");
// var b = ("Certified Mobile Application Development ");
// alert(name);
// alert(age);
// alert(b);


// ===== Chapter # 2      Tesk # 5
// var x;
// x = ("PIZZA \n PIZZ \n PIZ \n PI \n P");
// alert(x);

// ===== Chapter # 2      Tesk # 6
// var email;
// email = (" My email address is hassanjaved836@gmail.com");
// alert(email);

// ===== Chapter # 2      Tesk # 7
// var book;
// book = ("I am trying to learn from Book A smarter \n way to learn JavaScript");
// alert(book);

// ===== Chapter # 2      Tesk # 8
// var y = ("Yah! I can write HTML content through Javascipt");
// document.write(y);

// ===== Chapter # 2      Tesk # 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);



// //====== Chapter # 3   task 1
// var age;
// age = (" I am 15 years old")
// alert(age);

// //====== Chapter # 3   task 2
// var n = 14;
// alert("You have visited. This site "+n+" times");


// //====== Chapter # 3   task 3
// var birthYear;
// birthYear =("My birth years is 1999 <br> Data type of my declared variable number   <br> ");
// document.write(birthYear );


// //====== Chapter # 3   task 4
// var name =("<br><strong>Hassan javed </strong>");
// var Product =(" ordered<strong> T-shirt </strong>(s) Khan bhi Clothing store")
// document.write(name,Product);


//====== Chapter # 4   task 3
// var name,age,address;
// name =("Hassan Javed");
// age =("21 years old");
// address =("Pindi gheb Pnjab")
// //alert(name + age + address);


// //====== Chapter # 4   task 3
// // legel variable 
// var $;
// var _;
// var name;
// var num;
// var camalCase;
// // illegal Variable

// // ?
// // 0 to 9
// // special characters
// // (space)

// //====== Chapter # 4   task 3
// var heading =("<h2> Rules for naming JS variables <h2> <br>" );
// var x; 
// x =("<h5> Variable names can only contain, number, $ and _ .for example : $my_1st variavle <br>Variables must begin with a letter, $ or _. For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS keywords <h5>");

// document.write(heading , x);


//====== Chapter # 5   task 1
// var x = 3;
// var y = 5;
// var z = x+y;
// document.write("Sum of "+x+" and "+y+" is "+z+"<hr>");

// //====== Chapter # 5   task 2
// var x1 = 3;
// var y1 = 5;
// var z1 = x-y;
// document.write("<br> subtraction of "+x1+" and "+y1+" is "+z1 );

// var x2 = 3;
// var y2 = 5;
// var z2 = x*y;
// document.write("<br> multiplication of "+x2+" and "+y2+" is "+z2);

// var x3 = 3;
// var y3 = 5;
// var z3 = x/y;
// document.write("<br> division of "+x3+" and "+y3+" is "+z3);

// var x4 = 3;
// var y4 = 5;
// var z4 = x%y;
// document.write("<br> modulus of "+x4+" and "+y4+" is "+z4+"<hr>");

// //====== Chapter # 5   task 3
// var i = 5;
// var a = ++i + ++i - --i + --i  - ++i - i ;
// document.write("<br>Value after variable declaration is undefined <br>Initial value: 5<br> Value after increment is: 6<br> Value after addition is: 13 <br> Value after decrement is: 12<br>The remainder is : 0<hr> ")

// //====== Chapter # 5   task 4
// var ticket = 600;
// var buying = 5;
// var total = ticket * buying;
// document.write("Total cost  to buy "+buying+" tickets to a movie is "+total+" PKR <hr>");

// //====== Chapter # 5   task 5
// var a =1;
// for( a ; a<=10; a++ ){
//     document.write( " 3" + "x" + a + "=" + 3*a + "<br>" );
// }

// //====== Chapter # 5   task 6
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     document.write("<hr>"+ message  +"<br>");
// }
// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//   document.write(message);
// } 
// cToF(25);
// fToC(70);

// //====== Chapter # 5   task 8
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quntItem1 = 3;
// var quntItem2 = 7;
// var charges = 100;
// var total;
// total = (priceItem1*quntItem1 + priceItem2*quntItem2 + charges);
// document.write("<hr><h1>Shopping Chart</h1>");
// document.write("<br> Price of item 1 is " + priceItem1);
// document.write("<br> Quantity of item 1 is " + quntItem1);
// document.write("<br> Price of item 2 is " + priceItem2);
// document.write("<br> Quantity of item 2 is " + quntItem2);
// document.write("<br> Shopping charges " + charges +"<br>");
// document.write("<br> Total cost of your order is " + total)


// //====== Chapter # 5   task 8
// var total_marks = 980;
// var marks_obtained = 804;
// var percentage ;
// percentage = (marks_obtained / total_marks* 100);
// document.write("<hr><h1>Marks Sheet</h1>");
// document.write("<br> Total mark : " + total_marks);
// document.write("<br> Marks obtained : " + marks_obtained);
// document.write("<br> percentage : " + percentage);


// //====== Chapter # 5   task 9
// var dollar = 104.80;
// var Riyals = 28;
// var intoPKR = ((dollar * 10) + (Riyals * 25));
// document.write("<hr><h1>currency in PKR </h1>");
// document.write("<br> Total currency in PKR : " + intoPKR);

// //====== Chapter # 5   task 10
// var num = 3
// var calculations = ((num + 5 * 10)/2 );

// //====== Chapter # 5   task 11
// var current_year = 2020;
// var birth_year = 1999;
// var age = (current_year - birth_year);
// document.write("<hr><h1>Age Calculator</h1>");
// document.write("<br> Current year :" + current_year);
// document.write("<br> Birth year : " + birth_year);
// document.write("<br> Your age is : " + age );

// //====== Chapter # 5   task 12
// var r = 20; 
// var Circumference = (2 * 3.142 * r);
// var area = (3.142 * (20*20.0));
// document.write("<hr><h1>The Geometrizer</h1>");
// document.write("<br> Radius of a circle :" + r);
// document.write("<br> Circumference of a circle :" + Circumference);
// document.write("<br> Area  of a circle :" + area);

// //====== Chapter # 5   task 13
// var snack = "Lays"
// var current_age = 15;
// var maximum_age = 65;
// var per_day = 3;
// var Calculate = ((current_age - maximum_age) * per_day)
// document.write("<hr><h1>The Lifetime Supply Calculator</h1>");
// document.write("<br> Favorite snack  :" + snack);
// document.write("<br> Current age : " + current_age);
// document.write("<br> Estimated maximum age : " + maximum_age);
// document.write("<br> Amount of snacks per day : " + per_day)
// document.write("<br> You will need 150 Lays to last you until the ripe old age of 65")


//====== Chapter # 6   task 1
// var a = 10;
// var result;
// document.write("Result <br> The value of a is:" + a);
// document.write("<br>--------------------------------------");

// document.write("<br> The value ++a is: "+ ++a);
// document.write("<br> Now the value of a is: "+ a +"<br>");

// document.write("<br> The value a++ is: "+ a++);
// document.write("<br> Now the value of a is: "+ a +"<br>");

// document.write("<br> The value --a is: "+ --a);
// document.write("<br> Now the value of a is: "+ a +"<br>");

// document.write("<br> The value a-- is: "+ a--);
// document.write("<br> Now the value of a is: "+ a +"<br><hr>");

//  //====== Chapter # 6  task 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is:" + a + "<br>");
// document.write("b is:" + b + "<br>");
// document.write("result is:" + result + "<br>");

// document.write("<br> Explain")
// var a = 2;
// var b = 1;
// document.write("<br> The value --a is: "+ 1);
// document.write("<br> The value --a - --b is: "+ 1);
// document.write("<br> The value --a - --b + ++b is: "+ 2);
// document.write("<br> The value --a - --b + ++b + b-- is: " + 3+ "<hr>"  );

//  //====== Chapter # 6   task 3
// var x = prompt("Enter your name");
// document.write("Hello" + " " +x);

//  //====== Chapter # 6   task 5
// var y = prompt("Enter number","5");
// document.write( "<hr><br>",y);

//  //====== Chapter # 6   task 6
// var sub1 = prompt("Enter 1st subject Name");
// var total_marks = 100;
// var obtained_marks =+prompt("Enter obtained Marks");
// var percentage = (obtained_marks / total_marks * 100 );

// var sub2 = prompt("Enter 2nd subject Name");
// var total_marks2 = 100;
// var obtained_marks2  =+prompt("Enter obtained Marks 2nd subject");
// var percentage2 = (obtained_marks2 / total_marks2 * 100 );

// var sub3 = prompt("Enter 3rd subject Name");
// var total_marks3 = 100;
// var obtained_marks3 =+prompt("Enter obtained Marks 3rd subject");
// var percentage3 = (obtained_marks3 / total_marks3 * 100 );

// var full_marks = (total_marks + total_marks2 + total_marks3);
// var total_obtained = (+obtained_marks + obtained_marks2 + obtained_marks3);
// var total_percentage = (percentage + percentage2 + percentage3);

// document.write("<hr><table><tr><th>Subject  </th> <th>  Tital Marks</th><th> Obtained Marks</th><th> percentage</th></tr>"    +"<tr> "+"<td>"+sub1 +"</td>" +"  <td>"+total_marks+"</td>"+ "<td>"+obtained_marks+"</td>" +  "<td>"+percentage+"%</td></tr> " +"<tr> "+"<td>"+sub2 +"</td>" +"  <td>"+total_marks2+"</td>"+ "<td>"+obtained_marks2+"</td>" +  "<td>"+percentage2+"%</td></tr>" +"<tr> "+"<td>"+sub3 +"</td>" +"  <td>"+total_marks3+"</td>"+ "<td>"+obtained_marks3+"</td>" +  "<td>"+percentage3+"%</td></tr> "+"<tr><th></th>"+" <th>"+full_marks+"</th><th>"+total_obtained+"</th><th>"+total_percentage+"%</th></tr></table>")



//====== Chapter # 9-11   task 1
// var city = prompt("Enter city name");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }
// else {
//     alert("You enter wrong city")
// }

// //====== Chapter # 9-11   task 2
// var gender = prompt("Enter gender", "gender");
// if (gender === "male") {
//     alert("Good Morning Sir");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma’am");
// }
// else {
//     alert("please enter correct answer");
// }

// //====== Chapter # 9-11   task 3
// var signal_color = prompt("Enter color of road traffic signal");
// if (signal_color === "Red") {
//     alert("Must Stop");
// }
// else if (signal_color === "Yellow") {
//     alert("Ready to move");
// }
// else if (signal_color === "Green") {
//     alert("Move now");
// }
// else {
//     alert("Please enter correct answer");
// }

// //====== Chapter # 9-11   task 4
// var fuel = +prompt("Enter car fuel");
// if (fuel <= "0.25") {
//     alert("Please refill the fuel in your car");
// }
// else {
//     alert("full fuel in your car");
// }

// //====== Chapter # 9-11   task 5
// var a = 4;
// if (++a === 5) {

//     alert("given condition for variable a is true");// display
// }
// var b = 82;
// if (b++ === 83) {

//     alert("given condition for variable b is true");// no
// }
// var c = 12;
// if (c++ === 13) {

//     alert("condition 1 is true");// no
// }
// if (c === 13) {

//     alert("condition 2 is true");// dispaly
// }
// if (++c < 14) {
//     alert("condition 3 is true");// no
// }
// if (c === 14) {
//     alert("condition 4 is true");// dispaly
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals"); // display
// }
// if (true) {
//     alert("True");// dispaly
// }
// if (false) {
//     alert("False");// no
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");// display
// }

// //====== Chapter # 9-11   task 6
// document.write("<h1>Marks Sheet</h1>");
// var totalmarks = +prompt("Enter your Total marks in three subject");
// document.write("<br>Total marks :" + "" + totalmarks);
// obtained_marks = +prompt("Enter your Obtained Marks ");
// document.write("<br>Marks Obtained :" + " " + obtained_marks);

// var percent = (obtained_marks / totalmarks * 100);
// document.write("<br>percentage :" + " " + percent + "%");

// if (percent >= 80 && percent <= 100) {
//     document.write("<br>Grade" + ":" + "A-one")
//     document.write("<br>Remarks : Excellent")
// }
// else if (percent >= 80 && percent <= 100) {
//     document.write("<br>Grade" + ":" + "A")
//     document.write("<br>Remarks : Good")
// }
// else if (percent >= 70 && percent <= 80) {
//     document.write("<br>Grade" + ":" + "B")
//     document.write("<br>Remarks : You need to improve")
// }
// else if (percent <= 60) {
//     document.write("<br>Grade" + ":" + "fail")
//     document.write("<br>Remarks : Sorry")
// }
// else {
//     alert("You didnot write correct percentage")
// }

// //====== Chapter # 9-11   task 5
// var number = 7
// var x = +prompt("guess the secret number(ranging from 1 to 10)");
// if (x === number) {
//     alert("Bingo! Correct answer")
// }
// else if (x === number + 1) {
//     alert("Close enough to the correct answer")
// }
// else {
//     alert("try again")
// }

// //====== Chapter # 9-11   task 8
// var check = +prompt("Enter any number  ");
// if (check % 3 === 0) {
//     alert("number is divisible by 3")
// }

// else {
//     alert("number is not divisible by 3")
// }

// //====== Chapter # 9-11   task 9
// var y = +prompt("Enter number check Even/odd");
// if (y % 2 === 0) {
//     alert("Even")
// }
// else {
//     alert("odd")
// }

//  //====== Chapter # 9-11   task 10
// var T = + prompt("Enter today temperature");
// if (T > 40) {
//     alert("It is too hot outside")
// }
// else if (T > 30) {
//     alert("The Weather today is Normal")
// }

// else if (T > 20) {
//     alert("Today’s Weather is cool")
// }

// else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool")
// }

// //====== Chapter # 9-11   task 11
// var num1 = +prompt("Enter your first value");
// var oper = prompt("Enter your operator");
// var num2 = +prompt("Enter your Secend value");
// var culculate = (num1 + oper + num2);
// document.write( "<hr>"+culculate);
// if (oper === "+") {
//     document.write("<br>Answer  " + "= ", (+num1) + (+num2)+"")
// }
// else if (oper === "-") {
//     document.write("<br>Answer  " + "= ",num1 - num2)

// }
// else if (oper === "*") {
//     document.write("<br>Answer  " + "= " ,num1 * num2)
// }
// else if (oper === "/") {
//     document.write("<br>Answer  " + "= ",num1 / num2) 
// }
// else if (oper === "%") {
//     document.write("<br>Answer  " + "= ",num1 / num2 * 100 + "%")
// }



//====== Chapter # 12-13   task 1
// var userinput = prompt("Enter any character");
// if ((userinput.charCodeAt(0) >= 65) && (userinput.charCodeAt(0) <= 90)) {
//     alert("uper case")
// }
// else {
//     alert("lowere case")
// }

// //====== Chapter # 12-13   task 2
// var x = 5;
// var y = 3 + 2;
// if (y === x || x === y) {
//     alert("integer are equal")
// }
// else {
//     alert("integer are not equal")
// }

// //====== Chapter # 12-13   task 3
// var num = +prompt("Enter number");
// if (num > 0) {
//     alert("Number is POSITIVE");
// }
// if (num < 0) {
//     alert("Number is NEGATIVE");
// }
// if (num == 0) {
//     alert("Number is ZERO");
// }

// //====== Chapter # 12-13   task 4
// var x = prompt("Enter a variable to check it is vowel or not");
// if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//     alert(x + " is a vowel");
// }
// else {
//     alert(x + " is not a vowel");
// }

// //====== Chapter # 12-13   task 5
// var a = "ali123";
// var b =  prompt("Enter your password");

// if (a === " ") {
//    document.write("please enter your password")
// }
// else if (b === a){
//   alert("correct")
// }
// else {
//     alert("in correct")
// }

// //====== Chapter # 12-13   task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good day");
// }
// else {
//     alert(greeting = "Good evening");
// }

// //====== Chapter # 12-13   task 7
// var time = "1900";
// var s = +prompt("Enter now time");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!")
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!")
// }
// else {
//     alert("please enter coreect time")
// }



//====== Chapter # 14-16   task 1
// var studentclass1 = []

//====== Chapter # 14-16   task 2

// var studentclass2 = new arr();

//====== Chapter # 14-16   task 3

// var arr1 = ["hassan", "javed", "shakir"];
// console.log(arr1);

//====== Chapter # 14-16   task 4
// var arr2 = ["10", "20", "30"];
// console.log(arr2);

//====== Chapter # 14-16   task 5
// var arr3 = ["ali"]


//====== Chapter # 14-16   task 6

// var arr4 = ["pakistan", { 1: "lahore", 2: "karachi" }];
// console.log(arr4)

//====== Chapter # 14-16   task 7

// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// document.write("<h1>Qualification </h1><br>");
// document.write(education[0] + "<br>" + education[1] + "<br>" + education[2] + "<br>" + education[3] + "<br>" + education[4] + "<br>" + education[5] + "<br>" + education[6] + "<br>" + education[7]);

//====== Chapter # 14-16   task  8

// var studentname = ["mohsin", "kashif", "header"];
// var marks = [320, 230, 480];
// var totalMarks = 500;

// for (let  i = 0 ; i < studentname.length ; i++ ) {

//     Document.write("Score of " + studentname[i] + "is " + marks[i] + ". Percentage:" + marks[i] / totalMarks * 100 + "<br>");
// }

//====== Chapter # 14-16   task 9

// skip

//====== Chapter # 14-16   task 10

// var scores = ["320","230","480","120"];
// scores.sort();
// console.log(scores);

//====== Chapter # 14-16   task  11

// var city = ["Karachi","Lahore","Islamabad","Quetta","Pashawar"];
// var copycity = city.slice(2,4);
// console.log(city,copycity);

//====== Chapter # 14-16   task 12

// var arr5 = ["This ", "is ",  "my" ,  "cat"];

// document.write("<h1>Array</h1><br>"+arr5);
// document.write("<h1>String</h1><br>"+arr5.join(""));

//====== Chapter # 14-16   task 13

// var device = ["keyboard", "mouse", "printer", "moniter"];
// document.write(device);
// for (var  i = 0 ; i <= 3 ; i++ ) {
// document.write("<br>out :<br>"+device.pop(""));
// }

//====== Chapter # 14-16   task 14

// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// document.write("<select>")
// for (var  i = 0 ; i < phone.length ; i++ ) {
//     document.write("<option>" + phone[i] + "</option>")
//     }
//     document.write("</select>")



// ===== Chapter # 17-20      Tesk # 1

// var arr = [[ ], [], [], []  ]


// ===== Chapter # 17-20      Tesk # 2

// var matrix = [["0 "+ "1 "+ "2 "+ " 3 <br>"] + ["1 " + "0 "+ "1 "+ "2 <br>"]+["2 "+ "1 "+ "0 " +"1 "]];
// document.write("<h1>")
// document.write(matrix + ""); console.log(matrix);


// document.write("</h1>")

// ===== Chapter # 17-20      Tesk # 3

//  document.write("<h1>")
// for (i = 1; i <= 10; i++) {
// document.write( + i + "<br>");
//   }
//   document.write("</h1>");

// ===== Chapter # 17-20      Tesk # 4

// var val = prompt("Enter a number to show it multiplication table");
// var lenght = prompt("Enter a lenght to show it multiplication table")
// document.write("<h1>Multiplication table of "+ val);
//   document.write("<br> Lenght " + lenght  + "</h1>");
// for(var i= 1 ; i<=lenght; i++ ){
//     document.write( val + "x" + i + "=" + val*i + "<br>" );
// }

// ===== Chapter # 17-20      Tesk # 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// var a =0;
// for( a ; a<fruits.length; a++ ){
//   document.write(fruits[a] + "<br>"  );
// }
// document.write("<br>Element at index 0 is "+fruits[0]);
// document.write("<br>Element at index 1 is "+fruits[1]);
// document.write("<br>Element at index 2 is "+fruits[2]);
// document.write("<br>Element at index 3 is "+fruits[3]);
// document.write("<br>Element at index 4 is "+fruits[4]);

// ===== Chapter # 17-20      Tesk # 6

// document.write("<h1> Counting: </h1>" );
// for (var i=1; i<=15; i++) {
//     if (i%1==0) 
//     document.write(i +", ");			
// }

// document.write("<h1> Reverse counting: </h1>" );
// var a=[1,2,3,4,5,6,7,8,9,10]
// document.write(a.reverse());

// document.write("<h1> Even: </h1>" )
// for (var i=0; i<=20; i++) {
//     if (i%2==0) 
//     document.write(i +", ");	
// }
// document.write("<h1> Odd: </h1>" )
// for (var i=1; i<=20; i++) {
//     if (i%2 !==0) 
//     document.write(i +", ");	
// }
// document.write("<h1> Series: </h1>" )
// for (var i=0; i<=20; i++) {
//     if (i%2==0) 
//     document.write(i +"K, ");
// }

// === chapter # 17-20    Task # 7


// var A = ["cake", "apple" ,"pie", "cookie", "hips", "patties"];
// var  search = prompt("Welcome to shahzad sweets.what do yo want order sir/ma'am? ")
// if (A.indexOf(search)!== -1) {
//     alert("Cookie is available " +search+  "in over shop")
// }
// else{
//     alert("we are sorry. "+search+ "  is not available in over shop ")
// }


// === chapter # 17-20    Task # 8

// var A = [24, 53, 78, 91, 12];
// document.write("Array item: "+A)
// document.write( "<br>The largest number is: " +Math.max(...A));

// === chapter # 17-20    Task # 9

// var A = [24, 53, 78, 91, 12];
// document.write("Array item: "+A)
// document.write( "<br>The largest number is: " +Math.min(...A));

// === chapter # 17-20    Task # 10

// for (var i=1; i<=100; i++) {
//     if (i%5==0)
// document.write(i +", ");			
// }


//                     Assignment # 6


///////// Chapter============= # 21-25   Task 1

// var firs = prompt("Enter Your first name");
// var last = prompt("Enter your last name");
// var fullname = firs + " " +last;
// document.write("<h1>");
// document.write (fullname);
// document.write("<h1>");


////////// Chapter =============# 21-25   Task 2

// var mob = prompt("which favorite mobile phone model is yours?");
// document.write("<h1>");
// document.write("My favorite phone is: "+ mob+"<br>");
// document.write("Lenght of string: "+ mob.length);
// document.write("</h1>");


////////// Chapter============= # 21-25   Task 3

//  var pak = "Pakistan";    
//  document.write("<h1>");
// document.write("String is: "+ pak+"<br>");
// document.write("index of 'n': "+pak.indexOf("n"));
// document.write("</h1>");


/////////// Chapter============= # 21-25   Task 4

// var a = "Hello World";
// document.write("<h1>");
// document.write("String is: "+ a+"<br>");
// document.write("List of index 'l': "+ a.lastIndexOf("l"));
// document.write("</h1>");


/// ///////Chapter =============# 21-25   Task 5

// var string = "Pakistani";              
// var res =  string.charAt(3)
// document.write("<h1>");
// document.write("String is: " + string + "<br>");
// document.write("caracter at index 3: " + res);
// document.write("</h1>");




/////////Chapter============= # 21-25   Task 6 (Q1 repeat)

// var firs = prompt("Enter Your first name");
// var last = prompt("Enter your last name");
// var fullname = (firs.concat(last));
// alert (fullname);


///////// Chapter============= # 21-25   Task 7

// var a = "Hayerabad";
// document.write("<h1>");
// document.write("City is: "+ a+"<br>");
// document.write(" After replacment: "+ a.replace("Hayerabad","Islamabad"));
// document.write("</h1>");

////////// Chapter============= # 21-25   Task 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
//  document.write("<h1>");
// document.write(" After replacment: "+ message.replace(/and/gi, "&"));
// document.write("</h1>");

////////// Chapter============= # 21-25   Task 9   

// var value = 472;
// var b = value.toString();
// var num = Number(b);
// document.write("<h1>")
// document.write("value:" + b +"<br>");
// document.write(" Type:"+ "string" +"<br>");
// document.write("value:" + num +"<br>");
// document.write(" Type:"+ "number" +"<br>");
// document.write("</h1>")
// console.log(b)

///////// Chapter============= # 21-25   Task 10

// var val = prompt("enter any word");
// document.write("<h1>")
// document.write("User input: "+ val + "<br>")
// document.write("Upper Case : "+ val.toUpperCase());
// document.write("</h1>")

//////////// Chapter =============# 21-25   Task 11

// var headCase = prompt("Enter any text") ;
// var firstChar = headCase.slice(0,1);
// var otherCase = headCase.slice(1);
// firstChar = firstChar.toUpperCase()
// otherCase = otherCase.toLowerCase()
// var z = firstChar + otherCase;
// document.write("<h1>")
// document.write("User input:" + headCase + "<br>");
// document.write("Title case: "+ z );
// document.write("</h1>")


///////// Chapter============= # 21-25   Task 12

// var  num = 35.36;  
// var val = num.toString()
// var firstChar = val.slice(0,2);
// var otherCase = val.slice(3);
// var z = firstChar + otherCase;
// document.write("<h1>")
// document.write("Number: " + num + "<br>");
// document.write("Result: " + z);
// document.write("</h1>")


/////////// Chapter============= # 21-25   Task 13   

// var username = prompt("Please enter your username");
// for (var i = 0 ; i<username.length ; i++){
//     var char = username.charCodeAt(i)
//     if(char ===33 || char=== 44 || char === 46 || char === 64){
//         document.write("Please enter a vaild username")
//         var matchfound = 1
//         break
//     }
// }
// if (matchfound !== 1){
//     document.write("your username is valid ")
// }


/////////// Chapter============= # 21-25   Task 14

// var A = ["cake", "applepie", "cookie", "hips", "patties"];
// var  search = prompt("Welcome to shahzad sweets.what do yo want order sir/ma'am? ")
// search = search.toLowerCase()
// if (A.lastIndexOf(search)!== -1) {
//     alert("Cookie is available at index of  "+A.lastIndexOf(search)+  "  in over shop")
// }
// else{
//     alert("we are sorry. "+search+ "  is not available in over shop ")
// }


////////// Chapter============= # 21-25   Task 15      


// var password = prompt("Enter your password");

// var passw = /^[A-Za-z]\w{6,}$/;
// if (password.match(passw)) {
//     alert('Correct, try another...')
// }
// else {
//     alert('Wrong...!')
// }


/////////// Chapter============= # 21-25   Task 16

// var university = "University of Karachi"
// var a = university.split("")
// document.write("<h1>")
// for (var i in a) {
//    document.write(" " + a[i]+"<br>");
// }
// document.write("</h1>")



/////////// Chapter============= # 21-25   Task 17   


// var input = prompt("Enter value check last char");
// var strlenght = input.length;
// document.write("<h1>")
// document.write("user input: "+ input + "<br>");
// document.write("last character of input: "+input.charAt(strlenght - 1));
// document.write("</h1>")



///////// Chapter =============# 21-25   Task 18    


// var text = "the quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/g) || [0]).length;
// document.write("<h1>");
// document.write("Text: "+ text+"<br>");
// document.write("There are "+count+ " occurrences of word “the”")
// document.write("</h1>");

///////// Chapter============= # 26-30   Task 1

// var number = prompt("enter postive interger","2.23456");
// document.write("<h1>")
// document.write("Number: "+ number + "<br>")
// document.write("Round of vlue: "+ Math.round(number)+ "<br>")
// document.write("Floor vlue: "+ Math.floor(number)+"<br>")
// document.write("Ceil value: "+ Math.ceil(number))
// document.write("</h1>")

/////////// Chapter============= # 26-30   Task 2



// var number = prompt("enter nagative interger","-2.673");
// document.write("<h1>")
// document.write("Number: "+ number + "<br>")
// document.write("Round of vlue: "+ Math.round(number)+ "<br>")
// document.write("Floor vlue: "+ Math.floor(number)+"<br>")
// document.write("Ceil value: "+ Math.ceil(number))
// document.write("</h1>")



/////// Chapter============= # 26-30   Task 3


// var num = 4;
// document.write("<h1>")
// document.write("The absolute value of -4 is " + Math.abs(num));
// document.write("</h1>")

/////// Chapter============= # 26-30   Task 4

// var  val1 = 4;
// var val2 = 6; 
// var  dice = Math.random(7)*2 ;
// var floor = Math.floor(dice);
// document.write("<h1>")
// if (floor ===0){
//     document.write("random dice vlue: "+ val1 );
// }
// else {
//     document.write("random dice vlue: "+ val2);
// }
// document.write("</h1>")



///////// Chapter============= # 26-30   Task 5

// var val1 = "Heads"
// var val2 = "Tails"
// var coin = Math.random() * 2;
// var floor = Math.floor(coin);
// document.write("<h1>");
// if (floor === 0) {
//     document.write("2 <br>random coin vlue: " + val1);
// }
// else {
//     document.write("1 <br> random coin vlue: " + val2);
// }
// document.write("</h1>");


////////// Chapter============= # 26-30   Task 6


// var count = Math.random()*100;
// var floor = Math.floor(count);
// document.write("<h1>");
// document.write("random number between 1 and 100: "+ floor);
// document.write("</h1>");



///////// Chapter============= # 26-30   Task 7

// var weidht = prompt("Enter your weidth in kilograms")
// document.write("<h1>");
// document.write("The weight of user is " +weidht + " kilograms")
// document.write("</h1>");


/////////// Chapter============= # 26-30   Task 8


// var game = prompt ("Enter a number between 1 and 10")
// var count = Math.random()*10;
// var floor = Math.floor(count);
// console.log(floor)
// if(floor === 7 ){
//     alert("congratulate you win the game")
// }
// else{
//     alert("try again")
// }


///////// Chapter============= # 31-34   Task 1

// var a = new Date();
// document.write("<h1>");
// document.write(a);
// document.write("<h1>");


/////// Chapter============= # 31-34   Task 2


// var month = ["january", "february","March", "April","May", "june","July","Auguest","September","October","November","December"];
// var d = new Date();
// var n = month[d.getMonth()];
// document.write("<h1>");
// document.write("Current month: " + n) 
// document.write("</h1>");


///////// Chapter============= # 31-34   Task 3


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var n = dayNames[d.getDay()];
// document.write("<h1>");
// document.write("This is " + n) 
// document.write("</h1>");


//////// Chapter============= # 31-34   Task 4


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var n = dayNames[d.getDay()];
// document.write("<h1>");
// if(n === "Sun" || n=== "Sat"){
//  document.write("it's Fun Day " ) 
// }
// else{
//     document.write("This is "+n)
// }
// document.write("</h1>");



///////// Chapter============= # 31-34   Task 5


// var d = new Date();
// var n = d.getDate();
// document.write("<h1>");
// if( n <= 16){
//  document.write(" First fifteen days of the month" ) 
// }
// else{
//     document.write("Last days of the month")
// }
// document.write("</h1>");



///////// Chapter============= # 31-34   Task 6   


// var d = new Date();
// var todayMali = d.getTime();
// var acuminit= (todayMali/(1000*60));
// document.write("<h1>");
// document.write("Current Date: " + d + "<br>");
// document.write("Elapsend millisecond since january 1 , 1970: " + todayMali + "<br>");
// document.write("Elapsend minutes since january 1 , 1970: "  + acuminit );
// document.write("</h1>");


///////// Chapter============= # 31-34   Task 7


// var d = new Date();
// var n = d.getHours();
// document.write("<h1>");
// if(n <=12){
//  document.write(" It's AM" ) 
// }
// else{
//     document.write("It's PM")
// }
// document.write("</h1>");



/////////// Chapter============= # 31-34   Task 8

// var d = new Date("December 31, 2020");
// document.write("<h1>");
// document.write("Later date: "+d);
// document.write("</h1>");


////////// Chapter============= # 31-34   Task 9

// var firstRamadan = new Date("April 13 , 2021");
// var ramadanMili = firstRamadan.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var diff = ramadanMili - todayMili;
// var accuday = Math.floor(diff/(1000*60*60*30));
// document.write("<h1>");
// document.write(accuday +" day have passed since 1st Ramadan ,2021");
// document.write("</h1>");



////////// Chapter============= # 31-34   Task 10  


// var start20 = new Date("january 1 ,2020");
// var startmili = start20.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - startmili;
// var accusec = Math.floor(diff / (1000));
// document.write("<h1>");
// document.write("On reference date "+today+ ",<br>");
// document.write(accusec + " seconds had passed since beginning of 2015 ")
// document.write("</h1>");


/////// // Chapter============= # 31-34   Task 11


// var now = new Date();
// var d = new Date();
//  d.setHours(8);
// document.write("<h1>");
// document.write("Current Date: " + now + "<br>");
// document.write("1 hours age, it was "+d)
// document.write("</h1>");



////// // Chapter============= # 31-34   Task 12

// var now = new Date();
// var d = new Date();
//  d.setFullYear(1920);
// alert("Current Date: " + now );
// alert("100 years back, it was "+d)



///// // Chapter============= # 31-34   Task 13


// var dob = new Date(prompt("Enter birth year "," 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage =Math.floor( diff/(1000*60*60*24*30*12));
// document.write("<h1>");
// document.write("Your age is "+ accuage+ "<br>")
// document.write("Your birth year is "+ dob.getFullYear());
// document.write("</h1>");



////////// Chapter============= # 31-34   Task 14


// var custmername = "M javed";
// var month = "june";
// var unit = "410";
// var chargeper = "16";
// var withindue = unit * chargeper;
// var latecharg = "350";
// var afterdue = (6560) + (350);
// document.write("<h1>");
// document.write("K-Electric bill");
// document.write("</h1>");
// document.write("Customer Name: " + custmername.bold() + "<br>")
// document.write("Month: " + month.bold() + "<br>");
// document.write("Number of units: " + unit.bold() + "<br>");
// document.write("Charges per unit: " + chargeper.bold() + "<br>")
// document.write("<br>")
// document.write("Net Amount Payable (within Due Date): " + withindue + "<br>");
// document.write("Late Payment Surcharge: " + latecharg.bold() + "<br>")
// document.write("Gross Amount Payable (after Due Date): " + afterdue);



//////// Chapter============= # 35-38   Task 1

// function date (){
//     var d = new Date();
//     return d;
// }
// document.write(date());



//////// Chapter============= # 35-38   Task 2

// function fullname() {
//     var firs = prompt("Enter Your first name");
//     var last = prompt("Enter your last name");
//     var fullname = firs + " " + last;
//     return fullname;
// }
// document.write(fullname())



///////// Chapter============= # 35-38   Task 3

// function add(a,b){
//      var z = a+b
//      return z;
// }
// var x = add(5,2);
// document.write(x)




///////// Chapter============= # 35-38   Task 4

// function calculater(num1 , oper , num2){
// if (oper === "+") {
//     return num1 + num2

// }
// else if (oper === "-") {
//    return  num1 - num2

// }
// else if (oper === "*") {
//  return   num1 * num2
// }
// else if (oper === "/") {
//   return  num1 / num2
// }
// else if (oper === "%") {
//  return  num1 / num2 * 100 + "%"
// }
// }
// document.write(calculater(2,"+",6))


//////// Chapter============= # 35-38   Task 5

// function square(x) {
//     return x * x;
//   };

//   document.write(square(12));


///////// Chapter============= # 35-38   Task 6

// function factorial(n) {
//     var answer = 1;
//     switch (n) {
//         case n == 0 || n == 1:
//             return answerl
//             break;

//         default:
//             for (var i = n; i >= 1; i--) {
//                 answer = answer * i
//             }
//             return answer;
//             break;
//     }
// }
// var n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);


//////////// Chapter============= # 35-38   Task 7

// function counting() {
// var i = prompt("enter first value")
// var j = prompt("Enter secend value")
//     for ( i ; i <j; i++) {
//      document.write( (i) +"<br>")
//           }
//           return i;
// }
// document.write(counting())


////////// Chapter============= # 35-38   Task 8


// function Hypotenuse(base, perpendicular){
//   return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
// }
// document.write("<h1>");
// document.write("Outer function: ");
// document.write(Hypotenuse( 5, 12));
// document.write("</h1>");


//////////// Chapter============= # 35-38   Task 9


// function area(length, width) {
//     return length * width;
// }
// document.writeln('The area of your rectangle is ' + area(2, 3));      


// ////////Chapter============= # 35-38   Task 10



// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//   document.write ( check_Palindrome("A man, a plan, a canal. Panama"));



//////////// Chapter============= # 35-38   Task 11


// function uppercase(text) {
//     var arr = text.split(" ");
//     var newarr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return newarr.join(" ");
// }
// document.write("<h1>");
// document.write("STRING: "+" the quick brown fox"+"<br>")
// document.write(uppercase("OUTPUT: "+"the quick brown fox"));
// document.write("</h1>");


///////// // Chapter============= # 35-38   Task 12           

// function find_longest_word_in_string(text)
// {
//   var arr = text.match(/\w[a-z]{0,}/gi);
//   var find = arr[0];

//   for(var i = 1 ; i < arr.length ; i++)
//   {
//     if(find.length < arr[i].length)
//     {
//     find = arr[i];
//     } 
//   }
//   return find;
// }
// document.write("<h1>");
// document.write("STRING: "+"Web Development Tutorial"+"<br>")
// document.write("OUTPUT: ")
// document.write(find_longest_word_in_string( "Web Development Tutorial"));
// document.write("</h1>");



//////////// Chapter============= # 35-38   Task 13  


// function foo(a , b){
//     return a+" "+b;

// }
// document.write(foo(" JSResourceS.com","O"))



//////////// Chapter============= # 35-38   Task 14


// function calcCircumference(text,radius) {
//     var radius;
//     var Circumference = (2 * 3.142 * radius);
//     return  text + Circumference;
// }
// document.write(calcCircumference("The circumference is ", 20))

// function calcArea(text,radius) {
//     var radius;
//     var area = (3.142 * (radius*20.0));
//     return  text + area;
// }
// document.write(calcArea("The area is ", 20))




//                Assignmmnt # 9


//////////// Chapter============= # 38-42   Task 1

// function power(a,b){

//    var x= Math.pow(a,b); 
//    return x;
// }
// console.log(power(3,2))


//////////// Chapter============= # 38-42   Task 2

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2020))


//////////// Chapter============= # 38-42   Task 3


// function areaAdd(a,b,c) {
//     var S = (a + b + c) / 2;
//     return S;
// }
// function area(a,b,c){
//     var S = (a + b + c) / 2;
//     var areaValue = Math.sqrt(
//     S* (S - a) * (S - b) * (S- c));
//     return areaValue;
// }
// console.log(" Where 'S  " + areaAdd(2,3,4))
// console.log("area " + area(2,3,4))



//////////// Chapter============= # 38-42   Task 4

// var subject1 = + prompt("Enter 1st subject number");
// var subject2 = + prompt("Enter 2nd subject number");
// var subject3 = + prompt("Enter 3rd subject number");
// var sum = subject1 + subject2 + subject3;  
// function main(){
// return  "Average :  "+ average() +"<br>  persentage :  "+ percentage()
//   }

// function average(){   
//  return sum/3
//   }

//   function percentage(){
// return (sum/300)*100+"%";
//   }
//   document.write(main())


//////////// Chapter============= # 38-42   Task 5

// function welcome(){
//     var username = prompt("Enter your name: ", "");
//     if (alert("Your name is " + username)) {
//        document.write("<h1>Hello, " + username + "!</h1>");
//     } else {
//        document.write("<h1>Hello, world!</h1>");
//     }
// }
// welcome();


//////////// Chapter============= # 38-42   Task 6


// function sentence(arr) {
//     var ans = arr.split(" ");
//     var array = [];
//     for (i = 0; i < ans.length; i++) {
//         for (j = 0; j < ans[i].length; j++) {
//             var vowelAtLast;
//             if (
//                 ans[i][j].toLowerCase() == "a" ||
//                 ans[i][j].toLowerCase() == "e" ||
//                 ans[i][j].toLowerCase() == "i" ||
//                 ans[i][j].toLowerCase() == "o" ||
//                 ans[i][j].toLowerCase() == "u"
//             ) {
//                 vowelAtLast = ans[i][j];
//             }
//         }  
//         var idex = ans[i].lastIndexOf(vowelAtLast);
//         console.log(idex, ans[i], ans[i][idex]);
//         ans[i].replace(ans[i][idex], '')
//         array.push(ans[i])
//         console.log(ans)
//     }
//     console.log(ans)
//     return array.join(" ");
// }

// console.log(sentence("youuo goalo people."));



//////////// Chapter============= # 38-42   Task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     var haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }

//     return count
//   }
//   console.log(findOccurrences());



//////////// Chapter============= # 38-42   Task 8

// var distance = +prompt("Please enter dintance between two city");
// // meter
// function kmTOmeter() {
//     var meter = distance * 1000;
//     return "km to meter : " + meter;
// }
// // feet
// function kmTOfeet() {
//     var feet = distance * 3280.84;
//     return "km to feet : " + feet;
// }
// //inches
// function kmTOinches() {
//     var inches = distance * 39370.1;
//     return "km to inches : " + inches;
// }
// // centimeter
// function kmTOcentimeter() {
//     var centimeter = distance * 100000;
//     return "km to centimeters : " + centimeter;
// }
// document.write(kmTOmeter() + "<br>");
// document.write(kmTOfeet() + "<br>");
// document.write(kmTOinches() + "<br>");
// document.write(kmTOcentimeter());


//////////// Chapter============= # 38-42   Task 9

// function overtimePay(){
//     var Working_Hours = +prompt("Enter employee working hours");
//     var over_Time_Pay ;
//     var over_time;
//     if(Working_Hours > 40){
//          over_time  = Working_Hours - 40;
//          over_Time_Pay = over_time * 12.00;
//          console.log(over_time);
//          alert("Employee  overtime pay Rs: "+ over_Time_Pay);
//     }
//     else {
//         alert("You have to work for more than 40 hours to get over time pay")
//     }

// }
// overtimePay()


//////////// Chapter============= # 38-42   Task 10

// function currencyDenomination(){
//     var amount = +prompt("Enter amount to withdraw !!!");

//     var hundred =( amount / 100);
//     hundred = Math.floor(hundred);
//     var fifty =(amount % 100) / 50;
//     fifty = Math.floor(fifty);
//     var ten =  (((amount % 100) % 50) / 10);
//     ten = Math.floor(ten);
//   return  "You wil have "+ hundred + " hundred notes " + fifty + " fifty notes " + ten  +" ten notes"  
// } 
// document.write(currencyDenomination())



//////////// Chapter============= # 43-48   Task 1

// function clickMe(){     // link on click html line no 23
//     alert("Hello World!")
// }


//////////// Chapter============= # 43-48   Task 2

// function thanks(){         //  Image html line no 28
//     alert("Thanks for purchasing a phone from us")
// }


//////////// Chapter============= # 43-48   Task 3

// function deleteRow(o) {    // table html line no 46
//  alert("Are you  delete this row")
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
// }

//////////// Chapter============= # 43-48   Task 4

// function changeImage(id,src){     // image change html line no 80
//     var image = document.getElementById(id);
//     image.src = src
// }

//////////// Chapter============= # 43-48   Task 5

//increase
// var clicks = 0;  // counter html line no 81
// function increase() {  
//     clicks += 1;
//   var increase = document.getElementById("clicks");
//   increase.value = clicks
// }
// // decrease
// var clicks = 0;
// function decrease() {
//     clicks -= 1;
//   var decrease = document.getElementById("clicks");
//   decrease.value = clicks
// }




//////////// Chapter============= # 40-52   Task 1

// function foo() {    // html line no 86
//     var firstName = document.getElementById('firstname').value;
//     var lastName = document.getElementById('lastname').value;
//     var age = document.getElementById('age').value;
//     var email = document.getElementById('email').value;
//     var contect = document.getElementById('contect').value;
//     var gender = document.getElementById('gender').value;
//     var city = document.getElementById('city').value;

//     var first = document.getElementById('first');
//     var out_lastName = document.getElementById('out_lastname')
//     var out_age = document.getElementById('out_age')
//     var out_email = document.getElementById('out_email')
//     var out_contect = document.getElementById('out_contect')
//     var out_gender = document.getElementById('out_gender')
//     var out_city = document.getElementById('out_city')


//    first.innerHTML= firstName;
//    out_lastName.innerHTML=lastName;
//    out_age.innerHTML=age;
//    out_email.innerHTML=email;
//    out_contect.innerHTML=contect;
//    out_gender.innerHTML=gender;
//    out_city.innerHTML=city;
// }
//////////// Chapter============= # 40-52   Task 2

// function readMore() {   // html line no 161
//     var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ex officia corporis sint saepe perspiciatis, eius explicabo, aperiam voluptate velit quas deleniti a in! Iure minus blanditiis excepturi dolorum soluta?"
//     var paragraf = document.getElementById('para');
//     paragraf.innerHTML = text
// }


//////////// Chapter============= # 40-52   Task 3

// function edit_row(no) {     // html line no 165
//     var edit = document.getElementById("edit_button" + no);
//     edit.style.display = "none";
//     var save = document.getElementById("save_button" + no)
//     save.style.display = "block";

//     var index = document.getElementById("index_row" + no);
//     var name = document.getElementById("name_row" + no);
//     var classs = document.getElementById("class_row" + no);

//     var index_std = index.innerHTML;
//     var name_std = name.innerHTML;
//     var class_std = classs.innerHTML;

//     index.innerHTML = "<input type='number' id='index_num" + no + "' value='" + index_std + "'>";
//     name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_std + "'>";
//     classs.innerHTML = "<input type='text' id='class_text" + no + "' value='" + class_std + "'>";
// }

// function save_row(no) {
//     var index_val = document.getElementById("index_num" + no).value;
//     var name_val = document.getElementById("name_text" + no).value;
//     var class_val = document.getElementById("class_text" + no).value;

//     document.getElementById("index_row" + no).innerHTML = index_val;
//     document.getElementById("name_row" + no).innerHTML = name_val;
//     document.getElementById("class_row" + no).innerHTML = class_val;

//     document.getElementById("edit_button" + no).style.display = "block";
//     document.getElementById("save_button" + no).style.display = "none";
// }

// function delete_row(o) {
//     alert("Are you  delete this row")
//     var remove = o.parentNode.parentNode;
//     remove.parentNode.removeChild(remove);
// }


//////////// Chapter============= # 52-57   Task 1

// function showImage(pic){     // html line no 212
// var model = document.getElementById('modelImage');
// model.src = pic.src
// }

//////////// Chapter============= # 52-57   Task 2

// var fontSize = 10;     //html line no 234
// function zoomin(){
//   var pera = document.getElementById("pera");
//   fontSize += 10;
// 	pera.style.fontSize = fontSize + "px";

//   // pera.style.fontSize ='2em'
// }
// function zoomout(){
//   var pera = document.getElementById("pera");
//   var pera = document.getElementById("pera");
//   fontSize -= 10;
// 	pera.style.fontSize = fontSize + "px";
// }

//////////// Chapter============= # 58-67   Task 1


// var div = document.getElementById('main-content');
// var p = div.getElementsByClassName('render')
// // fil input first name
// var input1 = document.getElementById('first-name');
// input1.value = "Alex";
// // fil input last name
// var input2 = document.getElementById('last-name');
// input2.value = "Bank";
// // fil input value email
// var input = document.getElementById('email');
// input.value = "alexbank@example.com";


//////////// Chapter============= # 58-67   Task 2
// sir ya task ma na console ma kya ha  answer console ma ha  please open console

// // point no(i)
// var formContent = document.getElementById('form-content');
// console.log(formContent.nodeType) // check browser console 
// point no(ii)
// var lastName = document.getElementById('lastName');
// console.log(lastName.nodeType);// check browser console
// console.log(lastName.innerHTML)// check browser console
// // point no(iii)
// var lastName = document.getElementById('lastName');
// console.log (lastName.innerHTML = "Last Name : Ali")// check browser console
// // point no(iv)
// var mainContent = document.getElementById('main-content');
// console.log(mainContent.firstChild);// check browser console
// console.log(mainContent.lastChild);// check browser console
// // point no(v)
// var lastName = document.getElementById('lastName');
// // next sibling
// console.log(lastName.nextSibling); // check browser console
// // priveios sibling
// console.log(lastName.previousSibling);// check browser console
// // point no(vi)
// var email = document.getElementById('email');
// console.log(email.parentNode);// check browser console
// console.log(email.nodeType);// check browser console


//                   The End! 