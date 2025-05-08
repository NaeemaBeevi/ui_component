const button = document.getElementById("Generator")
const input = document.getElementById("passwordLength")
const input1 = document.getElementById("uppercase letters")
const input2 = document.getElementById("lowercase letters")
const input3 = document.getElementById("Include numbers")
const input4 = document.getElementById("Include symbols")


button.addEventListener("click", function () {
    console.log({
        passwordLength: input.value,
        uppercaseletters: input1.value,
        lowercaseletters: input2.value,
        Includenumbers: input3.value,
        Includesymbols: input4.value
    });

});