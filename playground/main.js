var MyName = "Paz";
console.log(MyName);

var age = 32;
console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

var number = 21;
if (age > 21) {
  console.log("you are older than 21");
} else {
  console.log("you are not older than 21");
}


if (age > ignasiAge) {
  console.log("you are older than Ignasi");
} else if (age < ignasiAge) {
  console.log("you are younger than Ignasi");
} else {
  console.log("you are the same age as Ignasi");
}



var names = ["Priscila", "Germán", "Alana", "Octavio", "Rebecca"];
console.log(names.length);
names.sort();
console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names);


for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}
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


for (let index = 0; index < ages.length; index++) {
  console.log(ages[index]);
}


function hyp(a, b) {
  console.log(Math.sqrt(a * a + b * b));
}
hyp(3, 4);


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




var myColor = ["Red", "Green", "White", "Black"]
var x = myColor.toString()
console.log(x);


var i = "35";
var reversed = "";
function reverse(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}
reverse(i);


function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("supercalifragilistico"));


function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));  
  }
  return newarray1.join(' ');
}
console.log (uppercase("prince of persia"));



function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++) 
  {
    if(result.length < array1[x].length) 
    {
     result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));







