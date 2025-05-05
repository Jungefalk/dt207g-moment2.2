

//Hämta id:n
let workExperienceEl = document.getElementById("work_experience");
let companyNameEl = document.getElementById("company_name");
let jobTitleEl = document.getElementById("job_title");
let locationEl = document.getElementById("location");
let startDateEl = document.getElementById("start_date")
let endDateEl = document.getElementById("end_date");
let descriptionEl = document.getElementById("description");
let buttonEl = document.getElementById("submitButton");

//Händelselyssnare
window.addEventListener("load", init);
buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    postData();
});

//Init
function init() {

    getData();
    console.log("Sidan har laddat in");
};


//Hämta data och anropa funktion som läser ut till skärmen
async function getData() {

    try {
        const response = await fetch(`https://dt207g-moment2-1-bgly.onrender.com/api/work_experience`)
        if (!response.ok) {
            throw new Error("Fel vid anslutning: " + response.status);
        }

        //lagra data i variabel
        const data = await response.json();
        console.log("datan har hämtats ", data);

        //Anropa funktion
        readData(data);

    } catch (error) {
        console.error("Ett fel uppstod " + error.message);
    }

}

//Läs ut data
function readData(data) {

    //loopa datan
    for (let i = 0; i < data.length; i++) {

        //Skapa nytt article elelemnt och läs ut i innerHTML
        let newArticleEl = document.createElement("article");
        newArticleEl.innerHTML = `<h3>Arbetsplats:</h3>
        <p>${data[i].company_name}</p>
        <h3>Jobbtitel:</h3>
        <p>${data[i].job_title}</p>
        <h3>Adress:</h3>
        <p>${data[i].location}</p>
        <h3>Startdatum:</h3>
        <p>${data[i].start_date}</p>
        <h3>Slutdatum:</h3>
        <p>${data[i].end_date}</p>
        <h3>Arbetsbeskrivnning:</h3>
        <p>${data[i].description}</p>
        <button id="deleteButton">Ta bort</button>
`;
        workExperienceEl.appendChild(newArticleEl);
    };

    console.log("Datan har lästs ut till skärmen")
}

//Posta data
async function postData() {

    //Lagra värden från inputfält
    let newExpreience = {
        company_name: companyNameEl.value,
        job_title: jobTitleEl.value,
        location: locationEl.value,
        start_date: startDateEl.value,
        end_date: endDateEl.value,
        description: descriptionEl.value
    };

    //Töm inputfält
    companyNameEl.value = "";
    jobTitleEl.value = "";
    locationEl.value = "";
    startDateEl.value = "";
    endDateEl.value = "";
    descriptionEl.value = "";

    try {
        const response = await fetch(`https://dt207g-moment2-1-bgly.onrender.com/api/work_experience/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newExpreience)
        });
        if (!response.ok) {
            throw new Error("Fel vid anslutning: " + response.status);
        }

        const result = await response.json();
        console.log(result)
        fetchData();


    } catch (error) {
        console.error("Det uppstod ett fel: " + error.message);
    }


}

//Ta bort data
function deleteData() {

    console.log("Datan har raderats");

    fetchData();
}