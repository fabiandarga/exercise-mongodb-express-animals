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
Es soll genau ein Dokument gelöscht werden.

## Animals suchen
`GET /animals`  
Füge die Möglichkeit hinzu nach Tieren zu suchen.  
Dafür benutzen wir die URL Parameter:
- name
- age
- kind

z.B.:
- ` GET /animals?name=Fluffy` <- Findet alle Tiere mit dem namen Fluffy
- ` GET /animals?age=3` <- Findet alle Tiere mit dem alter 3
- ` GET /animals?kind=Mouse` <- Findet alle Mäuse
- ` GET /animals?kind=Mouse&age=10` <- Findet alle Mäuse mit dem alter 10

Wie man Query-Parameter benutzt: [handle-get-request-query-string-parameters-in-express-js](https://coderrocketfuel.com/article/handle-get-request-query-string-parameters-in-express-js)


### Bonus
Die Suche nach dem Namen soll auch Teile des Strings  erkennen.  
z.B.:
` GET /animals?name=fl` -> Findet Fluffy und Flappy