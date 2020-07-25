var r = data.results[0].members

var statistics= 
{
  "democrats": [],
  "republicans": [],
  "independents": 0,
  "total": 0,
  "avg_democrats": 0,
  "avg_republicans": 0,
  "avg_independents":0,
  "total_avg": 0,
  "least_votes": [],
  "least_engaged": [],
  "most_votes": [],
  "most_engaged": [],
  "least_loyal": [],
  "most_loyal": []
}


// with the following functions I prepared all the data that I needed to display the info in the html tables. The first 
// three are the ones that will be useful to display the number of senators by party
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="R") {
   statistics.republicans++
  } 
}

for (let index = 0; index < r.length; index++) {
  if (r[index].party=="D") {
    statistics.democrats++     
  } 
} 


for (let index = 0; index < r.length; index++) {
  if (r[index].party=="I") {
    statistics.independents++  
  }  
}

// These are meant to display the percentage of votes with party of each party 

var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="R" ) {
   total= total+r[index].votes_with_party_pct
 } 
}
statistics.avg_republicans=total/statistics.republicans

var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="D" ) {
   total= total+r[index].votes_with_party_pct
  } 
}
statistics.avg_democrats=total/statistics.democrats

var total= 0
for (let index = 0; index < r.length; index++) {
 if (r[index].party=="I" ) {
   total= total+r[index].votes_with_party_pct
  } 
}
if (statistics.independents==0) {
  statistics.avg_independents =0 
}else {
  statistics.avg_independents=total/statistics.independents
}  

// These are meant to display the total percentage of votes with party of all the parties together
statistics.total= 
statistics.republicans + statistics.democrats +statistics.independents
    
statistics.total_avg=
(statistics.avg_independents+statistics.avg_democrats+statistics.avg_independents)/3

// This is the table that gathers all the data provided by the functions above 
var tabla = "";

  tabla +=    "<tr><td>" + "Republicans" + "</td>"+
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

document.getElementById("senate-attendance").innerHTML= tabla;

// The following functions and tables are the ones that get the data about attendance (whom where the senators that missed 
// more and less voting)

data.results[0].members.sort((a, b) => {
  return a.missed_votes_pct - b.missed_votes_pct;
});

var tenpercentmost= Math.round(10*statistics.total/100);
for (let index = 0; index < tenpercentmost; index++) {
  statistics.most_engaged.push(data.results[0].members[index]);  
}

data.results[0].members.sort((b, a) => {
 return b.missed_votes_pct + a.missed_votes_pct;
});

var tenpercentleast= Math.round(10*statistics.total/100);
for (let index = 0; index < tenpercentmost; index++) {
  statistics.least_engaged.push(data.results[0].members[index]);
}

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
 
// These functions and tables get the data about party loyalty (10% least and most loyal senators)
data.results[0].members.sort((a, b) => {
  return b.votes_with_party_pct - a.votes_with_party_pct;
}); 

var tenpercentmost= Math.round(10*statistics.total/100);
for (let index = 0; index < tenpercentmost; index++) {
  statistics.most_loyal.push(data.results[0].members[index]); 
}

data.results[0].members.sort((b, a) => {
  return b.votes_with_party_pct + a.votes_with_party_pct;
});


var tenpercentleast= Math.round(10*statistics.total/100);
for (let index = 0; index < tenpercentleast; index++) {
  statistics.least_loyal.push(data.results[0].members[index]);  
}

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

 

