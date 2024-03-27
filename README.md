# Projekt-Internettechnologie-WS23-24

Um die Webanwendung zu verwenden, muss vorher eine Datenbank eingerichtet werden.

# Datenbank einrichten
Laden Sie sich das Programm XAMPP Control Panel herunter. Link: https://www.apachefriends.org/download.html 
Anschließend müssen Sie dort den MySQL Server sowie den Apache Server starten. Klicken Sie danach auf den "Admin"-Button neben der Option "MySQL".
Dadurch gelangen Sie auf eine Administrationsseite der Datenbank. Hier muss zunächst unter der Option "Neu" eine neue Datenbank mit dem Namen "projekt_it" angelegt werden.
Jetzt müssen Sie im oberen Navigationsmenü die Option "Importieren" auswählen und die Projektdatenbank im Verzeichnis "Datenbank/projekt_it.sql" importieren. 

# Server starten
Öffnen Sie den Projektordner "Projekt" in einer IDE oder navigieren Sie mit einem Terminal in dieses Verzeichnis. Führen Sie das Kommando "npm run devStart" aus. Jetzt wird der Server gestartet und
die Datenbankverbindung hergestellt. ANMERKUNG: Stellen Sie sicher, dass Node.js auf Ihrem Computer installiert ist. 

# Website aufrufen
Um die Website aufzurufen, muss der Port 3000 des Servers adressiert werden. Falls der Server auf dem gleichen Gerät läuft, welches auch den Testclient darstellt, so kann die Webseite 
unter dem folgenden Link erreicht werden: http://localhost:3000/ 
Andernfalls muss "localhost" durch die IP-Adresse des Servers ersetzt werden.
