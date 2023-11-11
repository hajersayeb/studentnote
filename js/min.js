const fullName = document.querySelector('.fullName');
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');




const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

function validateFullName(fullName {
        if (!fullName) {
            return " Full name is required.";

        }
        if (fullName.length < 3 || fullName.length > 20) {
            return " Full name must be between 3 and 20 characters long. ";
        }
        if (!/^[a-zA-Z ]+$/.test(fullName)) {
            return " Full name must contain only letters and spaces."
        }
        return null;

    }