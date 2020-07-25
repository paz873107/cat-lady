// this function grabs the required data from the JSON files and displays them into the hmtl table
var r = data.results[0].members
var tabla = "";

for (var a = 0; a < r.length; a++) {
    tabla += "<tr><td><a href= "+r[a].url+">" + r[a].last_name +" "+ r[a].first_name +" "+ (r[a].middle_name !==null ? r[a].middle_name : " ") +"</a></td>"+
                  "<td>" + r[a].party + "</td>"+
                  "<td>" + r[a].seniority + "</td>"+
                  "<td>" + r[a].votes_with_party_pct + "%" +"</td>"+
                  "</tr>";
    
}
console.log(tabla);


document.getElementById("house-data").innerHTML = tabla;
