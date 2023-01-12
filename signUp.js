var emailErr = document.getElementById('emailErr')
var pwdErr = document.getElementById('pwdErr')

function validateUserEmail() {
    var userName = document.getElementById('userName').value

    if (userName.length == 0) {
        emailErr.innerHTML = 'Enter Email Id'
        return false;
    }
    else if (!loginId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailErr.innerHTML = 'Email Invalid'
        return false
    }
    emailErr.innerHTML = ''
    return true
}
function validateUserPwd() {
    var userPwd = document.getElementById('userPwd').value

    if (userPwd.length == 0) {
        pwdErr.innerHTML = 'Password is required'
        return false
    }
    else if (userPwd.length < 8) {
        pwdErr.innerHTML = 'Password must be 8 characters'
    }
    else {
        pwdErr.innerHTML = ''
        return true
    }
}
function validateForm1() {
    if (!validateUserEmail() || !validateUserPwd()) {
        submitError1.innerHTML = ''
        return false
    }
}