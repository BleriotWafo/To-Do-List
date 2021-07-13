// selecteurs
var input = document.querySelector(".input");
var btn = document.querySelector(".btn");
var ul = document.querySelector(".ul");

// ecouteurs
btn.addEventListener("click", addTodo);


// fonctions

function addTodo(event){
   event.preventDefault();

 if(input.value != ""){
   //creer le li
   const li = document.createElement("li");
   const a = document.createElement("a");
   var lien = document.createTextNode(input.value);
   a.appendChild(lien);
   a.href ="#";
   a.title="";
   li.classList.add("linew");
   a.classList.add("anew");
   ul.appendChild(li);
   li.appendChild(a);

   //surligné au clique
   li.addEventListener("click" ,function(evnt){
   	event.preventDefault();
   	li.classList.toggle("surligne");
   })
   

   // reinitialiser l'ecran
   input.value = "";
 } else {
 	alert("Sie sollen zuerst eine Aufgabe schreiben");
 }
   
   



}