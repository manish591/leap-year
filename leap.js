const birthYear = document.querySelector('.birthyear');
const calculateBtn = document.querySelector('.calculate');
const output = document.querySelector('.output');

function showLeapYear () {
    let inputYear = parseInt(birthYear.value);

    if (birthYear.value === '' || birthYear.value.length !== 4) {
        return output.innerHTML = 'Please Input your birth year correctly!';
    }

}

calculateBtn.addEventListener('click', showLeapYear);