/**
 * Reorders ingredients array: pasta together, risottos together at end of plats block.
 * Run: node scripts/reorder-plats-risotto.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const file = path.join(ROOT, "src/data/ingredients.ts");
let content = fs.readFileSync(file, "utf8");

const startMarker = "export const ingredients: Ingredient[] = [";
const start = content.indexOf(startMarker);
if (start === -1) throw new Error("ingredients array not found");

const arrayContentStart = start + startMarker.length;
const arrayEnd = content.lastIndexOf("];");
const prefix = content.slice(0, arrayContentStart);
const suffix = content.slice(arrayEnd);
const arrayBody = content.slice(arrayContentStart, arrayEnd);

const blockRegex = /\n  \{[\s\S]*?\n  \},/g;
const blocks = [...arrayBody.matchAll(blockRegex)].map((m) => m[0]);

function getId(block) {
  const m = block.match(/id: "([^"]+)"/);
  return m?.[1] ?? null;
}

const byId = new Map();
for (const block of blocks) {
  const id = getId(block);
  if (!id) throw new Error("block without id");
  if (byId.has(id)) throw new Error(`duplicate id ${id}`);
  byId.set(id, block);
}

const order = [...byId.keys()];
const from = order.indexOf("ravioli-saint-jacques");
if (from === -1) throw new Error("ravioli-saint-jacques not found");

const head = order.slice(0, from);
const tailStart = order.indexOf("creme-caramel");
if (tailStart === -1) throw new Error("creme-caramel not found");

const middleIds = order.slice(from, tailStart);

const pastaIds = [
  "ravioli-saint-jacques",
  "cavatelli-pesto",
  "ravioli-pesto-di-liguria",
];

const risottoIds = [
  "risotto-safran-magret-canard-orange",
  "risotto-betterave-fruits-de-mer",
  "risotto-osso-buco",
  "risotto-gambas",
];

const risottoSet = new Set([
  "magret-risotto-safran-orange",
  ...risottoIds.filter((id) => id !== "risotto-safran-magret-canard-orange"),
]);

const otherMiddle = middleIds.filter(
  (id) => !pastaIds.includes(id) && !risottoSet.has(id)
);

const newMiddle = [...pastaIds, ...otherMiddle, ...risottoIds];
const newOrder = [...head, ...newMiddle, ...order.slice(tailStart)];

for (const id of newOrder) {
  if (!byId.has(id) && id !== "risotto-safran-magret-canard-orange") {
    throw new Error(`missing block for ${id}`);
  }
}

// Build new saffron risotto from renamed magret recipe
const oldMagret = byId.get("magret-risotto-safran-orange");
if (!oldMagret) throw new Error("magret-risotto-safran-orange not found");

const newRisotto = oldMagret
  .replace(/id: "magret-risotto-safran-orange"/, 'id: "risotto-safran-magret-canard-orange"')
  .replace(/slug: "magret-risotto-safran-orange"/, 'slug: "risotto-safran-magret-canard-orange"')
  .replace(
    /title: "Magret de canard avec risotto safran"/,
    'title: "Risotto safran avec magret de canard à l\'orange"'
  )
  .replace(
    /intro:\n      "Magret de canard servi avec un risotto carnaroli au safran et une sauce à l'orange\. L'assiette joue sur l'équilibre entre le gras du canard, la douceur crémeuse du risotto et la tension acidulée de l'orange\.",/,
    `intro:
      "Pour 4 personnes. Risotto carnaroli au safran naturel, servi avec des tranches de magret de canard et une sauce à l'orange. L'assiette joue sur l'équilibre entre le gras du canard, la douceur crémeuse du risotto et la tension acidulée de l'orange.",`
  )
  .replace(
    /"Cuire le risotto : faire suer 1 échalote finement ciselée dans un peu de beurre ou d'huile d'olive, ajouter 400 g de riz carnaroli et le nacrer\. Mouiller progressivement avec un bouillon chaud, en remuant régulièrement\.",\n      "À mi-cuisson, ajouter une infusion de safran ou quelques filaments directement dans le bouillon\. Continuer jusqu'à ce que le riz soit fondant mais encore légèrement ferme au centre\.",\n      "Hors du feu, monter le risotto avec 4 tranches de beurre et 100 g de Parmigiani râpé pour obtenir une texture souple et brillante\. Terminer avec quelques brins de ciboulette finement ciselés\.",/,
    `"Risotto : dans une sauteuse, chauffer un filet d'huile d'olive, ajouter 400 g de riz carnaroli et le nacrer 1 à 2 minutes en remuant. Mouiller progressivement avec un bouillon chaud en remuant régulièrement. Après 5 minutes de cuisson, ajouter directement dans la sauteuse une pincée de filaments de safran naturel (jamais de safran en poudre). Poursuivre la cuisson environ 18 à 20 minutes au total, jusqu'à un riz fondant mais encore légèrement al dente.",
      "Finition du risotto : hors du feu, monter avec 80 g de beurre français froid en morceaux et 80 g de Parmigiano Reggiano râpé pour obtenir une texture souple et brillante.",`
  )
  .replace(
    /"Dressage : disposer le risotto d'un côté de l'assiette, ajouter dessus un peu de ciboulette, puis placer de l'autre côté les tranches de magret et napper ou entourer légèrement de sauce à l'orange\.",/,
    `"Dressage : dresser le risotto au safran dans l'assiette, disposer les tranches de magret dessus et napper légèrement de sauce à l'orange.",`
  )
  .replace(
    /"Le safran parfume et colore le risotto, tandis que l'acidité de l'orange équilibre la richesse du gras du canard\.",/,
    `"Le safran naturel en filaments, ajouté directement dans la sauteuse après 5 minutes de cuisson, parfume et colore le risotto ; l'acidité de l'orange équilibre la richesse du gras du canard.",`
  );

byId.set("risotto-safran-magret-canard-orange", newRisotto);
byId.delete("magret-risotto-safran-orange");

let page = 1;
const reordered = newOrder.map((id) => {
  const block = byId.get(id);
  if (!block) throw new Error(`missing ${id}`);
  const updated = block.replace(/pageNumber: \d+,/, `pageNumber: ${page},`);
  page += 1;
  return updated;
});

const newArrayBody = reordered.join("");
fs.writeFileSync(file, prefix + newArrayBody + suffix);
console.log(`Reordered ${newOrder.length} recipes. Pages 28-47 plats/risotto block updated.`);
