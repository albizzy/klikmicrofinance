function switchToFormTwo() {
    let inputObjectName = document.querySelector("#required_id_name");
    let inputObjectEmail = document.querySelector("#required_id_email");
    let inputObjectBirth = document.querySelector("#required_id_birthday")

    if (!inputObjectName.checkValidity()) {
        document.querySelector("#validationMsgName").innerHTML = "Please fill out your Full Name";
        document.querySelector("#validationMsgName").style.color = "red";
        document.querySelector("#validationMsgName").style.fontSize = "10px";
    } else if (!inputObjectEmail.checkValidity()) {
        document.querySelector("#validationMsgEmail").innerHTML = "Please fill out your Email";
        document.querySelector("#validationMsgEmail").style.color = "red";
        document.querySelector("#validationMsgEmail").style.fontSize = "10px";
    } else if (!inputObjectBirth.checkValidity()) {
        document.querySelector("#validationMsgBirthday").innerHTML = "Please fill out your Birthday";
        document.querySelector("#validationMsgBirthday").style.color = "red";
        document.querySelector("#validationMsgBirthday").style.fontSize = "10px";
    } else {
        document.querySelector("#formOne").style.display = "none";
        document.querySelector("#formTwo").style.display = "block";
    }
}

function switchToFormThree() {
    let inputObjectMobile = document.querySelector("#required_id_two_mobile");
    let inputObjectGender = document.querySelector("#required_id_two_gender");
    let inputObjectCountry = document.querySelector("#required_id_two_country")

    if (!inputObjectMobile.checkValidity()) {
        document.querySelector("#MsgMobile").innerHTML = "Please fill out your Mobile Number";
        document.querySelector("#MsgMobile").style.color = "red";
    } else if (!inputObjectGender.checkValidity()) {
        document.querySelector("#MsgGender").innerHTML = "Please choose your gender";
        document.querySelector("#MsgGender").style.color = "red";
    } else if (!inputObjectCountry.checkValidity()) {
        document.querySelector("#MsgCountry").innerHTML = "Please choose your country";
        document.querySelector("#MsgCountry").style.color = "red";
    } else {
        document.querySelector("#formTwo").style.display = "none";
        document.querySelector("#formThree").style.display = "block";
    }
}