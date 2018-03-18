
// **** EXERCISE 5 - INTRO TO JAVASCRIPT PART 2 **** //


//PARTNER EXERCISE 1
//simple program that loops through the array and console.logs the name of each restaurant.
var restaurants =["Miznon", "Port Said", "Vitrina", "Cafe Xoho", "Taqueria"];
for (var number = 0; number <= restaurants.length; number ++) {
  console.log(restaurants[number]);
}

//PARTNER EXERCISE 2
//simple program to find the average of an array of integers
var array = 
[11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
var averge = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i]; 
}
averge = sum / array.length;
console.log(averge);

//PARTNER EXERCISE 3
//simple program to join all elements of the following array:
var myColor = ["Red", "Green", "White", "Black"];
var join = "";
for (var i = 0; i < myColor.length; i++) {
  join += myColor[i];
  if (i < myColor.length -1) {
	  join += ' + ';
  }
  
}
console.log(join);

//PARTNER EXERCISE 4
//program which accepts a number as a string and inserts dashes (-) //between each two even numbers

function inserts_dashes (strInput) {
	console.log(strInput);	
//var strInput = "7286924"//prompt("Please enter your mumber as a string");
var strOutput = "";
	for (var i = 0; i < strInput.length-1; i++) {
			
			if (parseInt(strInput.charAt(i)) % 2 == 0 && parseInt(strInput.charAt(i+1)) % 2 == 0) {
				strOutput += parseInt(strInput.charAt(i)).toString() + '-' ;
				}
			else{
				strOutput += parseInt(strInput.charAt(i)).toString();
				}
			if(i == strInput.length-2)	{
				strOutput += strInput.charAt(strInput.length-1);
				}
			}
			console.log(strOutput);
}
inserts_dashes ("0246886420"); // only even numbers				
inserts_dashes ("7286014"); // many even numbers	
inserts_dashes ("7286924"); // many even numbers
inserts_dashes ("7586924");//with even numbers et and and middle
inserts_dashes ("2854697"); //with even numbers et begin and middle
inserts_dashes ("2584697"); // with even numbers et middle
inserts_dashes ("5274562"); // with even numbers et end
inserts_dashes ("0251838");// with even numbers et begin

//PARTNER EXTENSION 1 (OPTIONAL)
//program that find the most frequently occuring item of an array
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


var mf = 1;
var m = 0;
var item;
for (var i = 0; i < array.length; i++) {
	for (var j = i; j < array.length; j++) {
        if (array[i] == array[j]){
            m++;
			}
        if (mf < m){
			mf = m; 
			item = array[i];
		}
	}
	m=0;
}

console.log(item+" ( " +mf +" times ) ") ;

//PARTNER EXTENSION 2 (OPTIONAL)
//Find the missing number in the following shuffled integer array of 1 to 200

var numbers =  [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]
//first solutions.
var expectedSum = (200 * (200 + 1)) / 2;
var actualSum = 0;

// Show the difference
for (var i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}

console.log(expectedSum - actualSum);

// secend solutions.
var arrayLength = Math.max.apply(Math, numbers);
var missing = 0;

for ( var i = 1; i < arrayLength; i++ ) {
    if ( numbers.indexOf(i) < 0 ) {
		missing = i ;
		break;
    }
}

console.log( missing );