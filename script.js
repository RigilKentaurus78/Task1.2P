// String methods
var str = "George Michael";
var strLength = str.length;
var upperCaseStr = str.toUpperCase();
var lowerCaseStr = str.toLowerCase();
var slice = str.slice(7)
var replacedStr = str.replace("George Michael", "Georgios Kyriacos Panayiotou");

// Number methods
var num = 1984.1984;
var numberAsString = num.toString()
var fixedNum = num.toFixed(2);
var exponentialString = num.toExponential(2)
var precisionNumber = num.toPrecision(2)
var hexString = num.toString(16);

// Array methods
var artistname = ["Georgios", "Kyriacos", "Panayiotou", "1984", "2016"];
var firstname = artistname[0];
var lastIndex = artistname.length - 1;
var joinedName = artistname.join(", ");
var poppedName = artistname.pop();
var indexOfName = artistname.indexOf("Kyriacos");

// Date methods
var CurrentDate = new Date();
var year = CurrentDate.getFullYear();
var month = CurrentDate.getMonth();
var time = CurrentDate.getTime();
var hrs = CurrentDate.getMilliseconds();
var min = CurrentDate.getMinutes();

// Function methods
function greet(name) {
  return "Great Music, " + name + "!";
}
var greeting = greet("George");

var sum = function(x, y) {
  return x * y;
};

var total = sum(19, 84);

// SO that the the variables can get printed in the HTML file
document.getElementById("strLength").innerText = strLength;
document.getElementById("upperCase").innerText = upperCaseStr;
document.getElementById("lowerCase").innerText = lowerCaseStr;
document.getElementById("sliceStr").innerText = slice; 
document.getElementById("replacedStr").innerText = replacedStr;

document.getElementById("numberAsString").innerText = numberAsString;
document.getElementById("fixedNum").innerText = fixedNum;
document.getElementById("exponentialString").innerText = exponentialString;
document.getElementById("precisionNumber").innerText = precisionNumber;
document.getElementById("hexString").innerText = hexString;

document.getElementById("firstname").innerText = firstname;
document.getElementById("lastIndex").innerText = lastIndex;
document.getElementById("joinedName").innerText = joinedName;
document.getElementById("poppedName").innerText = poppedName; 
document.getElementById("indexOfName").innerText = indexOfName;

document.getElementById("year").innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("time").innerText = time;
document.getElementById("hrs").innerText = hrs;
document.getElementById("min").innerText = min;

document.getElementById("greeting").innerText = greeting;
document.getElementById("total").innerText = total;

