///////// INITIALISATION /////////
// On utilise la base "projet". Cette commande la crée si elle n'existe pas.
use projet

// On crée la collection "joueurs"
db.createCollection("joueurs")
///////////////////////////////////


///////// INSERTION /////////
// On insère un joueur d'exemple. Ici, Stéphane Ruffier

db.joueurs.insert({
    "nom": "Ruffier",
    "prenom": "Stéphane",
    "date_naissance": "9/27/1986",
    "equipe_courante": "A.S.Saint-Etienne",
    "poids": 90,
    "taille": 1.86,
    "poste": "Gardien"
})
// Les données insérées sont plutôt standard ici

// On crée la collection "equipes"
db.createCollection("equipes")

// On insère une équipe d'exemple. Ici, l'ASSE
db.equipes.insert({
    "nom": "A.S.Saint-Etienne",
    "couleurs": ["vert", "blanc"],
    "stade": "Le Chaudron" 
})
// Les couleurs sont dans un tableau, pour permettre la recherche d'une équipe via ses couleurs (ex: Je veux toutes les équipes ayant du vert)

// On crée la collection "matchs"
db.createCollection("matchs")

// On insère un match d'exemple. Ici, un magnifique 8-0 de l'ASSE contre l'OL en coupe de France
db.matchs.insert({
    "equipe_domicile": "A.S.Saint-Etienne",
    "equipe_exterieur": "Olympique Lyonnais",
    "competition": "Coupe de France",
    "score_domicile": 8,
    "score_exterieur": 0,
    "joueurs_domicile": [
        {
            nom: "Ruffier",
            prenom: "Stéphane",
            note: 10
        },
        {
            nom: "Perrin",
            prenom: "Loïc",
            note: 10
        }
    ],
    "joueurs_exterieur": [
        {
            nom: "Denayer",
            prenom: "Jason",
            note: 1
        },
        {
            nom: "Fekir",
            prenom: "Nabil",
            note: 2
        }
    ]
})
//////////////////////////////


///////// RECHERCHE //////////
// Recherche d'un joueur via poste & âge max.
// Ici, gardien de 24 ans ou moins
db.joueurs.find({
    "poste": "Gardien",
    "date_naissance": {$gte: "1/1/1995"}
})
//////////////////////////////


///////// Indexation /////////
// Création d'index sur la paire nom/prénom des joueurs
db.joueurs.createIndex({nom: 1, prenom: 1})
// Création d'index sur le nom d'une équipe
db.joueurs.createIndex({nom: 1})
//////////////////////////////


