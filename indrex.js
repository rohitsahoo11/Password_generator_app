const passwordBox = document.getElementById("password")

const length = 15

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbol = "@#$%^&*()_+~|}{[]></-="
const number = "123456789"

const allChar = upperCase + lowerCase + symbol + number
function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]
    password += number[Math.floor(Math.random()*number.length)]

    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)]
    }

    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}
