const birthYear = document.querySelector('.birthyear');
const calculateBtn = document.querySelector('.calculate');
const output = document.querySelector('.outputmsg');
const day = document.querySelector('.day');

function showLeapYear () {
    let inputBirthYear = birthYear.value;
    let birthArray = inputBirthYear.split("-");
    let inputYear = birthArray[0];

    if (birthYear.value === '') {
        return output.innerHTML = 'Please Input your birth year correctly!';
    }

    calculateLeapYear(inputYear);

    birthYear.value = '';

}

function calculateLeapYear(yearInput) {
    if (yearInput % 4 === 0) {
        if (yearInput % 100 === 0) {
            if (yearInput % 400 === 0) {
                output.innerText = `Your birth year ${yearInput} is a leap year!`;
            } else {
                output.innerText = `Your birth year ${yearInput} is not a leap year!`;
            }
        } else {
            output.innerText = `Your birth year ${yearInput} is a leap year!`;
        }
    } else {
        output.innerText = `Your birth year ${yearInput} is not a leap year!`;
    }
}


calculateBtn.addEventListener('click', showLeapYear);

function dayToNight (e) {
    document.body.classList.toggle('night');
    if(e.target.innerText === 'Night') {
        e.target.innerText = 'Day';
    } else {
        e.target.innerText = 'Night'
    }
}

day.addEventListener('click', dayToNight);