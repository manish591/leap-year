const birthYear = document.querySelector('.birthyear');
const calculateBtn = document.querySelector('.calculate');
const output = document.querySelector('.outputmsg');
const day = document.querySelector('.day');

function showLeapYear () {
    let inputYear = parseInt(birthYear.value);

    if (birthYear.value === '' || birthYear.value.length !== 4) {
        return output.innerHTML = 'Please Input your birth year correctly!';
    }

    if (inputYear % 4 === 0) {
        if (inputYear % 100 === 0) {
            if (inputYear % 400 === 0) {
                output.innerText = `Your birth year ${inputYear} is a leap year!`;
            } else {
                output.innerText = `Your birth year ${inputYear} is not a leap year!`;
            }
        } else {
            output.innerText = `Your birth year ${inputYear} is a leap year!`;
        }
    } else {
        output.innerText = `Your birth year ${inputYear} is not a leap year!`;
    }

    birthYear.value = '';

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