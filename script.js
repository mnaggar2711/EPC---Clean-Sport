document.addEventListener("DOMContentLoaded", () => {

const athleteBtn = document.querySelector(".athlete");
const committeeBtn = document.querySelector(".committee");
    const submitBtn=document.querySelector(".submit");

const modal=document.getElementById("modal");

const close=document.querySelector(".close");
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

athleteBtn.onclick = () => {
    alert("Athlete Portal - Coming Soon");
};

committeeBtn.onclick = () => {
    alert("Committee Dashboard - Coming Soon");
};
submitBtn.onclick=()=>{

modal.style.display="flex";

};

close.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

};
const supplements = {

    "creatine":{
        status:"Approved",
        color:"#16a34a",
        name:"Creapure Creatine",
        note:"Reviewed by Anti-Doping Committee"
    },

    "gold standard":{
        status:"Approved",
        color:"#16a34a",
        name:"Optimum Nutrition Gold Standard Whey",
        note:"Approved Protein Supplement"
    },

    "omega 3":{
        status:"Approved",
        color:"#16a34a",
        name:"Omega 3",
        note:"Safe to Use"
    },

    "c4":{
        status:"Needs Review",
        color:"#f59e0b",
        name:"C4 Pre Workout",
        note:"Submit Before Use"
    }

};

searchBtn.onclick=function(){

const value=searchInput.value.trim().toLowerCase();

let old=document.querySelector(".result-card");

if(old) old.remove();

let card=document.createElement("div");

card.className="result-card";

if(supplements[value]){

card.innerHTML=`

<h2 style="color:${supplements[value].color}">
${supplements[value].status}
</h2>

<h3>${supplements[value].name}</h3>

<p>${supplements[value].note}</p>

`;

}else{

card.innerHTML=`

<h2 style="color:#dc2626">

Not Found

</h2>

<p>

This supplement is not available in the database.

Please submit it for Anti-Doping review before purchasing.

</p>

`;

}

document.querySelector(".hero").appendChild(card);

};

});
