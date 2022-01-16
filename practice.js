// alert ( "Parker likes making TikToks" ); //chapter one

// var name = "Parker";// chapter two
// var nationality; 
// nationality = "United States";
// alert (name);
// alert ("His nationality is the " + nationality); //chapter two

// var weight = 185; //chapter three 
// var projectedweight = weight + 10;
// var newWeight = projectedweight; // using camel case from chapter 4 
// alert ("His current weight is " + weight);
// alert  ("His projected weight at 27 is " + newWeight); //chapter three

// var hairColor; // using camelcase from chapter 4
// hairColor = "Bald"; 
// alert (hairColor); // camelcase from chapter 4 

// alert (2+5); //chapter 5 math expressions 
// var seven = 7;
// alert (seven); 
// var eight = 4+4;
// alert (eight); 
// var eighteen = 6 * 3; 
// alert (eighteen); 
// var three = 4-1;
// alert (three); 
// var ten = 100/10;
// alert (ten); 
// var answerOne = 15 % 4;
// alert (answerOne); //chapter 5 math expressions 

// var num = 1; // chapter 6 
// var newNum = ++num; // this adds one to var num displays 2
// alert (newNum);  // chapter 6 unfamiliar expression

// // chapter 7 
// var total = 3 + (8 * 8); // = 67
// var totalTwo = (4 + 4) * 4; // = 32
// var totalThree = ((1 * 3) * 4) + 5 // = 17
// var totalFour = (5 * 5) - (6 / 2) // = 22
// alert (total);
// alert (totalTwo);
// alert (totalThree);
// alert (totalFour); // chapter 7 

// // chapter 8
// var userName = "iPOD"; // needs to be above alert or will return "undefined for userName"
// alert ("Your welcome, " + userName + "!");
// var header = "Two"; 
// var customAlert = userName + header; 
// alert(customAlert); //concatenation 

// alert("1" + "1"); // displays 11 
// // chapter 8 

// // chapter 9 prompt code 
// var question = "Your favorite color?";
// var defAnswer = "Blue";
// var output = prompt(question, defAnswer);  //displays prompt with question and answer Blue already there

// var numberofDogs = prompt("How many dogs do you have?");
// var toomanyDogs = numberofDogs + 1; 
// alert (toomanyDogs); // displays whatever number input with one added to the end of it
// // chapter 9 

// chapter 10 IF STATEMENTS
// var goat = prompt("Who is GOAT in reggaeton?");
// if (goat === "bad bunny") {
//     alert ("YA TU SABES"); 
// }
// simple if statement 
// chapter 10

// chapter 11 comparison operators 
// === is a comparison operator
// there are various other ones

// // chapter 12 if else..else if
// var x = prompt("Where is Bad Bunny from?");
// if (x === "puerto rico") {
//     alert ("BUEN HECHO!");
// }
// // if (x !== "puerto rico"){ 
//     else if (x === "Puerto Rico") {
//     alert("LO ESCRIBISTE MAL");
// }
// else { 
//     alert("TE EQUIVOCASTE")
// }

// // chapter 13 
// var birthDate = prompt("What is Bad Bunny's Birthday?");
// var age = prompt("What is Bad Bunny's age?"); 
// if (birthDate === "March 10th 1994" && age === "27") {
//     alert ("CORRECTO"); 
// }
// else {
//     alert("TU NO SABES NADA"); 
// }

// var albums = prompt("How many albums does he have?"); 
// if (albums >= "5" || albums < "6") {
//  alert ("SIIII");
// }
// // chapter 13 

// chapter 14 complicated jaja

// // chapter 15 Arrays
// var album1 = "x 100pre";
// var album2 = "OASIS";
// var album3 = "YHLQMDLG";
// var album4 = "Las que no iban a salir";
// var album5 = "El Ultimo Tour Del Mundo"; 

// alert ("His first album was " + album1);

// var albums = ["x 100pre", "OASIS", "YHLQMDLG", "Las que no iban a salir", 
// "El Ultimo Tour Del Mundo"
// ]; 

// alert ("His second album was " + albums[1]);

// var benitoInfo = ["Benito Antonio Martinez Ocasio", "27 Years Old", "From Puerto Rico",
// "First album X 100pre", "Has two brothers"
// ];

// alert (benitoInfo); // must put [x] to display specific element in array
// // chapter 15

// chapter 16 arrays adding and removing 
// var tracklistX100pre = [];
// tracklistX100pre[0] = "ni bien ni mal";
// tracklistX100pre[1] = "200 mph"; 
// tracklistX100pre[2] = "quien tu eres"; 
// tracklistx100pre[3] = "caro";
// tracklistX100pre[4] = "tenemos que hablar"; 
// alert (tracklistX100pre); 
// chapter 16 

// chapter 17 adding and removing elements 
// splices will come back if needed

// chapter 18
// var favoriteTrack = prompt ("What is your favorite badbunny track?")
// favoriteTrack = favoriteTrack.toLowerCase(); // chapter 21 to make it possible if entered different
// if (favoriteTrack === tracklistX100pre[1]) {
//     alert("This track is on X 100pre")
// }
// else {
//     alert("This is not on X 100pre")
// }

// for (var i = 0; i<= 0; i++) {
//     if (favoriteTrack === tracklistX100pre[i]) {
//         alert("This song is on X 100pre");
//     }
//     else {
//         alert("This song is not on X 100pre"); 
//     }
// }

// chapter 19 for loops flags boolenas array length and loopus 
// boolean values false and true
// var numTracks = tracklistX100pre.length; 
// var trackFound = false; 
// for (var i = 0; i< numTracks; i++) {
//     if (favoriteTrack === tracklistX100pre[i]) {
//         trackFound = true; 
//         alert("This song is on X 100pre");
//         break; // this stops the loop
//     }
// }
//     if (trackFound === false) {
//         alert("This song is not on X 100pre"); 
//     }
// chapter 19 

// chapter 20 
// var firstNames = ["Daddy ", "Nicky ", "Bad ", "Myke "]; 
// var lastNames = ["Yankee ", "Jam ", "Bunny ", "Towers "]; 
// var fullNames = []; 
// for (var i = 0; i <first-fullNames.length; i++) {
//     for (var j = 0; j < last-fullNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]); 
//     }
// }
// alert (fullNames); 
// chapter 20 

// chapter 22 slice method
// var firstChar = trackToCheck.slice(0, 1); 
// var otherChars = trackToCheck.slice(1); 
// firstChar = firstChar.toUpperCase(); 
// otherChars = otherChars.toLowerCase(); 
// var cappedTrack = firstChar + other-Chars; 
// chapter 22 

// chapter 23 will come back to when useful 
// chapter 23

// chapter 24 finding characters in certain spots 
// var eighthTrack = "Si Estuviesemos Juntos"; 
// var firstLetra = eighthTrack.charAt(0); 
// alert (eighthTrack); 
// chapter 24 come back to when useful. 

// chapter 25 
// var favoriteAlbum = prompt("Cual album es tu favorito de Bad Bunny?");
// var newText = text.replace("YHLQMDLG"); 
// if (favoriteAlbum === "YHLQMDLG") {
//      alert ("Yo Hago Lo Que Me Da La Gana") }
// else {
//     alert ("Que chevere")
// }
// chapter 25

// chapter 26 
// var numberOfStars = Math.round(score-Avg); 
// var scoreAvg = Math.ceil(.000003); // rounds number up
// var testAvg = Math.floor(.00004); // rounds number down 
// alert (scoreAvg); 
// alert (testAvg); 
// chapter 26 

// chapter 27 
// var randomNumber = Math.random(); 
// var bigDecimal = Math.random (); 
// var improvedNum = (bigDecimal * 6) + 1; 
// var numberOfStars = Math.floor(improvedNum); 
// chapter 27 

// chapter 28 
// alert (soyPeor); 
// var soyPeor = prompt("What is Badbunny's first single?"); 
// chapter 28 

// chapter 29
// var integerString = "24"; // converts string to number 
// var numOne = Number(integerString); 
// alert  (numOne); 

// var floatingNumString = "24.9876"; // converts string to number
// var num = Number(floatingNumString); 
// alert (num); 

// var numberAsNumber = 7777; 
// var numberAsString = numberAsNumber.toString(); 
// alert (numberAsString); 
// chapter 29 

// chapter 30 
// var prettyTotal = total.toFixed(2); //rounds number two decimal places
// var currencyTotal = 17.4332; 
// chapter 30

// chapter 31 
// var today = new Date(); //
// alert (today); //
// chapter 31 date and time 

// chapter 32 
// var hour = d.getHours(); 
// alert (hour); 
// chapter 32 

// chapter 33
// var day = new Date("");
// alert (day); 
// chapter 33

// chapter 34 
// var d = new Date(); 
// d.setFullYear(2001); 
// chapter 34

//chapter 35 
// var now = new Date ();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert ("time: " + theHr + ":" + theMin); 

// function tellTime() {

//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: "+ theHr + ":" + theMin);

// }
// chapter 35

