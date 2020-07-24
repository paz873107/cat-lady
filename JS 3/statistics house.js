var r = data.results[0].members

var statistics= 
{
  "democrats": [],
  "republicans": [],
  "independents": 0,
  "total": "", 
  "avg_democrats": 0,
  "avg_republicans": 0,
  "avg_independents":0,
  "total_avg": 0,
  "least_engaged": [],
  "most_engaged": [],
  "least_loyal": [],
  "most_loyal": []
}
// crear una lista o un contador

 
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="R") {
   statistics.republicans++
  
   
 }
  
}
console.log(statistics.republicans);


for (let index = 0; index < r.length; index++) {
  if (r[index].party=="D") {
    statistics.democrats++
        
  }
 
} 
console.log(statistics.democrats);


for (let index = 0; index < r.length; index++) {
  if (r[index].party=="I") {
    statistics.independents++
    
  }  
}
console.log(statistics.independents);


var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="R" ) {
   total= total+r[index].votes_with_party_pct
 }
 
}
statistics.avg_republicans=total/statistics.republicans
console.log(parseInt(statistics.avg_republicans));


var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="D" ) {
   total= total+r[index].votes_with_party_pct
 }
 
}
statistics.avg_democrats=total/statistics.democrats

console.log(parseInt(statistics.avg_democrats));

var ivote= 0
var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="I" ) {
   total= total+r[index].votes_with_party_pct
 }
 
}
if (statistics.independents==0) {
  statistics.avg_independents =0 

}else {
  statistics.avg_independents=total/statistics.independents+"%"
}  

console.log(statistics.avg_independents);

statistics.total= 
    parseInt(statistics.republicans) + parseInt(statistics.democrats) + parseInt(statistics.independents)
    
statistics.total_avg=
(statistics.avg_democrats+statistics.avg_republicans)/2
   

var tabla = "";

  tabla +=     "<tr><td>" + "Republicans" + "</td>"+
               "<td>" + statistics.republicans + "</td>"+
               "<td>" + statistics.avg_republicans.toFixed(2) + "%"+ "</td>"+
               "</tr>"+
               "<tr><td>" + "Democrats" + "</td>"+
               "<td>" + statistics.democrats + "</td>"+
               "<td>" + statistics.avg_democrats.toFixed(2)+ "%"+"</td>"+
                "</tr>"+
              "<tr><td>" + "Independents" + "</td>"+
                "<td>" + statistics.independents + "</td>"+
                "<td>" + statistics.avg_independents.toFixed(2) + "%" + "</td>"+
                "<tr><td>" + "Total" + "</td>"+
                "<td>" + statistics.total + "</td>"+
                "<td>" + statistics.total_avg.toFixed(2) + "%" + "</td>"+
                "</tr>";
document.getElementById("house-attendance").innerHTML=tabla;

data.results[0].members.sort((a, b) => {

  return a.vote - b.missed_votes_pct;

});
console.log(data.results[0].members)


var tenpercentmost= Math.round(10*statistics.total/100);
console.log(tenpercentmost);

for (let index = 0; index < tenpercentmost; index++) {
statistics.most_engaged.push(data.results[0].members[index]);

}
console.log(statistics.most_engaged[0]);

data.results[0].members.sort((b, a) => {

return b.missed_votes_pct + a.missed_votes_pct;

});
console.log(data.results[0].members)

var tenpercentleast= Math.round(10*statistics.total/100);
console.log(tenpercentleast);

for (let index = 0; index < tenpercentmost; index++) {
statistics.least_engaged.push(data.results[0].members[index]);

}
console.log(statistics.least_engaged[0]);

statistics.least_engaged.sort ( (a,b) => {
return b.missed_votes_pct - a.missed_votes_pct;
});

var tabla2 = "";

for (var a = 0; a < statistics.least_engaged.length; a++) {
  tabla2 += "<tr><td>"+ statistics.least_engaged[a].last_name +" "+ statistics.least_engaged[a].first_name +" "+ (statistics.least_engaged[a].middle_name !==null ? statistics.least_engaged[a].middle_name : " ") +"</a></td>"+
                "<td>" + statistics.least_engaged[a].missed_votes + "</td>"+
                "<td>" + statistics.least_engaged[a].missed_votes_pct + "%" +"</td>"+
                "</tr>";
} 
// document.getElementById("house-attendance-least").innerHTML= tabla2;

statistics.most_engaged.sort ( (a,b) => {
return a.missed_votes_pct - b.missed_votes_pct;
});

var tabla3 = "";

for (var a = 0; a < statistics.most_engaged.length; a++) {
  tabla3 += "<tr><td>"+ statistics.most_engaged[a].last_name +" "+ statistics.most_engaged[a].first_name +" "+ (statistics.most_engaged[a].middle_name !==null ? statistics.most_engaged[a].middle_name : " ") +"</a></td>"+
                "<td>" + statistics.most_engaged[a].missed_votes + "</td>"+
                "<td>" + statistics.most_engaged[a].missed_votes_pct + "%" +"</td>"+
                "</tr>";
} 

// document.getElementById("house-attendance-most").innerHTML= tabla3;

data.results[0].members.sort((a, b) => {

  return b.votes_with_party_pct - a.votes_with_party_pct;

}); 
console.log(data.results[0].members)

var tenpercentmost= Math.round(10*statistics.total/100);
console.log(tenpercentmost);

for (let index = 0; index < tenpercentmost; index++) {
  statistics.most_loyal.push(data.results[0].members[index]);
  
}
console.log(statistics.most_loyal[0]);

data.results[0].members.sort((b, a) => {

  return b.votes_with_party_pct + a.votes_with_party_pct;

});
console.log(data.results[0].members)

var tenpercentleast= Math.round(10*statistics.total/100);
console.log(tenpercentleast);

for (let index = 0; index < tenpercentleast; index++) {
  statistics.least_loyal.push(data.results[0].members[index]);
  
}
console.log(statistics.least_loyal[0]);

statistics.least_loyal.sort ( (a,b) => {
  return a.votes_with_party_pct - b.votes_with_party_pct;
});

var tabla4 = "";

for (var a = 0; a < statistics.least_loyal.length; a++) {
    tabla4 += "<tr><td>"+ statistics.least_loyal[a].last_name +" "+ statistics.least_loyal[a].first_name +" "+ (statistics.least_loyal[a].middle_name !==null ? statistics.least_loyal[a].middle_name : " ") +"</a></td>"+
                  "<td>" + statistics.least_loyal[a].total_votes + "</td>"+
                  "<td>" + statistics.least_loyal[a].votes_with_party_pct + "%" +"</td>"+
                  "</tr>";
} 
document.getElementById("house-least-loyal").innerHTML= tabla4;

statistics.most_loyal.sort ( (a,b) => {
  return b.votes_with_party_pct - a.votes_with_party_pct;
});

var tabla5 = "";

for (var a = 0; a < statistics.most_loyal.length; a++) {
    tabla5 += "<tr><td>"+ statistics.most_loyal[a].last_name +" "+ statistics.most_loyal[a].first_name +" "+ (statistics.most_loyal[a].middle_name !==null ? statistics.most_loyal[a].middle_name : " ") +"</a></td>"+
                  "<td>" + statistics.most_loyal[a].total_votes + "</td>"+
                  "<td>" + statistics.most_loyal[a].votes_with_party_pct + "%" +"</td>"+
                  "</tr>";
} 

document.getElementById("house-most-loyal").innerHTML= tabla5; 



