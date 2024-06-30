document.getElementById('include-uppercase').addEventListener('click', function() {
    this.classList.toggle('active');
});
document.getElementById('include-numbers').addEventListener('click', function() {
    this.classList.toggle('active');
});
document.getElementById('include-symbols').addEventListener('click', function() {
    this.classList.toggle('active');
});

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('include-uppercase').classList.contains('active');
    const includeNumbers = document.getElementById('include-numbers').classList.contains('active');
    const includeSymbols = document.getElementById('include-symbols').classList.contains('active');

    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = lowerCaseChars;
    if (includeUppercase) allChars += upperCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    password.setSelectionRange(0, 99999);
    document.execCommand('copy');
    showPopup('Password copied to clipboard');
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-message').textContent = message;
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
