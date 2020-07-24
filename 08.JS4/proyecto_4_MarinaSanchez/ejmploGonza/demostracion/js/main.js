//Fetch es un "ir a buscar". 

fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
    method: "GET", //estructura del JSON
    headers: new Headers({
        "X-API-Key": 'adZUIoKPgkk0ecKXE0ztm9ErLNJgARlsKHBhTBYa'
    }),
}).then(function (response) { //Una vez que termine esto hace esto
    if (response.ok)
        return response.json();
    throw new Error(response.statusText);
}).then(function (json) {
    
    mifuncion(json);
    
});

function mifuncion(data){
    
    var senadores=data.results[0].members;
    var tabla=document.getElementById("mitabla");
    var tohtml=senadores.map((senador)=>{
        if(senador.middle_name== null){
            return "<tr><td>"+senador.first_name+" "+senador.last_name+"</td></tr>";
        }else{
            return "<tr><td>"+senador.first_name+" "+senador.middle_name+" "+senador.last_name+"</td></tr>";
        }
    })
    console.log(tohtml);
    tabla.innerHTML=tohtml.join("");
    
    console.log(senadores);
}
// console.log("hola mundo");
// console.log(json);
// app.members = json.results[0].members
// app.diezPercent = Math.round(app.members.length * 0.10);
// app.republican = app.members.filter(cantidadPartyR);
// app.democrat = app.members.filter(cantidadPartyD);
// app.independent = app.members.filter(cantidadPartyI);
// allMyStats();
//htmlSenatorsFunction();
//htmlLeastEngFunction();
//htmlMostEngFunction();


var minombre=["gonzalo",2,3,2,2,34,4,2,"llantada",3,"hola no me gusto el guason!"];
var resultado=minombre.map((nombre)=>{
    if(typeof(nombre)=="number"){
        return nombre="'"+nombre+"'";
}else{
    // return nombre;
}
})
console.log(resultado.join("/"));
// // var minombre="pepito";

// var i=0;

// var numero=2;
// numero=numero+5;

// numero=(+5);
// function levantarlamano(){
//    var pepito=[,,"hola"];
// // return pepito;
//     console.log("soy pedro y levanto la mano solo con 1 dedo");
    
// }
// levantarlamano();
// console.log(typeof(2));
// var hola=minombre.filter(function(pepito){
//  if (typeof pepito=="string"){
//      return pepito;
//  }
// })
// console.log(hola.join(" / "));
// // console.log(minuevopepito);
