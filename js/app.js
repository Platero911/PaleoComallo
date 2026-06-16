const especies = {

proborhyeaena:{
nombre:"Proborhyaena",
imagen:"img/proborhyeaena.jpg",
texto:"Marsupial carnívoro sudamericano."
},

Astrapotherium:{
nombre:"Astrapotherium",
imagen:"img/Astrapotherium.jpg",
texto:"Extraño megamamífero herbívoro."
},

kelenken:{
nombre:"Kelenken",
imagen:"img/kelenken.jpg",
texto:"Una de las aves del terror más grandes conocidas."
},

argentavis:{
nombre:"Argentavis",
imagen:"img/argentavis.jpg",
texto:"Gigante de los cielos patagónicos."
},

smilodon:{
nombre:"Smilodon",
imagen:"img/smilodon.webp",
texto:"El famoso tigre dientes de sable."
},

notiomastodon:{
nombre:"Notiomastodon",
imagen:"img/notiomastodon.jpg",
texto:"Pariente sudamericano de los elefantes."
},

purusaurus:{
nombre:"Purussaurus",
imagen:"img/purusaurus.jpg",
texto:"Gigantesco depredador acuático."
}

};

let actual = "";

function mostrar(id){

actual = id;

document.getElementById("titulo").innerText =
especies[id].nombre;

document.getElementById("imagenEspecie").src =
especies[id].imagen;

document.getElementById("descripcion").innerText =
especies[id].texto;

document.getElementById("modal").style.display="block";
}

function cerrar(){
document.getElementById("modal").style.display="none";
}

document.getElementById("btnDescubrir").onclick=function(){

localStorage.setItem(actual,"1");

actualizar();

cerrar();
};

function actualizar(){

let total = 7;
let encontrados = 0;

document.querySelectorAll(".punto")
.forEach((p,i)=>{

let claves = [
"proborhyeaena",
"Astrapotherium",
"kelenken",
"argentavis",
"smilodon",
"notiomastodon",
"purusaurus"
];

if(localStorage.getItem(claves[i])){

p.classList.add("descubierto");

encontrados++;
}
});

let porcentaje =
(encontrados/total)*100;

document.getElementById("barra").style.width =
porcentaje+"%";

document.getElementById("textoProgreso").innerText =
encontrados+" de "+total+
" especies descubiertas";
}

function reiniciar(){

localStorage.clear();

location.reload();
}

actualizar();

const params = new URLSearchParams(window.location.search);

const especieQR = params.get("e");

if(especieQR && especies[especieQR]){

    localStorage.setItem(especieQR,"1");

    actualizar();

    mostrar(especieQR);

}
