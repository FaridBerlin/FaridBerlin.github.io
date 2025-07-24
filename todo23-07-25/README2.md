## GitHub Action

- In GitHub gibt es diese Dinge, die man GitHub Actions nennt
   - Das sind kleine Stücke von Automatisierung
   - Actions können etwas Code ausführen / eine Aktion für dich durchführen
   - Zum Beispiel jedes Mal, wenn du einen Push machst, wird es npm run build ausführen
   - Es kann sogar deinen Code an andere Orte kopieren

- Das ist die einfachste Form einer "CI/CD" Pipeline
   - Continuous Integration
   - Continuous Deployment

## Render.com

- Es gibt auch viele andere Möglichkeiten des Deployments
- Heute schauen wir uns an, wie man eine React App mit Render.com deployed

## Todo-App

1. Erstellt ein neues React-Projekt

2. Legt zwei neue Dateien im components-Ordner an: ToDoList.jsx und ToDoItem.jsx

3. In ToDoList.jsx:
- Die Komponente returned ein div mit folgendem Inhalt:
   - eine h1 mit dem Titel "Todo Liste"
   - darunter ein Formular mit einem Input und einem Button
   - darunter eine zunächst leere unordered list und einen p-Tag mit dem Text "Erledigte Todos:"

4. Formular konfigurieren:
- Über das Formular soll es möglich sein, ein neues Todo einzutragen
- Das Input-Feld soll von React kontrolliert wiederverwenden
- Beim Absenden des Formulars soll eine Funktion mit dem Namen "handleSubmit" aufgerufen werden