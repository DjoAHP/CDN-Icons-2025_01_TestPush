# Bibliothèque d'Icônes Personnalisée

Une collection d'icônes SVG modernes pour vos projets web.

## Installation

### NPM

```bash
npm install @yourusername/icon-library
```

### CDN

```html
<!-- Via jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@jodevahp/ahp-icons-library-2025@1.0.3/dist/index.umd.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/@jodevahp/ahp-icons-library-2025@1.0.3/dist/index.css"
  rel="stylesheet"
/>
```

## Utilisation

### React

```jsx
import { StarIcon, HeartIcon } from "@jodevahp/ahp-icons-library-2025@1.0.3";

function App() {
  return (
    <div>
      <StarIcon size={24} color="gold" />
      <HeartIcon size={24} color="red" />
    </div>
  );
}
```

### HTML

(ahp-icon-...)

```html
<i class="ahp-icon-star"></i> 
<i class="ahp-icon-heart"></i>
```

## Licence

## MIT
-----
## Processus

# 1. Ajout icones:
1. Créer le fichier tsx pour l' icone SVG ( ./icons).
2. style.css (Noms intégration_ex: "ahp-icon-heart")
3. index.ts (Export)
4. App.tsx (Noms ID icons)
-----

# 2. PUSH:
```bash
npm run build
git add .
git commit -m "commit"
git push -u origin main
npm version patch
npm publish --access public
```