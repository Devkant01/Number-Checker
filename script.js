const input = document.querySelector('#user-input');
const checkbtn = document.querySelector('#check-btn');
const clearbtn = document.querySelector('#clear-btn');
const result = document.querySelector('#results-div');
const sresult = document.querySelector('#singleResult');

function validNumber(n) {
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    return phoneRegex.test(n);
};

function Action() {
    if (input.value == '') {
        alert('Please provide a phone number');
    }
    else {
        result.children[0].style.display = 'none';
        const ele = document.createElement('p');
        ele.style.color = 'white';
        if (validNumber(input.value)) {
            ele.className = 'data-valid';
            ele.innerHTML = `Valid US number: <br>${input.value}`;
        }
        else {
            ele.className = 'data-invalid';
            ele.innerHTML = `Invalid US number: <br>${input.value}`;
        }
        result.appendChild(ele);
    }
    input.value = '';
}

input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        Action();
    }
})

checkbtn.addEventListener('click', (e) => {
    Action();
})

clearbtn.addEventListener('click', (e) => {
    result.innerHTML = '<p class="waterMark">Check Number</p>';
})
