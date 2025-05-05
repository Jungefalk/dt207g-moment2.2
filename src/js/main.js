

//Hämta id:n
let articleEl = document.getElementById("work_experience");
let companyNameEl = document.getElementById("company_name");
let jobTitleEl = document.getElementById("job_title");
let locationEl = document.getElementById("location");
let startDateEl = document.getElementById("start_date")
let endDateEl = document.getElementById("end_date");
let descriptionEl = document.getElementById("description");
let buttonEl = document.getElementById("button");

//Händelselyssnare
window.addEventListener("load", init);
buttonEl.addEventListener("click", postData)

//Init
function init() {

    getData();
    console.log("Sidan har laddat in");
};


//Hämta data
function getData() {

    console.log("datan har hämtats");

    readData();
}

//Läs ut data
function readData() {

    console.log("Datan har lästs ut till skärmen")
}

//Posta data
function postData() {

    console.log("Datan har postats");

    fetchData();
}

//Ta bort data
function deleteData() {

    console.log("Datan har raderats");

    fetchData();
}