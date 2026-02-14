const dataInputEl = document.getElementById("dataInput");
const showButtonEl = document.getElementById("showButton");
const resultEl = document.getElementById("result");

function dayFinder() {
    const dateValue = dataInputEl.value;

    if (!dateValue) {
        resultEl.innerHTML = "<p style='color: #ff4d4d;'>Please, pick a date first! 👆</p>";
        return;
    }

    const dateSelected = new Date(dateValue);
    
    const weekDays = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    const dayNameValue = weekDays[dateSelected.getDay()];

    resultEl.innerHTML = `
        <h2 style="margin-top: 15px;">
            It falls on a: <br>
            <span class="day-result">${dayNameValue}</span>
        </h2>
    `;
}

showButtonEl.addEventListener("click", dayFinder);

dataInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") dayFinder();
});
