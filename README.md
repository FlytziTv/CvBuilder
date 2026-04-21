# CV Builder

Générateur de CV moderne pour créer, prévisualiser et exporter un CV rapidement.

## Fonctionnalités

- Création de CV via formulaires simples
- Prévisualisation en temps réel
- Export en PDF
- Thèmes personnalisables

## Stack technique

- Frontend : React / TypeScript
- Styling : Tailwind CSS
- Génération PDF : bibliothèque dédiée (ex: `pdf-lib`)

## Installation

```bash
git clone https://github.com/<utilisateur>/cv_builder.git
cd cv_builder
npm install
npm run dev
```

## Utilisation

1. Lancer l’application en local
2. Compléter les sections du CV
3. Choisir un thème
4. Exporter en PDF

## Structure du projet

```text
cv_builder/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ utils/
│  └─ styles/
├─ public/
└─ README.md
```

## Scripts utiles

```bash
npm run dev      # développement
npm run build    # build production
npm run preview  # prévisualiser le build
npm run lint     # qualité du code
```

## Roadmap

- [ ] Import depuis LinkedIn
- [ ] Plusieurs modèles premium
- [ ] Export DOCX
- [ ] Authentification utilisateur

## Contribution

Les contributions sont ouvertes via issues et pull requests.

## Licence

MIT
