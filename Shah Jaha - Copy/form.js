function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cv = document.getElementById('cv').value;
    const skills = document.getElementById('skills').value;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (phone === '') {
        document.getElementById('phoneError').innerText = 'Phone number is required.';
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must contain only digits.';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    if (cv === '') {
        document.getElementById('cvError').innerText = 'CV is required.';
        isValid = false;
    } else {
        document.getElementById('cvError').innerText = '';
    }

    if (skills === '') {
        document.getElementById('skillsError').innerText = 'Skills are required.';
        isValid = false;
    } else {
        document.getElementById('skillsError').innerText = '';
    }

    return isValid;
}

function saveData() {
    if (validateForm()) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const cv = document.getElementById('cv').value;
        const skills = document.getElementById('skills').value;

        const userData = {
            name: name,
            email: email,
            phone: phone,
            cv: cv,
            skills: skills
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        showData();
    }
}

function showData() {
    const data = localStorage.getItem('userData');
    if (data) {
        const userData = JSON.parse(data);
        document.getElementById('savedName').innerText = userData.name;
        document.getElementById('savedEmail').innerText = userData.email;
        document.getElementById('savedPhone').innerText = userData.phone;
        document.getElementById('savedCV').innerText = userData.cv;
        document.getElementById('savedSkills').innerText = userData.skills;
        document.getElementById('result').style.display = 'block';
    }
}

// Load saved data on page load
window.onload = showData;