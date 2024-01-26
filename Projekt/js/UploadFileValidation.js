document.querySelector('form').addEventListener('submit', function(e) {
    const fileInput  = document.getElementById('inputupload');
    if (fileInput .files.length === 0) {
      e.preventDefault();
      document.getElementById("warnung").innerHTML = "Sie müssen eine Datei auswählen !";
    }
  });


  