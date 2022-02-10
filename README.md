# Simple Mongo DB Server
Wir wollen nun ein paar Express routen bauen für unsere **animals** Collection.

## Importiere den Datensatz "animals.json"
* erstelle mit Compass eine neue Datenbank **test** mit einer Collection **animals**
* importiere dann die Datei **animals.json**

## Routen
* `GET /animals` -> alle Animals zurück geben
* `POST /animals` -> Ein Tier hinzufügen
* `GET /animals/:id` - > Ein Tier anzeigen
* `DELETE /animals/:id` - > Ein Tier löschen

## Alle anzeigen
`GET /animals`  
Hier sollen alle Daten aus allen Documents angezeigt werden.

## Post
`POST /animals`  
Es soll ein neues Tier hinzugefügt werden.
Es sollen nur **name, age, favoriteFood und kind** in die Datenbank gespeichert werden, auch wenn der Client mehr schickt!

## Get one
`GET /animals/:id`  
Es sollen alle Daten aus einem Document zurück gegeben werden.

## löschen
`DELETE /animals/:id`  
Ess soll genau ein Dokument gelöscht werden.
