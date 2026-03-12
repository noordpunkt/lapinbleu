# Livre d'ingrédients (FR)

Livre en français, style catalogue noir et blanc (type IKEA). Une page = un ingrédient.  
Tech : **Next.js**, **Tailwind CSS**, déploiement sur **Vercel**.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Export PDF

Dans le navigateur : **Imprimer** (Ctrl/Cmd + P) → **Enregistrer au format PDF**. Chaque ingrédient est sur une page (format A5).

## Ajouter un ingrédient

1. Éditer `src/data/ingredients.ts` : ajouter un objet dans le tableau `ingredients` (voir le type `Ingredient`).
2. Si tu ajoutes une nouvelle illustration, créer un composant dans `src/components/` et l'enregistrer dans `IngredientPage.tsx` (switch sur `illustration`).

## Déploiement Vercel

- Lier le repo au projet sur [vercel.com](https://vercel.com) ; le build Next.js est détecté automatiquement.
- Ou en CLI : `npx vercel` depuis la racine du projet.
