
var congress = data.results[0].members;
function mifuncion(data){
    
    var senadores=data.results[0].members;
  
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

var tabla=document.getElementById("mitabla")=tohtml;