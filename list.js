document.addEventListener("DOMContentLoaded", getJson);

//GLOBALE VARIABLER -------------------------------

let allStudents;
let postTarget = document.querySelector(".student_template");
let postOutput = document.querySelector(".student_wrapper");

//Hent Json ----------------------------------------------

async function getJson() {
  console.log("hej");

  let jsonObject = await fetch("http://petlatkea.dk/2019/students1991.json");

  allStudents = await jsonObject.json();

  console.log(allStudents);

  visJson();
}

//Vis Json

function visJson() {
  allStudents.forEach(student => {
    console.log("elsker mit liv");

    let klon = postTarget.cloneNode(true).content;

    klon.querySelector(".name").textContent = student.fullname;
    klon.querySelector(".house").textContent = student.house;

    postOutput.appendChild(klon);
  });
}
