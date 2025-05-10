document.getElementById('Generator').addEventListener('click', generatePassword);
document.querySelector('#password button').addEventListener('click', copyPassword);

function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const useUpper = document.getElementById('uppercaseletters').checked;
    const useLower = document.getElementById('lowercaseletters').checked;
    const useNumbers = document.getElementById('Includenumbers').checked;
    const useSymbols = document.getElementById('Includesymbols').checked;

    let charset = '';
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        password += randomChar;
    }


    const passwordDiv = document.getElementById('password');


    const oldText = passwordDiv.querySelector('p');
    if (oldText) passwordDiv.removeChild(oldText);

    const p = document.createElement("p");
    p.textContent = password;
    p.className = 'text-white mt-4 break-words absolute left-2 pl-2 truncate max-w-[85%]';
    passwordDiv.appendChild(p);
}

function copyPassword() {
    const passwordText = document.querySelector('#password p');
    if (!passwordText) {
        alert('No password to copy!');
        return;
    }

    const text = passwordText.textContent;

    navigator.clipboard.writeText(text)
        .then(() => alert('Password copied to clipboard!'))
        .catch(() => alert('Failed to copy password.'));
}

// function generatePassword() {
//     const length = document.getElementById('passwordLength').value;
//     const includeUpper = document.getElementById('uppercaseletters').checked;
//     const includeLower = document.getElementById('lowercaseletters').checked;
//     const includeNumbers = document.getElementById('Includenumbers').checked;
//     const includeSymbols = document.getElementById('Includesymbols').checked;
//     let charset = '';
//     if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
//     if (includeNumbers) charset += '0123456789';
//     if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         if (charset.length === 0) break;
//         password += charset[Math.floor(Math.random() * charset.length)];
//     }
//     document.getElementById('passwordDisplay').textContent = password;
// }
// generatePassword()

// function generatePassword() {
//     const length = parseInt(document.getElementById('passwordLength').value);
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         password += chars.charAt(Math.floor(Math.random() * chars.passwordLength));
//     }
//     document.getElementById('password').value = password;
// }

// function copyPassword() {
//     const passwordInput = document.getElementById('Generator');
//     passwordInput.select();
//     passwordInput.setSelectionRange(0, 99999); // for mobile
//     document.execCommand('copy');
//     alert('Password copied to clipboard!');
// }

// function generateButton(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {

//     const button = document.getElementById("Generator")
//     const input = document.getElementById("passwordLength")
//     const input1 = document.getElementById("uppercaseletters")
//     const input2 = document.getElementById("lowercaseletters")
//     const input3 = document.getElementById("Includenumbers")
//     const input4 = document.getElementById("Includesymbols")
//     const generatebtn = document.getElementById("generate")
//     const clipboard = document.getElementById("clipboard")

//     button.addEventListener("click", function () {
//         console.log({
//             const: settings = {
//                 length: parseInt(input.value),
//                 includeUppercase: input1.checked,
//                 includeLowercase: input2.checked,
//                 includeNumbers: input3.checked,
//                 includeSymbols: input4.checked
//             }
//         });

//     });
//     function generatePassword(upper, lower, numbers, symbols) {
//         const generatedpassword = "";
//         const password = upper + lower + numbers + symbols
//     }
// }

// generateButton()