let patientInfo = [];

const addPatientInfo = (event) => {
    event.preventDefault();

    let patient = {
        patientID: Date.now(),
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        birthDate: document.getElementById('birthDate').value,
        gender: document.getElementById('gender').value,
        // genderMale: document.getElementById('radio1').value,
        // genderFemale: document.getElementById('radio2').value,
        medicalHistory: document.querySelectorAll('#medicalHistory').value,
        currentSymptoms: document.querySelectorAll('#currentSymptoms').value,
        medic: document.querySelectorAll('#medic').value,
        medication: document.getElementById('medical').value
    };
    patientInfo.push(patient);
    console.table(patientInfo);
    // let medHistoryCheckboxes = document.querySelectorAll('input [name="medHistory"]');
    // let medHistory = [];

    // for (let i = 0; i < medHistoryCheckboxes.length; i++) {
    //     let checkbox = medHistoryCheckboxes.length[i];
    //     if (checkbox.checked) {
    //         medHistory.push(checkbox.value);
    //     }
    // }
    // console.log(medHistory);

    //Saving to Local Storage
    localStorage.setItem("patient", JSON.stringify(patientInfo));

    
}
function clearData () {
    localStorage.clear();
  }

let submitButton = document.getElementById('btn-submit');
 submitButton.addEventListener('click', addPatientInfo);

