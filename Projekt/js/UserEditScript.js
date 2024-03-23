document.querySelector('form').addEventListener('submit', function (e) {
    const password1 = document.getElementById('editPasswort').value;

    const vorname = document.getElementById('editVorname').value;
    const name = document.getElementById('editNachname').value;
    const benutzername = document.getElementById('editBenutzername').value;
    const email = document.getElementById('editEmail').value;

    if (vorname.length === 0 || name.length === 0 || benutzername.length === 0 || email.length === 0) {
        e.preventDefault();
        document.getElementById("warnung").innerHTML = "Eingabe darf nicht leer sein!";
    }  else if (password1.length < 8) {
        e.preventDefault();
        document.getElementById("warnung").innerHTML = "Passwort muss mindestens 8 Zeichen haben!";
    } else {
        document.getElementById("warnung").innerHTML = "";
    }
});