document.querySelector('form').addEventListener('submit', function (e) {
  const fileInput = document.getElementById('inputupload');
  if (fileInput.files.length === 0) {
    e.preventDefault();
    document.getElementById("warnung").innerHTML = "Sie müssen eine Datei auswählen !";
  }
  
  const fileName = document.getElementById('inputupload').value;
  const extension = fileName.split('.').pop();
  if(extension !== "PNG" && extension !== "JPG"){
    e.preventDefault();
    document.getElementById("warnung").innerHTML = "Sie können nur PNG und JPG datein hochladen!";
  }
});


