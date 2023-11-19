//Recuperer les valeurs des champs du formulaire
const fullName= document.querySelector('.fullName');
const dateOfBirth= document.querySelector('dateOfBirth');
const gender= document.querySelector('select[name="gender"]');
const task1= document.querySelector('.task1');
const task2= document.querySelector('.task2');
const task3= document.querySelector('.task3');
// recuperer les boutons
const result= document.querySelector('.Result');
const submit= document.querySelector('.Submit');
const reset= document.querySelector('.Reset');
// validation rules fullName
function validateFullName(fullName){
    // Check if the full name is required.
    if (!fullName){
        return "Full name is required.";
    }
    // Check the length of the full name.
    if (fullName.length <3 || fullName.length >20){
        return "Full name must be between 3 and 20 characters long.";
    }
    // Check the format of the full name.
    if (!/^[a-zA-Z]+$/.test(fullName)){
        return "Full name must contain only letters and spaces.";
    }
    // If the full name passes all of the validation rules, return null.
    return null;
}
function validateDate(date){
    //Check if the date is required.
    if(!date){
        return "Date is required.";
    }
    // Check the format of the date.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)){
        return "Date must be in the format YYYY-MM-DD.";
    }
    //Check the range of the date.
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    if(date < minDate || date > maxDate){
        return "Date must be between today and one year from today.";
    }
    // If the date passes all of the validation rules, return null.
    return null;
}