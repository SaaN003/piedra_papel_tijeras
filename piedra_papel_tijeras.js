const piedra=document.querySelector(".piedra");
const papel=document.querySelector(".papel");
const tijeras=document.querySelector(".tijeras");

let resultado;
const operaciones=()=>{
    var valorPc=Math.round(Math.random()*2+1);
    function switchh(){
    switch(valorPc){
   case 1:
   return("<b>Eleccion de la computadora: Piedra</b>");
   break;
   case 2:
   return("<b>Eleccion de la computadora: Papel</b>");
   break;
   case 3:
   return("<b>Eleccion de la computadora: Tijera</b>")
   break;
   default:
   return("No esta en el rango");
   break;
}}
mensage=clickBoton(resultado,valorPc)
    document.querySelector(".resultado").innerHTML=mensage;
    document.querySelector(".eleccion").innerHTML=switchh();
    let modal= document.querySelector(".modalBackground");
    modal.style.display="flex";
    modal.style.animation="aparecer 1s forwards";
    console.log("Tu eleccion fue: Piedra "+mensage);
}

piedra.addEventListener("click",()=>{
     resultado=1;
    operaciones();
    
});

papel.addEventListener("click",()=>{
     resultado=2;
     operaciones();
    });

tijeras.addEventListener("click",()=>{
     resultado=3;
    operaciones();
    });

const win= document.querySelector(".resultado").innerHTML="Felicidades has Ganado";
const loser=document.querySelector(".resultado").innerHTML="Mala suerte, será la próxima"
const draw=document.querySelector(".resultado").innerHTML="Empate, GGs"


const clickBoton=(res,valpc)=>{
    if(res==1){
        if(valpc==3){
       return "<span class='win'>"+win+"</span>";
    }else if(valpc==2){
        return "<span class='loser'>"+loser+"</span>";
    }else if(res==1){
        return "<span class='draw'>"+draw+"</span>";
    }}
    if(res==2){
        if(valpc==1){
            return "<span class='win'>"+win+"</span>";
        }else if(valpc==3){
        return "<span class='loser'>"+loser+"</span>";
        }else if(res==2){
            return "<span class='draw'>"+draw+"</span>";
    }}
    if(res==3){
        if(valpc==2){
            return "<span class='win'>"+win+"</span>";
        }else if(valpc==1){
        return "<span class='loser'>"+loser+"</span>";
        }else if(res==3){
            return "<span class='draw'>"+draw+"</span>";
    }}

}

















// let eleccion=prompt("Elegí 1=Piedra 2=Papel 3=Tijeras");
// let hacer=false;
// if(Number(eleccion)==eleccion){
//     if(eleccion>0&&eleccion<4){
//          hacer=true;
//     var valorPc=Math.round(Math.random()*2+1)
//     switch(valorPc){
//     case 1:
//     document.write("Eleccion de la computadora: Piedra"+"<br><br>");
//     break;
//     case 2:
//     document.write("Eleccion de la computadora: Papel"+"<br><br>");
//     break;
//     case 3:
//     document.write("Eleccion de la computadora: Tijera"+"<br><br>")
//     break;
//     default:
//         document.write("No esta en el rango");
//         break;
// }if(eleccion==1)
// {   eleccion="Piedra"
//     document.write("<b>Tu eleccion fue <style=color:'blue'>"+eleccion+"</b></style><br><br>")}
//     else  if(eleccion==2){
//         eleccion="Papel"
//         document.write("<b>Tu eleccion fue "+eleccion+"</b><br><br>")
//     }else{
//         eleccion="Tijeras"
//         document.write("<b>Tu eleccion fue "+eleccion+"</b><br><br>")
//     }
// }else{
//     hacer=false;
//     document.write("Se paasa de los valores especificados")
// }
// if(hacer){
//     if(eleccion=="Piedra" && valorPc==3||eleccion=="Papel"&&valorPc==1||eleccion=="Tijeras"&&valorPc==2){
//     document.write("<p class='win'><b>GANASTE</b></p><br><br>");

// }else if(eleccion=="Piedra"&&valorPc==1||eleccion=="Papel"&&valorPc==2||eleccion=="Tijeras"&&valorPc==3){
//     document.write("<p class='draw'><b>EMPATE</b></p><br><br>")
// }else{
//     document.write("<p class='loser'><b>PERDISTE</b></p><br><br>")

// }}}
