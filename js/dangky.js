//Đăng ký
const usernameEle = document.getElementById('username');
const ageEle = document.getElementById('age');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function() {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let ageValue = ageEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Tên không được để trống');
        isCheck = false;
    } else if (username.value.length > 50) {
        setError(usernameEle, 'Độ dài tên vượt quá giới hạn 50 ký tự');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    if (ageEle == '') {
        setError(ageEle, 'Tuổi không được để trống');
        isCheck = false;
    } else if (ageEle.value <= 6) {
        setError(ageEle, 'Số tuổi chưa đủ để đăng ký');
        isCheck = false;
    } else if (isNaN(ageEle.value)) {
        setError(ageEle, 'Tuổi phải để ở định dạng số');
        isCheck = false;

    } else {
        setSuccess(ageEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }
    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Vui lòng nhập lại số điện thoại k');
        isCheck = false;

    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}