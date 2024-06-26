function validatePassword() {
    const LARGE_BREAKEPOINT = 992;
    var originalPasswd;
    var validationPasswd;

    var originalPasswdElement;
    var validationPasswdElement;

    var webpageWidth = document.documentElement.scrollWidth;

    if (webpageWidth >= LARGE_BREAKEPOINT) { //Website ist large d.h. >= 992px
        originalPasswdElement = document.getElementById("passwordInput");
        validationPasswdElement = document.getElementById("passwordValidationInput");
    } else { //Website ist < 992px
        originalPasswdElement = document.getElementById("passwordInputSm");
        validationPasswdElement = document.getElementById("passwordValidationInputSm");
    }

    originalPasswd = originalPasswdElement.value;
    validationPasswd = validationPasswdElement.value;


    //loesche schon vorhandene Validierungsklassen
    originalPasswdElement.classList.remove("is-invalid");
    validationPasswdElement.classList.remove("is-invalid");

    if (originalPasswd.length >= 8) {
        originalPasswdElement.classList.add("is-valid");
    } else {
        originalPasswdElement.classList.add("is-invalid");
    }

    if (originalPasswd === validationPasswd) {
        //alert("Passwörter sind gleich.");
        validationPasswdElement.classList.add("is-valid");
    } else {
        //alert("Passwörter sind nicht gleich.");
        validationPasswdElement.classList.add("is-invalid");
    }
}

function validateOriginalPasswordLgInput() {
    var originalPasswdElement = document.getElementById("passwordInput");
    var originalPasswd = originalPasswdElement.value;

    //sicherstellen, dass alte Validationen geloescht werden
    originalPasswdElement.classList.remove("is-invalid");


    //Hier soll sichergestellt werden, dass nur wenn sich Inhalt in dem
    //input befindet, auch eine Ueberpruefung stattfindet
    if (originalPasswd.length > 0) {
        if (isOriginalPasswdValid(originalPasswd)) {
            originalPasswdElement.classList.add("is-valid")
        } else {
            originalPasswdElement.classList.add("is-invalid");
        }
    }
}

function validateValidationPasswordLgInput() {
    var validationPasswdElement = document.getElementById("passwordValidationInput");
    var originalPasswdElement = document.getElementById("passwordInput");

    var validationPasswd = validationPasswdElement.value;
    var originalPasswd = originalPasswdElement.value;

    //sicherstellen, dass alte Validationen geloescht werden
    validationPasswdElement.classList.remove("is-invalid");

    if (validationPasswd.length > 0 && originalPasswdElement.classList.contains("is-valid")) {
        if (isValidationPasswdValid(originalPasswd, validationPasswd)) {
            validationPasswdElement.classList.add("is-valid");
        } else {
            validationPasswdElement.classList.add("is-invalid");
        }
    }
}


function validateOriginalPasswordSmInput() {
    var originalPasswdElement = document.getElementById("passwordInputSm");
    var originalPasswd = originalPasswdElement.value;

    //sicherstellen, dass alte Validationen geloescht werden
    originalPasswdElement.classList.remove("is-invalid");

    //Hier soll sichergestellt werden, dass nur wenn sich Inhalt in dem
    //input befindet, auch eine Ueberpruefung stattfindet
    if (originalPasswd.length > 0) {
        if (isOriginalPasswdValid(originalPasswd)) {
            originalPasswdElement.classList.add("is-valid")
        } else {
            originalPasswdElement.classList.add("is-invalid");
        }
    }
}

function validateValidationPasswordSmInput() {
    var validationPasswdElement = document.getElementById("passwordValidationInputSm");
    var originalPasswdElement = document.getElementById("passwordInputSm");
    var validationPasswd = validationPasswdElement.value;
    var originalPasswd = originalPasswdElement.value;

    //sicherstellen, dass alte Validationen geloescht werden
    validationPasswdElement.classList.remove("is-invalid");

    if (validationPasswd.length > 0 && originalPasswdElement.classList.contains("is-valid")) {
        if (isValidationPasswdValid(originalPasswd, validationPasswd)) {
            validationPasswdElement.classList.add("is-valid");
        } else {
            validationPasswdElement.classList.add("is-invalid");
        }
    }
}

function isOriginalPasswdValid(passwd) {
    if (passwd.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function isValidationPasswdValid(passwd, validationPasswd) {
    if (passwd === validationPasswd) {
        return true;
    } else {
        return false;
    }
}



document.querySelector('form').addEventListener('submit', function (e) {
    const password1 = document.getElementById('passwordInput').value;
    const password2 = document.getElementById('passwordValidationInput').value;

    const vorname = document.getElementById('forenameInput').value;
    const name = document.getElementById('surnameInput').value;
    const benutzername = document.getElementById('usernameInput').value;
    const email = document.getElementById('emailInput').value;

    if (vorname.length === 0 || name.length === 0 || benutzername.length === 0 || email.length === 0) {
        e.preventDefault();
        document.getElementById("warnung").innerHTML = "Eingabe darf nicht leer sein!";
    }  else if (password1.length < 8) {
        e.preventDefault();
        document.getElementById("warnung").innerHTML = "Passwort muss mindestens 8 Zeichen haben!";
    } else if (password1 !== password2) {
        e.preventDefault();
        document.getElementById("warnung").innerHTML = "Passwörter müssen übereinstimmen!";
    } else {
        document.getElementById("warnung").innerHTML = "";
    }
});

