# Portfolio — Victor Kono-Manetti

**En ligne : https://victor-kono-manetti.vercel.app**

Portfolio personnel d'étudiant en **Bachelor Informatique à Ynov Toulouse** (spécialisation cybersécurité), en recherche de stage 2026-2027 en cybersécurité / infrastructure.

## Contenu

- **Accueil** : présentation et statut de recherche de stage
- **Projets** : 8 projets d'école et personnels, avec captures, description et technologies
- **Parcours** : formation et expériences
- **Compétences** : technique, langues, centres d'intérêt
- **Contact** : email et téléphone, avec bouton de copie

## Stack

Site statique, sans framework ni étape de build :

- HTML5 sémantique
- CSS (variables, thème clair / sombre automatique, grilles responsives)
- JavaScript natif pour les boutons de copie

## Structure

```
.
├── index.html
├── css/style.css
├── js/main.js
└── assets/img/
    ├── victor.jpg
    └── projets/        # captures des projets
```

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
```

## Déploiement

Déployé sur **Vercel** depuis la branche `main` : chaque push sur `main` met le site à jour automatiquement.

## Organisation Git

Chaque fonctionnalité est développée sur sa propre branche (`feat/...`) puis fusionnée dans `main` avec un commit de merge, pour garder un historique lisible :

| Branche | Contenu |
|---|---|
| `feat/structure` | Squelette HTML, palette, typographie |
| `feat/hero-a-propos` | Accueil et présentation |
| `feat/projets` | Galerie des projets |
| `feat/parcours-competences` | Parcours et compétences |
| `feat/contact` | Contact et boutons de copie |
| `feat/responsive` | Mobile et accessibilité |
| `docs/readme` | Documentation |
