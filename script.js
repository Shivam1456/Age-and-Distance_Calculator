function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();

    var ageInMilliseconds = today - dob;
    var ageInYears = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
    dob.setFullYear(dob.getFullYear() + ageInYears); // Adjust for leap years

    var ageInMonths = today.getMonth() - dob.getMonth();
    if (today.getDate() < dob.getDate()) {
        ageInMonths--;
    }
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    var ageInDays = today.getDate() - dob.getDate();
    if (ageInDays < 0) {
        var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageInDays = lastDayOfMonth - dob.getDate() + today.getDate();
    }

    document.getElementById('years').textContent = ageInYears;
    document.getElementById('months').textContent = ageInMonths;
    document.getElementById('days').textContent = ageInDays;

   
}
function convertDistance(){
    var distance = document.getElementById('distance').value;
    var unit = document.getElementById('unit').value;
    if(unit==='km'){
        document.getElementById('km').textContent = distance;
        document.getElementById('m').textContent = distance * 1000;
        document.getElementById('in').textContent = distance * 39370.1;

    } else if (unit=== 'm'){
        document.getElementById('km'). textContent = distance / 1000;
        document.getElementById('m'). textContent = distance / 1000*100;
        document.getElementById('in'). textContent = distance / 1000*100*10;
        

    }

}