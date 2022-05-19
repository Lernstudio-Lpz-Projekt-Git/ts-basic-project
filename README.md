# ts-basic-project
TypeScript Basic-Projekt, dass Klassen und deren Vererbungen beschreibt. Klassen bestehen aus einem Bezeichner, Eigenschaften und Verhalten. Klassen nutzen: Abstraktion, Kapselung, Vererbung.
```powershell
# Projekt-Packages installieren
npm install
```
```powershell
# Projekt-Server starten und Änderungebn verfolgen
npm run watch
npm run dev2
```

# So richten Sie ein neues TypeScript-Basic-Projekt ein 

In dieser Read-me erfahren Sie, wie Sie ein TypeScript-Projekt ohne die Hilfe eines Starters einrichten. Außerdem erfahren Sie, wie das Kompilieren in TypeScript funktioniert und wie Sie einen Linter mit Ihrem TypeScript-Projekt verwenden.

#
# Starten eines TypeScript-Projekts
## <b style="color:DarkOrange">Installation</b>

Um mit Ihrem TypeScript-Projekt zu beginnen, müssen Sie ein Verzeichnis für Ihr Projekt erstellen: 
```bash
# verzeichnis erzeugen
mkdir typescript-project
```
Wechseln Sie nun in Ihr Projektverzeichnis: 
```bash
# In das neue Verzeichnis wechseln
cd typescript-project
```
TypeScript installieren: 
```powershell
# TypeScript installieren
npm i typescript --save-dev
npm add -D @types/node typescript
```


## <b style="color:DarkOrange">Initialisieren und Ausführen</b>

TypeScript initialisieren: 
npm enthält auch ein Tool namens <i style="color:teal;">npx</i>, die ausführbaren Pakete kompiliert. <i style="color:teal;">npx</i> ermöglicht es uns, Pakete auszuführen, ohne sie global installieren zu müssen. 
```powershell
# Compiler initialisieren
npx tsc --init
```
Mit folgenden Tool können Sie ihren TypeScript-Code kompilieren. 
```powershell
# TS Dateien kompilieren
npx tsc
```
Sie können den Überwachungsmodus (watch) mit dem folgenden Befehl aktivieren: 
```powershell
# Überwachungsmodus aktivieren
npx tsc -w
```

## <b style="color:DarkOrange">TS Ausführungs-Scripte</b>
Nachdem Sie die <i style="color:teal;">tsconfig.ts</i> angepasst ahaben, fügen wir der Entwicklungsumgebung noch zwei Packages hinzu:
### TypeScript Live-Comilierungs-Packages installieren: 
<i style="color:teal;">ts-node</i> ist eine TypeScript-Ausführungsengine und REPL für Node. js. Es wandelt TypeScript in JavaScript um und ermöglicht die direkte Ausführung von TypeScript auf Node.js ohne Vorkompilierung.
```powershell
# ts-node hinzufügen
npm add -D ts-node
```
<i style="color:teal;">nodemon</i> ist ein von @rem entwickeltes CLI-Dienstprogramm, dass die Node-App umschließt, das Dateisystem überwacht und den Prozess automatisch neu startet. Wenn sie diese Möglichkeit für alle Ihre Projekte nutzen möchten, verwenden sie den parameter <i style="color:teal;">-g</i> ansonsten den Parameter: <i style="color:teal;">--save-dev</i>
```powershell
# nodemon hinzufügen
npm install nodemon -g
```
Ein Problem bei einer lokalen Installation ist, dass Sie den Befehl <i style="color:teal;">nodemon</i> nicht direkt aus der Befehlszeile verwenden können:
```powershell
# Output
command not found: nodemon
```
In der package.json können Sie nun zwei Scripte zu automatischen Starten einrichten:
```powershell
"watch": "tsc -w",
"dev": "nodemon dist/app.js",
```

## <b style="color:DarkOrange">TypeScript-Stils mit Lint</b>
Die Verwendung eines Linters beim Codieren hilft Ihnen, Inkonsistenzen, Syntaxfehler und Auslassungen in Ihrem Code schnell zu finden.

Google TypeScript Style, bekannt als GTS, ist Styleguide, Linter und automatische Codekorrektur in einem. Die Verwendung von GTS hilft Ihnen, schnell ein neues TypeScript-Projekt zu erstellen. 

```powershell
# Installation von GTS:
npm i gts --save-dev
```

```powershell
# GTS initialisieren: 
npx gts init
```

 Sie können jetzt Zum Beispiel <i style="color:teal;">npm run compile</i> ausführen um Ihr TypeScript-Projekt zu kompilieren. Um nach Linting-Fehlern zu suchen, können Sie <i style="color:teal;">npm run check</i> ausführen. 

```powershell
# GTS: TypeScript-Projekt kompilieren
npm run compile
```

```powershell
# GTS: Linting-Fehlern suchen
npm run check
```

```powershell
# GTS: Linting-Fehlern beheben
npm run fix
```

## <b style="color:DarkOrange">License</b>
[MIT](https://choosealicense.com/licenses/mit/)

---
### Hinweis: 
>[^1]:REPL steht für Read Evaluate Print Loop (Lesen Auswerten Drucken Wiederholen) und ist eine Programmiersprachenumgebung (im Grunde ein Konsolenfenster), die einzelne Ausdrücke als Benutzereingaben entgegennimmt und das Ergebnis nach der Ausführung an die Konsole zurückgibt. Die REPL-Sitzung bietet eine praktische Möglichkeit, einfachen JavaScript-Code >schnell zu testen.