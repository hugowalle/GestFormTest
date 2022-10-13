Solution du test GestForm:

## Les prérequis
#### Configuration
* Avoir Python 3.X
* Avoir pip
* `pip install -r requirements.txt`
* Avoir Node.js 16.x
* Avoir npm 8.x
* `npm install -g @angular/cli`
* Installer le reste des librairies : `pip install -r requirement.txt`

## Lancement
Lancer tout d'abord le serveur backend en vous placant dans backend/src:
```bash
    uvicorn listDivider:app --reload --port 8000
```

Puis lancer la page web en vous placant dans angular-gestform:
```bash
    ng serve -o
```
Ou alors vous pouvez lancer "gestform.bat" sur windows, ou "gestform.sh" sur Linux afin de lancer le tout automatiquement

## Utilisation
* Les serveurs lancés vous aurez la page lancée dans votre navigateur.
* Rentrez alors une liste de nombres compris entre -1000 et 1000 séparés par des virgules.
* Appuyez sur le bouton "Traiter".
* S'affichera alors plus bas la liste ayant été traitée.






