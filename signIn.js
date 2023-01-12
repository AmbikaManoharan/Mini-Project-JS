//SignIn form validation

var emailError = document.getElementById('emailError')
var pwdError = document.getElementById('pwdError')

function validateEmail() {
    var loginId = document.getElementById('loginId').value

    if (loginId.length == 0) {
        emailError.innerHTML = 'Enter Email Id'

        return false;
    }
    else if (!loginId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false
    }
    emailError.innerHTML = ''
    return true
}
function validatePwd() {
    var loginPwd = document.getElementById('loginPwd').value

    if (loginPwd.length == 0) {
        pwdError.innerHTML = 'Password is required'
        return false
    }
    else if (loginPwd.length < 8) {
        pwdError.innerHTML = 'Password must be 8 characters'
    }
    else {
        pwdError.innerHTML = ''
        return true
    }
}

function validateForm() {
    if (!validateEmail() || !validatePwd()) {
        submitError.innerHTML = ''
        return false
    }
   
}

var emailId = document.getElementById('emailId')
var createPwd = document.getElementById('createPwd')

function createAcc() {
    if (emailId.value != "" && createPwd.value != "") {
        alert("Account created Successfully")
    }
    else {
        alert("Enter Email Id And Password correctly")
    }
}
var newPassword = document.getElementById('newPassword')

var confirmPassword = document.getElementById('confirmPassword')

function resetPwd1() {

    if (newPassword.value == "" && confirmPassword.value == "") {
        alert("Enter New Password!!")
    }
    else if (newPassword.value != confirmPassword.value) {
        alert("Password entered is not matching!!")
    }
    else {
        alert("Password is Updated")
    }
}
