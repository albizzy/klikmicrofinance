function switchToFormTwo() {
    let inputObjectName = document.getElementById("required_id_name");
    let inputObjectEmail = document.getElementById("required_id_email");
    let inputObjectBirth = document.getElementById("required_id_birthday")

    if (!inputObjectName.checkValidity()) {
        document.getElementById("validationMsgName").innerHTML = "Please fill out your Full Name";
        document.getElementById("validationMsgName").style.color = "red";
        document.getElementById("validationMsgName").style.fontSize = "10px";
    } else if (!inputObjectEmail.checkValidity()) {
        document.getElementById("validationMsgEmail").innerHTML = "Please fill out your Email";
        document.getElementById("validationMsgEmail").style.color = "red";
        document.getElementById("validationMsgEmail").style.fontSize = "10px";
    } else if (!inputObjectBirth.checkValidity()) {
        document.getElementById("validationMsgBirthday").innerHTML = "Please fill out your Birthday";
        document.getElementById("validationMsgBirthday").style.color = "red";
        document.getElementById("validationMsgBirthday").style.fontSize = "10px";
    } else {
        document.getElementById("formOne").style.display = "none";
        document.getElementById("formTwo").style.display = "block";
    }
}

function switchToFormThree() {
    let inputObjectMobile = document.getElementById("required_id_two_mobile");
    let inputObjectGender = document.getElementById("required_id_two_gender");
    let inputObjectCountry = document.getElementById("required_id_two_country")

    if (!inputObjectMobile.checkValidity()) {
        document.getElementById("MsgMobile").innerHTML = "Please fill out your Mobile Number";
        document.getElementById("MsgMobile").style.color = "red";
    } else if (!inputObjectGender.checkValidity()) {
        document.getElementById("MsgGender").innerHTML = "Please choose your gender";
        document.getElementById("MsgGender").style.color = "red";
    } else if (!inputObjectCountry.checkValidity()) {
        document.getElementById("MsgCountry").innerHTML = "Please choose your country";
        document.getElementById("MsgCountry").style.color = "red";
    } else {
        document.getElementById("formTwo").style.display = "none";
        document.getElementById("formThree").style.display = "block";
    }
}