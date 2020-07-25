// Playing with variables to log ages and the difference between two different values
var MyName = "Paz";
console.log(MyName);

var age = 32;
console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

// First conditional ever
var number = 21;
if (age > 21) {
  console.log("you are older than 21");
} else {
  console.log("you are not older than 21");
}

// More conditionals, more playing with basic math
if (age > ignasiAge) {
  console.log("you are older than Ignasi");
} else if (age < ignasiAge) {
  console.log("you are younger than Ignasi");
} else {
  console.log("you are the same age as Ignasi");
}

// .length and .sort 101
var names = ["Priscila", "Germán", "Alana", "Octavio", "Rebecca"];
console.log(names.length);
names.sort();
console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names);

// My very first for loop
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

// Logging even numbers using loops and conditionals
var ages = [32, 18, 19, 22, 19, 17];
function nom(a) {
  console.log(a.length);
  var i = 0;
  while (i < a.length) {
    if (a[i] % 2 == 0) {
      console.log("Es número par:" + a[i]);
    }
    i++;
  }
}
nom(ages);

// Logging the values of an array one by one
for (let index = 0; index < ages.length; index++) {
  console.log(ages[index]);
}

// using the Math library to get the square root
function hyp(a, b) {
  console.log(Math.sqrt(a * a + b * b));
}
hyp(3, 4);

// getting the lowest number of the array
function minimo(d) {
  var min = d[0];
  for (let index = 1; index < d.length; index++) {
    if (d[index] < min) {
      min = d[index];
    }
  }
  console.log(min);
}
minimo(ages);

//getting the biggest number of the array
function maximo(d) {
  var max = d[0];
  for (let index = 1; index < d.length; index++) {
    if (d[index] > max) {
      max = d[index];
    }
  }
  console.log(max);
}
maximo(ages);

// Print the value at the given position
var array = [5, 67, 75, 3, 100, 28];
var index = 2;
function whatever(array, j) {
  for (let index = 0; index < array.length; index++) {
    if (index == j) {
      console.log(array[j]);
    }
  }
}
whatever(array, index);



// get only the repeated numbers
function repetidos(array) {
  var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
  var dupl = [];
  for (var i = 0; i < array.length; i++) {
    for (var x = i; x < array.length; x++) {
      if (i!=x && array[i]==array[x]) {
        dupl.push.apply(array[i])
        console.log(array[i]);
      }
      
    }

  }
}
repetidos(array);

// turn the array into a string
var myColor = ["Red", "Green", "White", "Black"]
var x = myColor.toString()
console.log(x);

// reverse the string
var i = "35";
var reversed = "";
function reverse(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}
reverse(i);

// order alphabetically
function alphabet_order(str){
  return str.split('').sort().join('');
}
console.log(alphabet_order("supercalifragilistico"));

// turn the first letter of each word into upper case
function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));  
  }
  return newarray1.join(' ');
}
console.log (uppercase("prince of persia"));


// Find the longest word in the array
function find_longest_word(str){
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++) {
    if(result.length < array1[x].length) {
     result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));







