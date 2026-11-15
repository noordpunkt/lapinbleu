export type Step = string;

/** Sections du livre (chapitres) — noms en français */
export const sections = [
  { id: "corps-gras-liquides", title: "Les corps gras et liquides" },
  { id: "bases", title: "Les bases et les sauces" },
  { id: "coupes", title: "Les coupes" },
  { id: "techniques", title: "Les techniques" },
  { id: "entrees", title: "Entrées" },
  { id: "plats-principaux", title: "Plats principaux" },
  { id: "desserts", title: "Les desserts" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function getSectionTitle(sectionId: SectionId): string {
  return sections.find((s) => s.id === sectionId)?.title ?? sectionId;
}

export type Ingredient = {
  id: string;
  /** URL-friendly name (e.g. /beurre-noisette) */
  slug: string;
  /** Id de la section (chapitre) */
  sectionId: SectionId;
  title: string;
  intro: string;
  steps: Step[];
  chemistry: string[];
  tip?: {
    title: string;
    description: string;
    steps: Step[];
  };
  illustration: "beurre-noisette" | "brunoise" | "none";
  /** Ruta de imagen en public (ej: "/images/beurre-noisette.jpg"). Si existe, se usa en lugar del SVG. */
  image?: string;
  pageNumber: number;
};

export const ingredients: Ingredient[] = [
  {
    id: "beurre-noisette",
    slug: "beurre-noisette",
    sectionId: "corps-gras-liquides",
    title: "Beurre Noisette",
    intro:
      "« Beurre noisette » se traduit littéralement par « beurre noisette », mais ce n'est pas du beurre aux noisettes. C'est une technique qui consiste à cuire le beurre jusqu'à lui donner un goût toasté, de noix.",
    steps: [
      "Faire fondre le beurre dans une poêle à feu moyen.",
      "Laisser cuire jusqu'à ce que le beurre mousse, change de couleur et dégage une odeur de noix toastée.",
      "Retirer du feu avant qu'il ne brûle.",
    ],
    chemistry: [
      "Le beurre contient des protéines laitières et du lactose. En les chauffant, ils caramélisent légèrement et produisent cette saveur et cette couleur toastées caractéristiques.",
    ],
    tip: {
      title: "Idée : Beurre noisette et miel",
      description:
        "Quand on combine le beurre noisette avec du miel, on obtient quelque chose de délicieux : une sorte de sauce douce et toastée, au parfum de noix.",
      steps: [
        "Faire le beurre noisette comme d'habitude, jusqu'à la couleur dorée et l'arôme de noix.",
        "Retirer du feu et ajouter le miel (la quantité selon le goût).",
        "Mélanger bien ; le beurre chaud permet au miel de s'intégrer et de former une sauce brillante et liquide.",
      ],
    },
    illustration: "beurre-noisette",
    image: "/images/01-Beurre-Noisette.png",
    pageNumber: 1,
  },
  {
    id: "beurre-clarifie",
    slug: "beurre-clarifie",
    sectionId: "corps-gras-liquides",
    title: "Beurre clarifié",
    intro:
      "Le beurre clarifié est un beurre fondu dont on retire l'eau et les solides du lait. Il ne reste que la matière grasse pure, plus stable à la chaleur que le beurre ordinaire. On l'utilise pour saisir, poêler ou monter des sauces sans brûler.",
    steps: [
      "Faire fondre le beurre à feu très doux dans une casserole ou une poêle.",
      "Laisser mousser puis se séparer : la matière grasse dorée flotte en surface, l'eau et les solides du lait se déposent au fond.",
      "Écumer la mousse en surface si besoin.",
      "Verser délicatement la partie dorée en gardant les dépôts blancs au fond — ou passer au chinois fin ou à travers un linge propre.",
      "Conserver au frais dans un bocal propre et sec ; il se garde plusieurs semaines.",
    ],
    chemistry: [
      "Le beurre contient environ 80 % de matière grasse, 16 % d'eau et 4 % de solides du lait. Ce sont surtout ces solides qui brûlent en premier à forte chaleur.",
      "En retirant l'eau et les solides, le point de fumée augmente : le beurre clarifié supporte mieux les cuissons plus vives.",
      "Ne pas confondre avec le beurre noisette : ici on sépare les composants, on ne cherche pas à colorer les solides du lait.",
    ],
    tip: {
      title: "Mémoire : beurre clarifié ou beurre noisette ?",
      description:
        "Beurre clarifié = séparer l'eau et les solides pour une matière grasse pure. Beurre noisette = cuire le beurre jusqu'à coloration dorée et parfum de noix.",
      steps: [
        "Pour poêler ou saisir à feu vif : beurre clarifié.",
        "Pour parfumer une sauce, des légumes ou une finition : beurre noisette.",
      ],
    },
    illustration: "none",
    image: "/images/Beurre-Clarifie.png",
    pageNumber: 2,
  },
  {
    id: "beurre-manie-roux",
    slug: "beurre-manie-roux",
    sectionId: "corps-gras-liquides",
    title: "Beurre manié et roux",
    intro:
      "Le roux et le beurre manié sont deux liaisons à base de beurre et de farine. Le roux se cuit avant d'ajouter le liquide ; le beurre manié s'ajoute à froid en fin de cuisson pour lier une sauce sans la cuire.",
    steps: [
      "Roux : faire fondre du beurre à feu doux, ajouter la farine en quantité égale (en poids), mélanger et laisser cuire 2 à 5 min sans colorer (roux blanc) ou jusqu'à coloration blonde ou noisette selon la sauce. Puis verser le liquide froid (lait, bouillon) et faire épaissir en remuant.",
      "Beurre manié : mélanger à parts égales du beurre ramolli et de la farine jusqu'à obtenir une pâte lisse. Réfrigérer si besoin. En fin de cuisson, incorporer par petits morceaux dans la sauce bouillante en fouettant ; la sauce épaissit en quelques minutes sans cuire la farine.",
      "Quand utiliser quoi : le roux sert de base pour béchamel, velouté, sauces longues. Le beurre manié sert à corriger ou lier rapidement une sauce déjà en cours sans la recuire.",
    ],
    chemistry: [
      "Dans le roux, la cuisson de la farine désactive une enzyme qui pourrait liquéfier la sauce ; la fécule gonfle au contact du liquide chaud et lie la sauce.",
      "Dans le beurre manié, la farine n'est pas cuite : elle épaissit par gélatinisation de l'amidon au contact du liquide chaud. Le beurre fond et disperse la farine.",
    ],
    tip: {
      title: "Mémoire : roux = base, beurre manié = correctif",
      description:
        "Pensez « roux au début » pour les grandes sauces, « beurre manié à la fin » pour lier ou rattraper une sauce trop fluide.",
      steps: [
        "Pour une béchamel : faire un roux blanc, ajouter le lait froid, laisser épaissir.",
        "Si la sauce reste trop liquide après cuisson : retirer du feu, ajouter du beurre manié par petites noix en fouettant.",
      ],
    },
    illustration: "none",
    image: "/images/Beurre-Manie-Roux.png",
    pageNumber: 3,
  },
  {
    id: "beurre",
    slug: "beurre",
    sectionId: "corps-gras-liquides",
    title: "Le beurre",
    intro:
      "Le beurre est l'un des grands corps gras de la cuisine française. Il sert à cuire doucement, à nourrir une sauce, à monter une réduction et à apporter un goût rond, lacté et parfois noisetté.",
    steps: [
      "Utiliser un beurre doux pour la cuisson ou la liaison, et ajouter le beurre salé surtout quand on veut aussi apporter de l'assaisonnement.",
      "Pour une cuisson douce, laisser fondre le beurre sans le brûler ; pour une saveur plus profonde, poursuivre jusqu'au beurre mousseux ou noisette selon l'usage.",
      "En finition, incorporer de petits morceaux de beurre froid hors du feu ou sur feu très doux pour monter une sauce et lui donner de la brillance.",
    ],
    chemistry: [
      "Le beurre est une émulsion d'eau dans la matière grasse : à la chauffe, l'eau s'évapore puis les protéines laitières peuvent colorer et développer des arômes.",
      "Ajouté froid en fin de cuisson, il épaissit légèrement et donne une texture plus soyeuse à la sauce.",
    ],
    illustration: "none",
    image: "/images/Le-Beurre.png",
    pageNumber: 4,
  },
  {
    id: "huile",
    slug: "huile",
    sectionId: "corps-gras-liquides",
    title: "L'huile d'olive",
    intro:
      "L'huile d'olive est l'un des corps gras les plus présents en cuisine française, surtout pour assaisonner, cuire doucement ou accompagner les légumes, poissons et sauces claires. On la choisit autant pour son parfum que pour son usage.",
    steps: [
      "Employer l'huile d'olive surtout pour les cuissons douces à moyennes, les légumes, les poissons et les assaisonnements.",
      "Chauffer d'abord la poêle, puis ajouter l'huile d'olive juste avant le produit afin d'éviter qu'elle ne chauffe inutilement trop longtemps.",
      "Pour une vinaigrette ou une finition, utiliser l'huile d'olive comme support d'arômes avec herbes, agrumes, ail, moutarde ou vinaigre.",
    ],
    chemistry: [
      "Comme toute huile, l'huile d'olive a une limite de chauffe : au-delà, elle se dégrade, perd son parfum et peut développer de l'amertume.",
      "Sa matière grasse transporte les molécules aromatiques liposolubles et prolonge les saveurs en bouche.",
    ],
    illustration: "none",
    image: "/images/Huile-Olive.png",
    pageNumber: 5,
  },
  {
    id: "graisse-canard",
    slug: "graisse-canard",
    sectionId: "corps-gras-liquides",
    title: "La graisse de canard",
    intro:
      "La graisse de canard est un corps gras traditionnel de la cuisine française du Sud-Ouest. Elle supporte bien la cuisson, enrobe parfaitement les pommes de terre et donne une saveur plus profonde qu'une huile neutre.",
    steps: [
      "Faire fondre doucement la graisse de canard avant de l'utiliser pour rissoler, confire ou enrober une garniture.",
      "L'utiliser pour des pommes de terre, des légumes racines ou des viandes déjà cuites que l'on veut réchauffer en leur donnant du goût.",
      "La filtrer puis la conserver au froid après usage si elle est restée propre et peu oxydée.",
    ],
    chemistry: [
      "Sa richesse en lipides enrobe bien les surfaces et favorise une coloration régulière à la cuisson.",
      "Son goût reste plus marqué que celui d'une huile neutre et participe directement à l'identité du plat.",
    ],
    illustration: "none",
    image: "/images/Graisse-Canard.png",
    pageNumber: 6,
  },
  {
    id: "creme",
    slug: "creme",
    sectionId: "corps-gras-liquides",
    title: "La crème",
    intro:
      "La crème est à la fois un corps gras, un liquide et un outil de liaison. Elle arrondit l'acidité, calme le feu d'une réduction et donne une texture plus enveloppante aux sauces.",
    steps: [
      "Ajouter la crème après une réduction ou un déglaçage pour donner du corps à la sauce.",
      "La faire réduire doucement si l'on cherche une texture plus nappante et plus concentrée.",
      "Éviter l'ébullition trop brutale des crèmes plus légères, surtout si la sauce est acide, pour limiter le risque de séparation.",
    ],
    chemistry: [
      "La crème est une émulsion de matière grasse dans l'eau ; sa teneur en gras l'aide à mieux résister à la chaleur qu'un lait simple.",
      "Elle adoucit la perception de l'acidité et prolonge les arômes en bouche grâce à sa phase grasse.",
    ],
    illustration: "none",
    image: "/images/La-Creme.png",
    pageNumber: 7,
  },
  {
    id: "lait",
    slug: "lait",
    sectionId: "corps-gras-liquides",
    title: "Le lait",
    intro:
      "Le lait est un milieu liquide doux, utilisé pour les béchamels, les infusions, certaines purées et les cuissons délicates. Il apporte du moelleux sans la richesse complète de la crème.",
    steps: [
      "Le chauffer séparément avant de l'incorporer à un roux ou à une autre base pour mieux contrôler la texture finale.",
      "L'infuser si besoin avec épices, herbes ou aromates, puis filtrer avant usage.",
      "Éviter de le faire bouillir trop violemment longtemps afin de conserver un goût propre et une texture régulière.",
    ],
    chemistry: [
      "Le lait contient de l'eau, des protéines, du lactose et un peu de matière grasse : cet équilibre lui permet de lier sans alourdir autant qu'une crème.",
      "Ses protéines et sucres participent à la douceur du goût et à certaines colorations lorsqu'il chauffe ou réduit.",
    ],
    illustration: "none",
    image: "/images/Le-Lait.png",
    pageNumber: 8,
  },
  {
    id: "fond-blanc",
    slug: "fond-blanc",
    sectionId: "corps-gras-liquides",
    title: "Le fond blanc",
    intro:
      "Le fond blanc est un liquide de base préparé sans forte coloration. Il soutient une sauce ou une cuisson en apportant structure, saveur et longueur sans dominer visuellement le plat.",
    steps: [
      "Le préparer à partir d'os, de parures et d'une garniture aromatique, en gardant une cuisson douce pour préserver sa clarté.",
      "L'utiliser pour mouiller un velouté, pocher une volaille, prolonger un jus ou construire une sauce plus légère qu'avec un fond brun.",
      "Le faire réduire si l'on souhaite davantage de concentration, tout en surveillant le sel.",
    ],
    chemistry: [
      "La gélatine extraite des os donne du corps au liquide et une sensation plus nappante après réduction.",
      "L'absence de forte coloration garde des arômes plus délicats et une couleur plus claire.",
    ],
    illustration: "none",
    image: "/images/Fond-Blanc.png",
    pageNumber: 9,
  },
  {
    id: "fond-brun",
    slug: "fond-brun",
    sectionId: "corps-gras-liquides",
    title: "Le fond brun",
    intro:
      "Le fond brun est un liquide de base plus puissant, obtenu à partir d'os et de garnitures colorés. Il sert aux sauces brunes, aux jus et aux cuissons qui demandent plus de profondeur.",
    steps: [
      "Colorer les os et les légumes avant mouillage pour construire une base aromatique plus riche.",
      "Laisser mijoter doucement puis filtrer pour obtenir un liquide net, que l'on peut ensuite réduire selon l'usage.",
      "Employer ce fond pour une sauce brune, une réduction au vin ou pour renforcer un jus de viande.",
    ],
    chemistry: [
      "La coloration initiale déclenche des réactions de Maillard, qui construisent des notes grillées et plus complexes.",
      "Comme le fond blanc, il apporte de la gélatine ; mais ici elle s'accompagne d'arômes plus puissants et plus sombres.",
    ],
    illustration: "none",
    image: "/images/Fond-Brun.png",
    pageNumber: 10,
  },
  {
    id: "vin-cuisine",
    slug: "vin-cuisine",
    sectionId: "corps-gras-liquides",
    title: "Le vin en cuisine",
    intro:
      "Le vin est un liquide de cuisson et de déglaçage central en cuisine française. Il apporte acidité, parfum et tension, à condition d'être réduit correctement.",
    steps: [
      "Utiliser le vin pour déglacer après une saisie, afin de décoller les sucs et de les intégrer à la sauce.",
      "Le laisser réduire avant d'ajouter crème, fond ou beurre, sinon la sauce restera trop acide et trop liquide.",
      "Choisir un vin adapté au plat : blanc pour les sauces claires et les poissons, rouge ou madère pour les préparations plus sombres.",
    ],
    chemistry: [
      "La réduction concentre les arômes et évapore une partie de l'eau et de l'alcool.",
      "L'acidité du vin équilibre les préparations grasses et aide à donner plus de relief au goût final.",
    ],
    illustration: "none",
    image: "/images/vin-en-cuisine.png",
    pageNumber: 11,
  },
  {
    id: "sauce-bechamel",
    slug: "sauce-bechamel",
    sectionId: "bases",
    title: "Sauce béchamel",
    intro:
      "L'une des cinq grandes sauces mères de la cuisine française, codifiées par Auguste Escoffier. La béchamel est une sauce blanche faite à partir d'un roux blanc et de lait, souvent parfumée au clou de girofle ou à la muscade.",
    steps: [
      "Préparer un roux blanc : faire fondre 50 g de beurre à feu doux, ajouter 50 g de farine et cuire 2 à 3 minutes sans coloration, en remuant.",
      "Faire chauffer 500 ml de lait à part jusqu'à environ 60 à 70 °C (idéalement autour de 65 °C). On peut l'infuser avec 1 ou 2 clous de girofle, puis filtrer.",
      "Verser le lait chaud progressivement sur le roux en fouettant pour éviter les grumeaux.",
      "Remettre sur feu doux et cuire quelques minutes jusqu'à épaississement, en remuant régulièrement.",
      "Assaisonner de sel, poivre blanc et un peu de muscade. La sauce doit napper la cuillère.",
    ],
    chemistry: [
      "L'amidon de la farine gonfle dans le lait chaud et épaissit la sauce ; le roux aide à répartir cet amidon de façon homogène.",
      "La cuisson douce évite un goût de farine crue tout en gardant la sauce lisse et blanche.",
    ],
    illustration: "none",
    image: "/images/Sauce-Bechamel.png",
    pageNumber: 12,
  },
  {
    id: "sauce-veloute",
    slug: "sauce-veloute",
    sectionId: "bases",
    title: "Sauce velouté",
    intro:
      "Le velouté est une autre sauce mère d'Escoffier. Il repose sur un roux blond très léger allongé avec un fond clair, comme un fond de volaille, de veau ou de poisson.",
    steps: [
      "Préparer un roux blond très pâle avec 50 g de beurre et 50 g de farine, sans trop le colorer.",
      "Chauffer 500 à 600 ml de fond clair (volaille, veau ou poisson selon l'usage).",
      "Verser le fond chaud progressivement sur le roux en fouettant pour obtenir une texture lisse.",
      "Laisser cuire doucement 20 à 30 minutes, en écumant si nécessaire, jusqu'à obtenir une sauce souple et brillante.",
      "Rectifier l'assaisonnement. On peut passer la sauce au chinois pour une finition plus fine.",
    ],
    chemistry: [
      "Comme dans la béchamel, l'amidon du roux donne la liaison, mais le fond apporte plus de gélatine et de saveur qu'un simple liquide.",
      "Une cuisson prolongée affine la texture et concentre le goût sans rendre la sauce lourde.",
    ],
    illustration: "none",
    image: "/images/Sauce-Veloute.png",
    pageNumber: 13,
  },
  {
    id: "sauce-espagnole",
    slug: "sauce-espagnole",
    sectionId: "bases",
    title: "Sauce espagnole",
    intro:
      "Sauce brune classique de la cuisine française et mère de nombreuses sauces dérivées. L'espagnole se construit sur un fond brun, une garniture aromatique, du concentré ou de la tomate et un roux brun.",
    steps: [
      "Faire revenir une mirepoix d'oignon, carotte et céleri dans un peu de matière grasse jusqu'à légère coloration.",
      "Ajouter un peu de concentré de tomate ou de tomate, puis cuire brièvement pour développer les arômes.",
      "Incorporer un roux brun ou singer légèrement avec de la farine pour préparer la liaison.",
      "Mouiller avec un fond brun chaud de veau ou de bœuf, puis ajouter bouquet garni, ail et éventuellement un peu de tomate supplémentaire.",
      "Laisser mijoter longuement à feu doux, écumer, puis passer et réduire jusqu'à obtenir une sauce brune riche et liée.",
    ],
    chemistry: [
      "La coloration des légumes et du roux déclenche des réactions de Maillard qui donnent à l'espagnole sa profondeur aromatique.",
      "La gélatine du fond brun et l'amidon du roux travaillent ensemble pour produire une texture nappante et soyeuse.",
    ],
    illustration: "none",
    image: "/images/Sauce-Espagnole.png",
    pageNumber: 14,
  },
  {
    id: "sauce-tomate",
    slug: "sauce-tomate",
    sectionId: "bases",
    title: "Sauce tomate",
    intro:
      "Chez Escoffier, la sauce tomate fait partie des grandes sauces de base. Plus structurée qu'une simple sauce maison, elle combine tomate, aromates et cuisson lente pour une saveur ronde et profonde.",
    steps: [
      "Faire revenir doucement oignon et ail dans de l'huile d'olive ou un peu de graisse, avec éventuellement une petite garniture aromatique.",
      "Ajouter les tomates concassées ou pelées, un peu de concentré de tomate, bouquet garni, sel et poivre.",
      "Laisser compoter à feu doux pendant 30 à 45 minutes en remuant de temps en temps.",
      "Mixer ou passer la sauce selon la texture souhaitée, puis remettre à réduire si elle est trop liquide.",
      "Rectifier l'assaisonnement en fin de cuisson avec un peu de sucre seulement si l'acidité est trop marquée.",
    ],
    chemistry: [
      "La cuisson lente évapore l'eau des tomates et concentre le glutamate naturel, ce qui renforce la saveur umami.",
      "L'acidité de la tomate s'adoucit avec le temps et avec la matière grasse, donnant une sauce plus ronde.",
    ],
    illustration: "none",
    image: "/images/Sauce-Tomate.png",
    pageNumber: 15,
  },
  {
    id: "sauce-hollandaise",
    slug: "sauce-hollandaise",
    sectionId: "bases",
    title: "Sauce hollandaise",
    intro:
      "La hollandaise est la grande sauce mère émulsionnée à chaud. Elle se prépare à partir de jaunes d'œufs, de beurre clarifié et d'une réduction acidulée, souvent citronnée ou vinaigrée.",
    steps: [
      "Préparer une réduction avec un peu de vinaigre ou de jus de citron, une échalote finement ciselée et quelques grains de poivre ; laisser réduire puis filtrer.",
      "Déposer les jaunes d'œufs dans un bol au bain-marie doux avec un peu de réduction et fouetter jusqu'à ce qu'ils deviennent mousseux et légèrement épais.",
      "Verser le beurre clarifié tiède en filet, sans cesser de fouetter, pour monter l'émulsion.",
      "Retirer du feu dès que la sauce est lisse et nappante, puis ajuster avec un peu de jus de citron, sel et poivre.",
      "Servir aussitôt ou garder tiède très brièvement ; la hollandaise supporte mal la surchauffe.",
    ],
    chemistry: [
      "Les jaunes d'œufs contiennent de la lécithine, un émulsifiant naturel qui permet de stabiliser le mélange entre eau et matière grasse.",
      "Une chaleur trop forte fait coaguler les protéines des jaunes et peut faire trancher la sauce.",
    ],
    illustration: "none",
    image: "/images/Sauce-Hollandaise.png",
    pageNumber: 16,
  },
  {
    id: "sauce-bearnaise",
    slug: "sauce-bearnaise",
    sectionId: "bases",
    title: "Sauce béarnaise",
    intro:
      "La béarnaise est une grande sauce dérivée de la hollandaise. Elle reprend la même base d'émulsion chaude au beurre et aux jaunes d'œufs, mais avec une réduction parfumée à l'échalote, au vinaigre, au poivre, au cerfeuil et à l'estragon.",
    steps: [
      "Préparer une réduction avec échalote ciselée, vinaigre, un peu de vin blanc si souhaité, grains de poivre concassés et quelques tiges d'estragon. Réduire doucement puis filtrer.",
      "Mettre les jaunes d'œufs dans un bol avec un peu de cette réduction et fouetter au bain-marie doux jusqu'à obtenir une texture mousseuse et légèrement épaissie.",
      "Verser le beurre clarifié tiède en filet tout en fouettant sans arrêt pour monter l'émulsion.",
      "Ajouter hors du feu l'estragon et le cerfeuil finement hachés, puis rectifier avec sel et quelques gouttes supplémentaires de réduction si besoin.",
      "Servir immédiatement avec une viande grillée ou rôtie ; la béarnaise ne doit pas bouillir.",
    ],
    chemistry: [
      "Comme pour la hollandaise, la lécithine des jaunes stabilise l'émulsion entre la phase aqueuse et le beurre.",
      "Les herbes ajoutées en fin de préparation gardent mieux leur parfum ; une chaleur excessive peut casser la sauce et ternir les arômes.",
    ],
    illustration: "none",
    image: "/images/Sauce-Bearnaise.png",
    pageNumber: 17,
  },
  {
    id: "mayonnaise-fait-maison",
    slug: "mayonnaise-fait-maison",
    sectionId: "bases",
    title: "Mayonnaise faite maison",
    intro:
      "Pour 6 personnes, environ 450 a 500 ml de mayonnaise. Base froide indispensable pour le vitello tonnato, les salades ou les sauces liees. Les oeufs et l'huile doivent etre a temperature ambiante.",
    steps: [
      "Ingredients : 3 jaunes d'oeufs tres frais, 1 cuillere a soupe bombee de moutarde de Dijon, 1 cuillere a cafe de sel fin, poivre blanc, jus d'un demi-citron, 420 a 450 ml d'huile neutre (tournesol ou pepins de raisin).",
      "Bol ou robot : mettre les jaunes, la moutarde, le sel, le poivre et le jus de citron. Fouetter ou mixer quelques secondes jusqu'a homogene.",
      "Monter l'emulsion : verser l'huile en filet tres fin, presque goutte a goutte au debut, en fouettant ou mixant sans arret. Quand la mayonnaise epaissit, accelerer legerement le filet d'huile.",
      "Texture : la mayonnaise doit etre lisse, brillante et tenir sur le fouet. Si elle est trop ferme, ajouter quelques gouttes de citron.",
      "Conservation : utiliser le jour meme de preference.",
    ],
    chemistry: [
      "La lecithine des jaunes d'oeufs stabilise une emulsion froide : les gouttelettes d'huile restent dispersees dans la phase aqueuse (moutarde, citron).",
      "Verser l'huile trop vite au debut casse l'emulsion ; un filet fin permet de former une base stable avant d'incorporer le volume d'huile.",
      "La moutarde apporte de la moutarde-sine et un peu d'acidite, ce qui aide a tenir l'emulsion et donne du caractere a la mayonnaise maison.",
    ],
    illustration: "none",
    image: "/images/Mayonnaise-Fait-Maison.png",
    pageNumber: 18,
  },
  {
    id: "aioli",
    slug: "aioli",
    sectionId: "bases",
    title: "Aïoli",
    intro:
      "Pour 4 personnes, environ 200 à 250 ml d'aïoli. Sauce provençale à l'ail et à l'huile de pépins de raisin : l'ail écrasé libère ses polysaccharides, et les jaunes d'œuf apportent la lécithine — deux stabilisants pour une émulsion plus sûre. On la prépare au mortier, goutte à goutte.",
    steps: [
      "Ingrédients : 4 gousses d'ail fraîches (1 par personne), 2 jaunes d'œufs très frais à température ambiante, 1 cuillère à café de sel fin, 200 à 240 ml d'huile de pépins de raisin, le jus d'un demi-citron.",
      "Mortier : écraser l'ail pelé avec le sel jusqu'à obtenir une pâte lisse et blanchâtre. C'est cette phase qui libère les polysaccharides de l'ail.",
      "Base : ajouter les jaunes d'œufs et le jus de citron, mélanger jusqu'à homogène, puis incorporer les premières gouttes d'huile en tournant toujours dans le même sens.",
      "Monter l'aïoli : verser l'huile en filet très fin, presque goutte à goutte au début, en pilant ou fouettant sans arrêt. Quand la sauce épaissit et blanchit, accélérer légèrement le filet d'huile.",
      "Texture : l'aïoli doit être dense, brillant et tenir sur la cuillère. Si elle est trop ferme, ajouter quelques gouttes de citron ; si elle se sépare, repartir avec une gousse d'ail écrasée et un jaune d'œuf, puis y incorporer la sauce cassée goutte à goutte.",
      "Service : utiliser le jour même, à température ambiante ou légèrement frais.",
    ],
    chemistry: [
      "Écrasé avec le sel, l'ail libère des polysaccharides qui aident à stabiliser l'émulsion ; la lécithine des jaunes d'œufs renforce cette tenue, comme dans une mayonnaise.",
      "Comme pour la mayonnaise, l'huile doit entrer très lentement au début : une base stable se forme avant d'incorporer tout le volume d'huile.",
      "L'huile de pépins de raisin apporte le corps sans masquer l'ail ; le citron maintient une phase aqueuse suffisante pour que l'émulsion tienne.",
    ],
    tip: {
      title: "Mémoire : aïoli ou mayonnaise ?",
      description:
        "Aïoli = ail + huile de pépins de raisin (+ jaunes d'œuf pour stabiliser). Mayonnaise = jaunes d'œuf + huile neutre, souvent avec moutarde, sans ail.",
      steps: [
        "Pour 4 personnes : 4 gousses d'ail, 2 jaunes d'œufs, 200 à 240 ml d'huile de pépins de raisin.",
        "Pour une base froide plus neutre (tonnato, parisienne) : mayonnaise faite maison.",
      ],
    },
    illustration: "none",
    image: "/images/Aioli.png",
    pageNumber: 19,
  },
  {
    id: "sauce-tonnato",
    slug: "sauce-tonnato",
    sectionId: "bases",
    title: "La sauce tonnato",
    intro:
      "Pour 6 personnes, environ 500 a 600 ml de sauce. Sauce froide piemontaise au thon, aux capres et aux anchois, montee sur une mayonnaise faite maison. Elle sert surtout pour le vitello tonnato, mais peut aussi accompagner des legumes crus ou des oeufs durs.",
    steps: [
      "Prealable : preparer la mayonnaise faite maison pour 6 (voir recette Mayonnaise faite maison).",
      "Base : egoutter soigneusement environ 200 g de thon au naturel (conserve ou cuit). Mettre dans un robot ou un bol avec 2 a 3 filets d'anchois sous sel rinces, 2 cuilleres a soupe de capres egouttees et 120 a 150 ml de mayonnaise maison.",
      "Mixer : mixer ou fouetter jusqu'a obtenir une sauce lisse, homogene et assez epaisse.",
      "Detendre : incorporer 3 cuilleres a soupe d'huile d'olive extra vierge (environ 45 ml) et le jus d'un demi-citron. Si la sauce est encore trop ferme, ajouter 1 cuillere a soupe d'huile d'olive supplementaire ou quelques gouttes de citron.",
      "Finition : assaisonner avec sel et poivre si besoin. Pour un vitello tonnato, on peut ajouter une cuilleree du liquide de cuisson du veau pour plus de moelleux. Passer au chinois fin si l'on veut une texture encore plus soyeuse.",
      "Service : reserver au frais au moins 1 heure avant de napper le veau ou les assiettes.",
    ],
    chemistry: [
      "Le thon, les anchois et les capres apportent sel, iode et umami ; la mayonnaise stabilise l'emulsion froide.",
      "L'huile d'olive et le citron detendent la sauce sans la casser, tant que l'incorporation reste douce.",
      "Un repos au frais permet aux aromes de se fondre et donne une sauce plus nappante sur viande froide.",
    ],
    illustration: "none",
    image: "/images/Sauce-Tonnato.png",
    pageNumber: 20,
  },
  {
    id: "sauce-parisienne",
    slug: "sauce-parisienne",
    sectionId: "bases",
    title: "Sauce parisienne",
    intro:
      "Pour 6 personnes, environ 400 a 500 ml. Sauce froide francaise a base de mayonnaise et de creme, parfumee aux fines herbes. Elle accompagne viandes froides, poissons, legumes crus ou oeufs durs.",
    steps: [
      "Prealable : preparer de la mayonnaise faite maison (voir recette Mayonnaise faite maison). Pour 6 personnes, compter environ 200 a 250 ml de mayonnaise.",
      "Creme : fouetter 200 ml de creme liquide entiere bien froide jusqu'a obtenir une chantilly ferme, ou utiliser 200 g de creme fraiche epaisse.",
      "Base : dans un bol froid, melanger la mayonnaise avec la creme en incorporant delicatement, pour garder une texture aerée.",
      "Herbes et assaisonnement : ajouter 2 cuilleres a soupe de fines herbes hachees (persil, cerfeuil, estragon, ciboulette), 1 cuillere a cafe de moutarde de Dijon, le jus d'un demi-citron, sel et poivre blanc.",
      "Finition : si souhaite, ajouter quelques capres hachees ou un blanc d'oeuf dur coupe en petits des pour plus de relief. Rectifier l'acidite avec un peu de citron si besoin.",
      "Service : reserver au frais au moins 30 minutes avant de servir. La sauce doit etre souple, pale et tres parfumee.",
    ],
    chemistry: [
      "La mayonnaise apporte l'emulsion et le corps ; la creme fouettee ou la creme fraiche l'allege et donne une texture plus mousseuse.",
      "Les fines herbes et le citron ajoutent des composes aromatiques volatils : un repos au frais permet de les fixer sans chauffer la sauce.",
      "Incorporer la creme sans trop travailler evite de casser l'emulsion et de rendre la sauce trop liquide.",
    ],
    illustration: "none",
    image: "/images/Sauce-Parisienne.png",
    pageNumber: 21,
  },
  {
    id: "brunoise",
    slug: "brunoise",
    sectionId: "coupes",
    title: "Brunoise",
    intro:
      "La brunoise est une coupe de légumes en tout petits dés (environ 2 à 3 mm de côté). Elle vient de la cuisine classique française et sert de base pour des sauces, des garnitures ou des soupes.",
    steps: [
      "Éplucher et laver le légume, puis le couper en bâtonnets réguliers (julienne).",
      "Superposer les bâtonnets et trancher perpendiculairement pour obtenir des dés très fins.",
      "Pour une brunoise fine, les dés font 2 à 3 mm ; pour une grosse brunoise, environ 5 mm.",
    ],
    chemistry: [
      "La taille uniforme des dés permet une cuisson homogène et une meilleure diffusion des saveurs dans le plat.",
      "Les petites surfaces exposées limitent l'oxydation si on utilise la brunoise rapidement.",
    ],
    tip: {
      title: "Idée : Mirepoix en brunoise",
      description:
        "La brunoise de carotte, céleri et oignon (mirepoix en brunoise) est la base de nombreuses sauces, fonds et farces en cuisine française.",
      steps: [
        "Tailler carotte, céleri et oignon en brunoise de même taille.",
        "Les faire revenir doucement dans du beurre ou de l'huile avant d'ajouter liquide ou viande.",
      ],
    },
    illustration: "none",
    image: "/images/02-Brunoise.png",
    pageNumber: 22,
  },
  {
    id: "mirepoix",
    slug: "mirepoix",
    sectionId: "coupes",
    title: "Mirepoix",
    intro:
      "Le mirepoix est une préparation culinaire française de base composée de légumes coupés en petits dés (carotte, céleri, oignon). Il sert de fond aromatique pour les sauces, les soupes, les braisés et les fonds de cuisine classique.",
    steps: [
      "Éplucher et laver les légumes : carotte, céleri-branche et oignon.",
      "Tailler chaque légume en dés réguliers d'environ 5 à 8 mm de côté (ou plus fin selon l'utilisation).",
      "Respecter les proportions classiques : 50% d'oignon, 25% de carotte, 25% de céleri.",
      "Faire revenir doucement dans du beurre ou de l'huile jusqu'à ce que les légumes soient tendres et légèrement dorés.",
    ],
    chemistry: [
      "La cuisson lente du mirepoix permet une caramélisation naturelle des sucres des légumes, créant une base aromatique riche et complexe.",
      "Les composés aromatiques des trois légumes se combinent pour former une fondation équilibrée qui rehausse le goût des plats mijotés sans dominer.",
      "Le céleri apporte des notes fraîches, la carotte une douceur sucrée, et l'oignon une profondeur savoureuse.",
    ],
    tip: {
      title: "Astuce : Mirepoix blanc ou classique",
      description:
        "Pour les sauces blanches ou les plats délicats, utilisez un mirepoix blanc en remplaçant la carotte par un navet ou du poireau blanc.",
      steps: [
        "Tailler oignon, céleri et navet (ou blanc de poireau) en dés réguliers.",
        "Cuire très doucement sans coloration pour garder une base claire et subtile.",
      ],
    },
    illustration: "none",
    pageNumber: 23,
  },
  {
    id: "peler-a-vif",
    slug: "peler-a-vif",
    sectionId: "techniques",
    title: "Peler a vif",
    intro:
      "Peler a vif consiste a retirer entierement l'ecorce et le ziste blanc d'un agrume pour ne garder que la pulpe nette. C'est la base pour obtenir des segments propres, sans amertume ni membrane epaisse.",
    steps: [
      "Couper une fine tranche au sommet et a la base de l'agrume pour qu'il tienne bien droit sur la planche.",
      "Avec un petit couteau bien affute, suivre la courbe du fruit de haut en bas pour retirer l'ecorce et tout le blanc en bandes regulieres.",
      "Tourner le fruit au fur et a mesure et repasser si besoin sur les zones ou il reste du blanc : on doit voir la chair a nu.",
      "Pour lever les segments, glisser la lame entre chaque membrane et sortir les supremes delicatement au-dessus d'un bol pour recuperer le jus.",
    ],
    chemistry: [
      "Le ziste blanc contient une amertume marquee : l'enlever completement donne un resultat plus net et plus elegant en bouche.",
      "Travailler au plus pres de la pulpe limite la perte de jus et garde des segments brillants, tendres et reguliers.",
    ],
    illustration: "none",
    image: "/images/10-Peler-A-Vif.png",
    pageNumber: 24,
  },
  {
    id: "trafilata-al-bronzo",
    slug: "trafilata-al-bronzo",
    sectionId: "techniques",
    title: "Pates trafilées au bronze",
    intro:
      "Les pates trafilées au bronze se distinguent surtout par leur surface plus rugueuse et mate. A l'inverse, beaucoup de pates industrielles extrudées dans des moules en teflon ont une surface plus lisse et brillante.",
    steps: [
      "Ce qui change avant tout, c'est la texture : une pate trafilée au bronze accroche mieux la sauce et donne souvent une sensation plus interessante en bouche.",
      "Le gout ne change pas directement a cause du bronze lui-meme. Il depend surtout du ble utilise et du sechage de la pate.",
      "En pratique, beaucoup d'amateurs trouvent que cela vaut la peine pour des sauces comme le ragu, le pesto, la tomate ou les fruits de mer, parce que la sauce adhere mieux a la surface.",
      "Pour l'identifier, regarder sur le paquet des mentions comme \"trafilata al bronzo\", \"bronze cut\" ou \"bronze die extruded\".",
      "Parmi les marques souvent citees pour ce type de fabrication, on trouve notamment Rummo, Garofalo, Mancini et Pastificio dei Campi.",
    ],
    chemistry: [
      "La difference principale vient de l'etat de surface : une pate plus rugueuse retient mieux la sauce qu'une pate lisse.",
      "La perception de qualite vient donc surtout de la texture et de l'adherence, plus que d'un changement direct du gout.",
    ],
    illustration: "none",
    image: "/images/Trafilata-Al-Bronzo.png",
    pageNumber: 25,
  },
  {
    id: "temps-cuisson-pates-seches",
    slug: "temps-cuisson-pates-seches",
    sectionId: "techniques",
    title: "Temps de cuisson des pates seches",
    intro:
      "Pour les pates seches, surtout les pates trafilées au bronze comme Rummo ou d'autres bonnes marques italiennes, le temps indique sur le paquet est toujours le meilleur point de depart. Il depend de la forme, de l'epaisseur et du sechage.",
    steps: [
      "Lire le paquet : chercher la mention cottura, al dente ou cooking time. Pour une marque comme Rummo, ce temps est en general fiable pour une cuisson al dente.",
      "Si les pates sont servies directement avec une sauce deja prete, viser le temps indique sur le paquet, puis gouter dans les 2 dernieres minutes.",
      "Si les pates finissent dans la poele avec la sauce, les sortir 1 a 2 minutes avant le temps indique, puis finir avec un peu d'eau de cuisson pour que la sauce accroche.",
      "Les pates trafilées au bronze peuvent sembler plus fermes et plus rugueuses en bouche : c'est normal. Ne pas les surcuire pour les rendre lisses ; il faut garder cette accroche.",
      "Pour une salade de pates ou une cuisson sans finition en sauce, cuire plutot jusqu'au temps du paquet, puis refroidir rapidement si besoin.",
    ],
    chemistry: [
      "Pendant la cuisson, l'eau hydrate l'amidon et le gluten de la pate. Si la cuisson continue trop longtemps, la structure se relache et la pate devient molle.",
      "Finir en sauce permet a l'amidon libere dans l'eau de cuisson de lier l'huile, le fromage ou la tomate, ce qui donne une sauce plus adherente.",
      "Le bon repere reste la degustation : le centre doit etre cuit mais encore legerement resistant, surtout pour une pate al bronzo.",
    ],
    illustration: "none",
    image: "/images/Temps-Cuisson-Pates-Seches.png",
    pageNumber: 26,
  },
  {
    id: "mijoter",
    slug: "mijoter",
    sectionId: "techniques",
    title: "Mijoter",
    intro:
      "Mijoter, c'est cuire doucement un aliment dans un liquide qui frémit à peine, sans bouillir fort. La chaleur reste douce et régulière, pour attendrir la viande et développer les saveurs sans la dessécher.",
    steps: [
      "Choisir une sauteuse ou une cocotte assez large : la viande ou les légumes doivent tenir sans être entassés.",
      "Faire revenir ou saisir d'abord si la recette le demande, puis mouiller avec bouillon, vin, eau ou jus jusqu'à recouvrir partiellement ou totalement.",
      "Porter à frémissement : de petites bulles apparaissent à la surface, mais le liquide ne doit pas bouillir à gros bouillons.",
      "Couvrir si besoin et laisser mijoter le temps indiqué (souvent 1 h 30 à 2 h pour un morceau de veau), à feu très doux ou au four doux.",
      "Contrôler en cours de route : le liquide doit réduire lentement ; ajouter un peu de bouillon si le niveau baisse trop vite. La viande est prête quand elle se défait tendrement à la fourchette.",
    ],
    chemistry: [
      "À basse température, le collagène de la viande se transforme progressivement en gélatine, ce qui donne une texture fondante.",
      "Une ébullition trop forte resserre les protéines en surface et peut rendre la viande sèche ; mijoter évite ce choc thermique.",
      "Le liquide de cuisson concentre les arômes du mirepoix et de la viande : il devient un bouillon riche, utile pour les sauces comme le vitello tonnato.",
    ],
    illustration: "none",
    image: "/images/Mijoter.png",
    pageNumber: 27,
  },
  {
    id: "acciughe-pesto-prezzemolo",
    slug: "acciughe-pesto-prezzemolo",
    sectionId: "entrees",
    title: "Acciughe et pesto di prezzemolo",
    intro:
      "Pour 4 personnes. Les acciughe sotto sale del Mar Ligure entrent dans de nombreuses preparations, ou se degustent simplement en filet sur un canape. Ici, apres desalage, ils sont dresses sur un lit de pesto di prezzemolo — persil, ail, origan et huile d'olive extra vierge — dans l'esprit de l'acciughe alla ligure, le hors-d'oeuvre genois traditionnellement confit au bocal dans la meme huile parfumee.",
    steps: [
      "Desalage : avant consommation, passer chaque filet d'anchois sous sel sous un filet d'eau froide quelques secondes seulement, puis l'eponger soigneusement avec un linge ou une serviette. L'objectif est d'enlever l'exces de sel sans ramollir la chair.",
      "Pesto di prezzemolo : mixer ou piler une grosse botte de persil plat bien essore avec 1 a 2 gousses d'ail, de l'origan frais ou sec, et de l'huile d'olive extra vierge jusqu'a obtenir une pate verte epaisse et tres parfumee, pas liquide. Saler tres peu : les anchois apportent deja le sel.",
      "Lit de pesto : sur chaque assiette, former un disque regulier de pesto d'environ 10 a 12 cm de diametre et 1 a 1,5 cm d'epaisseur, en tassant legerement avec le dos d'une cuillere pour une surface nette.",
      "Acciughe : disposer les filets desales entiers sur le lit de pesto, cote a cote et paralleles, en couvrant le centre du disque. On peut aussi les servir seuls sur canape en aperitif, ou les mettre au bocal couverts d'huile d'olive avec persil, ail et origan pour preparer des acciughe alla ligure classiques.",
      "Finition : ajouter un filet d'huile d'olive extra vierge si besoin et servir aussitot, bien frais, avec du pain legerement grille.",
    ],
    chemistry: [
      "Le desalage rapide a l'eau froide dissout le sel de surface sans lessiver toute la saveur ; l'essuyage immediat preserve la texture ferme des acciughe sotto sale du Mar Ligure.",
      "L'acciughe alla ligure traditionnelle associe huile d'olive, persil, ail et origan : le pesto di prezzemolo concentre ces memes aromates en lit, tandis que les filets entiers au-dessus gardent leur identite saline et umami.",
      "Tasser le pesto en disque concentre les huiles essentielles du persil et evite que l'assiette ne paraisse vide autour des filets, comme pour un piattino de trattoria.",
    ],
    illustration: "none",
    image: "/images/Acciughe-Pesto-Prezzemolo.png",
    pageNumber: 28,
  },
  {
    id: "carpaccio-crevettes",
    slug: "carpaccio-crevettes",
    sectionId: "entrees",
    title: "Carpaccio de crevettes",
    intro:
      "Version simple. Pour 4 à 5 personnes. Carpaccio très frais de crevettes crues, servi avec une sauce 100 % naturelle réalisée à partir des têtes et carapaces.",
    steps: [
      "Le carpaccio : décortiquer 12 à 15 crevettes crues très fraîches en gardant les têtes et les carapaces. Ouvrir les crevettes en deux et retirer le boyau.",
      "Déposer les crevettes entre deux feuilles de film alimentaire et les aplatir légèrement. Réserver au frais.",
      "La sauce : dans une casserole, faire revenir les têtes et carapaces avec un filet d'huile d'olive.",
      "Ajouter 1 échalote et 1 tomate coupées en morceaux, puis cuire 2 à 3 minutes.",
      "Ajouter 30 cl d'eau et laisser mijoter 20 minutes. Filtrer en pressant bien pour extraire tout le goût, puis assaisonner avec sel, poivre, un peu de citron et une pointe de piment d'Espelette.",
      "Dressage : disposer les crevettes sur une assiette bien froide. Ajouter un peu de sauce tiède ou froide, terminer avec un filet d'huile d'olive, quelques herbes fraîches comme aneth ou persil, et éventuellement une très légère pincée de piment d'Espelette.",
    ],
    chemistry: [
      "Les têtes et carapaces concentrent une grande partie des arômes iodés des crevettes ; une cuisson courte dans l'eau permet d'en extraire un jus très parfumé.",
      "Le service bien froid garde la texture fine des crevettes crues et met en valeur la fraîcheur du citron et des herbes.",
    ],
    illustration: "none",
    image: "/images/15-Carpaccio-Crevettes.png",
    pageNumber: 29,
  },
  {
    id: "carpaccio-dorade-salicorne",
    slug: "carpaccio-dorade-salicorne",
    sectionId: "entrees",
    title: "Carpaccio de dorade, zeste de citron et salicorne",
    intro:
      "Pour 4 personnes. Carpaccio tres frais de dorade, finement tranchee, assaisonne au zeste de citron, a l'huile d'olive extra vierge et termine par de la salicorne pour une note marine et croquante.",
    steps: [
      "Poisson : utiliser une dorade royale ou une daurade tres fraiche. Lever les filets, retirer la peau et toutes les aretes, puis couper la chair en tranches tres fines, regulieres et quasi transparentes.",
      "Finition des tranches : disposer les tranches sur une assiette froide ou entre deux feuilles de film pour les aplatir legerement si besoin. Saler tres peu et poivrer.",
      "Salicorne : rincer la salicorne, puis la blanchir 30 secondes dans l'eau bouillante et la refroidir aussitot dans l'eau glacee pour garder sa couleur et son croquant. Egoutter et secher.",
      "Dressage : napper le carpaccio d'un filet d'huile d'olive extra vierge, parsemer de zeste de citron finement rape et disposer quelques brins de salicorne sur le dessus.",
      "Service : servir immediatement, bien frais, eventuellement avec quelques gouttes de jus de citron au dernier moment.",
    ],
    chemistry: [
      "La dorade crue tres fraiche garde une texture ferme et une saveur douce ; le tranchage fin augmente la surface en contact avec le citron et l'huile.",
      "Le zeste de citron apporte des huiles essentielles aromatiques sans l'acidite trop forte du jus, qui pourrait cuire la chair crue.",
      "La salicorne, riche en sel naturel, renforce le gout marin et apporte un contraste croquant au carpaccio.",
    ],
    illustration: "none",
    image: "/images/Carpaccio-Dorade-Salicorne.png",
    pageNumber: 30,
  },
  {
    id: "calamari-mediterraneen",
    slug: "calamari-mediterraneen",
    sectionId: "entrees",
    title: "Calamari méditerranéen",
    intro:
      "Pour 4 personnes. Calamars à la planche, servis chauds sur une planche ou une grande assiette, avec aïoli, tomates cerises et petites pommes de terre. Un plat convivial de la Méditerranée : la chaleur de la planche, l'iode des calamars, la douceur des pommes de terre et l'acidité fraîche des tomates cerises, le tout trempé dans l'aïoli.",
    steps: [
      "Aïoli : préparer l'aïoli pour 4 personnes selon la recette [Aïoli](aioli). Le garder à température ambiante ou légèrement frais.",
      "Pommes de terre : laver 800 g de petites pommes de terre, les cuire à l'eau bouillante salée 15 à 20 minutes jusqu'à ce qu'elles soient tendres, puis bien les égoutter. Les laisser entières ou les couper en deux selon la taille.",
      "Tomates cerises : laver 300 g de tomates cerises. Les servir entières, ou les couper en deux et les faire sauter 1 à 2 minutes à la planche avec un filet d'huile d'olive, sel et poivre, juste pour les réchauffer et les colorer légèrement.",
      "Calamars : nettoyer 1 kg de calamars frais (tubes et tentacules). Retirer la plume, la peau si souhaité, rincer et bien sécher. Couper les tubes en anneaux d'environ 1 cm ; garder les tentacules entiers.",
      "Cuisson à la planche : chauffer une poêle ou une planche très chaude avec un filet d'huile d'olive. Saisir les calamars par petites poignées, 1 à 2 minutes de chaque côté, jusqu'à une légère coloration et une texture tendre (ne pas surcuire). Saler et poivrer en fin de cuisson.",
      "Dressage : disposer les calamars chauds sur une planche en bois ou une grande assiette, ajouter les pommes de terre et les tomates cerises, servir l'aïoli à part dans un bol. Terminer avec un filet d'huile d'olive extra vierge et, si souhaité, quelques feuilles de persil plat.",
    ],
    chemistry: [
      "La cuisson très rapide à la planche fixe les protéines du calamar sans le ramollir excessivement : au-delà de quelques minutes, la chair devient caoutchouteuse.",
      "Les pommes de terre apportent amidon et moelleux ; les tomates cerises, légèrement acidulées et sucrées, équilibrent l'iode et la richesse de l'aïoli.",
      "L'aïoli, émulsion stable d'huile et d'ail, lie le plat par sa texture crémeuse et son parfum méditerranéen.",
    ],
    illustration: "none",
    image: "/images/Calamari-Mediterraneen.png",
    pageNumber: 31,
  },
  {
    id: "huitres",
    slug: "huitres",
    sectionId: "entrees",
    title: "Huîtres",
    intro:
      "Servir des huîtres crues est un geste d'apéritif raffiné de la Côte d'Azur. On les ouvre à la minute, on les pose sur un lit de glace, et on les accompagne d'une sauce mignonette à l'échalote — coupée en forme de banane pour une texture croquante et élégante.",
    steps: [
      "Protéger la main avec un torchon épais. Poser l'huître à plat, charnière vers soi.",
      "Insérer le couteau à huîtres dans la charnière, pousser et tourner pour casser le muscle.",
      "Glisser la lame sous le muscle supérieur pour le détacher, lever le couvercle.",
      "Retirer les coquilles brisées, garder le jus (eau de mer). Détacher légèrement le muscle inférieur.",
      "Servir immédiatement sur glace pilée, avec la mignonette à part.",
    ],
    chemistry: [
      "L'eau de mer (liqueur) de l'huître porte son goût iodé : la conserver à l'ouverture et ne pas la rincer.",
      "Plus l'huître est charnue (Spéciale de Claire, Gillardeau), plus elle tient en bouche ; les Fines de Claire restent plus légères et iodées.",
      "Les plates (Belon) et les huîtres de Méditerranée (Bouzigues, Tarbouriech) offrent des notes minérales ou plus chaudes, selon les eaux d'élevage.",
      "Servir sur glace pilée ralentit l'évolution de la chair et garde le contraste croquant de la mignonette.",
    ],
    tip: {
      title: "Sauce mignonette · Échalotes en banane",
      description:
        "La mignonette classique : vinaigre de vin rouge, échalotes, poivre noir. L'échalote se coupe en forme de banane — de fines demi-lunes allongées, dans le sens de la longueur — pour rester croquante et parfumée sans amertume.",
      steps: [
        "Peler 2 échalotes. Les couper en deux dans la longueur.",
        "Trancher en fines lames arquées « banane » (pas en brunoise).",
        "Mélanger avec 100 ml de vinaigre de vin rouge (ou vinaigre de Xérès).",
        "Ajouter poivre noir fraîchement concassé. Laisser reposer 10–15 min.",
        "Servir à la cuillère sur chaque huître, ou en ramequin à part.",
      ],
    },
    illustration: "none",
    image: "/images/Huitres.png",
    pageNumber: 32,
  },
  {
    id: "sardines-grillees",
    slug: "sardines-grillees",
    sectionId: "entrees",
    title: "Sardines grillées",
    intro:
      "Sur la Côte d'Azur, la sardine grillée est un classique d'été : poisson entier, peau croustillante, chair fondante. On la grille vive, on la retourne une seule fois, et on la sert avec un filet d'huile d'olive, du citron et quelques herbes du jardin.",
    steps: [
      "Choisir des sardines très fraîches : œil brillant, odeur marine, ventre ferme. Les vider et les rincer rapidement, puis les sécher.",
      "Huiler légèrement le poisson et la grille. Saler juste avant la cuisson — jamais trop tôt.",
      "Griller à feu vif 2 à 3 minutes par face. Retourner une seule fois, quand la peau se détache naturellement.",
      "Ne pas gratter les arêtes : la chair se sépare facilement une fois cuite. Laisser reposer 1 minute hors du feu.",
      "Servir aussitôt avec huile d'olive, citron, fleur de sel et herbes fraîches.",
    ],
    chemistry: [
      "La peau de la sardine protège la chair et devient croustillante dès que le feu est vif et la surface bien sèche.",
      "Saler juste avant la grille : le sel trop tôt tire l'eau et empêche une belle coloration.",
      "Retourner une seule fois limite la casse de la peau et laisse les protéines se fixer sans dessécher la chair.",
      "Les sardines plus grasses (Bretagne, grande taille) supportent un feu un peu moins violent ; les petites Méditerranée aiment le grill très chaud.",
    ],
    tip: {
      title: "Huile citronnée · Herbes du Midi",
      description:
        "Une huile d'accompagnement simple sublime la sardine sans la masquer : olive fruitée, zeste et jus de citron, thym ou romarin, ail écrasé. On badigeonne en fin de cuisson, jamais avant — le citron brûlerait sur la grille.",
      steps: [
        "Mélanger 4 c. à s. d'huile d'olive, le zeste et le jus d'un demi-citron.",
        "Ajouter 1 gousse d'ail écrasée, thym frais et un brin de romarin.",
        "Assaisonner de fleur de sel et de poivre. Laisser infuser 10 minutes.",
        "Retirer l'ail et les herbes ligneuses avant de servir.",
        "Badigeonner les sardines tout juste sorties de la grille, ou servir en ramequin.",
      ],
    },
    illustration: "none",
    image: "/images/Sardines-Grillees.png",
    pageNumber: 33,
  },
  {
    id: "vitello-tonnato",
    slug: "vitello-tonnato",
    sectionId: "entrees",
    title: "Vitello tonnato",
    intro:
      "Pour 6 personnes. Plat d'origine piemontaise, servi froid : fines tranches de veau mijote 2 heures, nappees de sauce tonnato, puis terminees avec quelques capres supplementaires. S'il vient du Piemont, le vitello tonnato est devenu un classique de la Cote d'Azur et de Monaco en ete. Preparer la mayonnaise faite maison et la sauce tonnato pour 6 (voir Mayonnaise faite maison et La sauce tonnato). La cuisson du veau demande une sauteuse et une cuisson mijotee (voir technique Mijoter).",
    steps: [
      "Cuisson du veau en sauteuse : utiliser environ 1 kg de veau (quasi, noix ou rond de gite). Dans une sauteuse large, faire revenir le veau sur toutes les faces dans un peu d'huile ou de beurre pour le colorer legerement.",
      "Mijoter 2 heures : ajouter carotte, oignon, celeri, laurier et quelques grains de poivre, puis mouiller avec un bouillon clair ou de l'eau jusqu'a recouvrir le veau presque entierement. Porter a frémissement, couvrir et laisser mijoter environ 2 heures a feu tres doux, sans gros bouillons, jusqu'a ce que la viande soit tres tendre.",
      "Refroidissement : laisser le veau refroidir dans son liquide de cuisson ou bien filme pour garder son moelleux. Conserver ce bouillon pour la sauce tonnato.",
      "Sauce tonnato : preparer la sauce tonnato pour 6 selon la recette dediee. On peut y ajouter une cuilleree du liquide de cuisson du veau pour plus de lien avec la viande.",
      "Tranchage : refroidir completement le veau puis le couper en tranches tres fines et regulieres.",
      "Montage : disposer les tranches de veau a plat sur un grand plat ou dans les assiettes, napper finement de sauce tonnato sans tout noyer, puis ajouter quelques capres et un tour de poivre.",
      "Service : servir bien frais ou a temperature de cave, avec un peu de roquette ou une salade tres simple si souhaite, en gardant la sauce comme element principal du plat.",
    ],
    chemistry: [
      "Deux heures de cuisson mijotee transforment le collagene en gelatine : le veau reste moelleux et se tranche finement une fois froid.",
      "Le repos au froid raffermit la viande, ce qui facilite un tranchage fin et net et permet a la sauce tonnato de mieux adherer a la surface.",
      "Preparer la sauce a part permet de regler son assaisonnement et sa texture avant le dressage, sans toucher la viande encore chaude.",
    ],
    illustration: "none",
    image: "/images/Vitello-Tonnato.png",
    pageNumber: 34,
  },
  {
    id: "ravioli-saint-jacques",
    slug: "ravioli-saint-jacques",
    sectionId: "plats-principaux",
    title: "Ravioli aux noix Saint-Jacques",
    intro:
      "Pour 4 personnes. Farce : coquilles Saint-Jacques fraîches, lavées et coupées en morceaux. Sauce : quelques noix, crème fraîche, gorgonzola, un peu d'eau de cuisson, sel et poivre. Pâte : 400 g semola di grano duro rimacinata, 4 œufs (1 par personne), demi-verre d'eau, pincée d'huile d'olive extra vierge.",
    steps: [
      "Pâte : compter 100 g de semola di grano duro rimacinata et 1 œuf entier par personne. Pour 4 personnes, mélanger 400 g de semola avec 4 œufs, l'eau et l'huile dans un bol ; former une boule, filmer et mettre au frigo 30 min.",
      "Préparer la farce : laver les Saint-Jacques, les sécher puis les couper en morceaux adaptés à la taille des raviolis (petits dés ou tranches).",
      "Préparer la sauce : marquer quelques noix avec un peu d'huile d'olive, puis ajouter la crème fraîche et le gorgonzola. Finir avec un peu d'eau de cuisson des ravioli, puis assaisonner avec sel et poivre.",
      "Étaler la pâte, déposer la farce aux Saint-Jacques, former les raviolis et les cuire à l'eau bouillante salée ; servir avec la sauce.",
    ],
    chemistry: [
      "La pâte aux œufs et à la semoule donne une texture ferme ; les Saint-Jacques restent fondantes à cœur.",
      "La sauce crème-gorgonzola liée avec un peu d'eau de cuisson apporte du corps et enrobe les ravioli ; les noix ajoutent du relief et une note plus chaude.",
    ],
    illustration: "none",
    image: "/images/04-Ravioli-Saint-Jacques.png",
    pageNumber: 35,
  },
  {
    id: "cavatelli-pesto",
    slug: "cavatelli-pesto",
    sectionId: "plats-principaux",
    title: "Cavatelli au pesto",
    intro:
      "Pour 4 personnes. Cavatelli dans l'esprit des Pouilles, préparés avec seulement 2 ingrédients : semola di grano duro rimacinata et eau. Ils sont servis avec un pesto alla ligure au basilic frais de Frejus, pignons de pin, huile d'olive Carapelli, Parmigiano Reggiano et ail.",
    steps: [
      "Pâte : compter 100 g de semola di grano duro rimacinata par personne. Pour 4 personnes, mélanger 400 g de semola avec de l'eau tiède en plusieurs fois jusqu'à obtenir une pâte ferme, lisse et malléable. Pétrir quelques minutes puis laisser reposer 20 à 30 minutes couvert.",
      "Façonnage : rouler la pâte en boudins, couper de petits morceaux puis les tirer avec les doigts ou un couteau à beurre pour former les cavatelli. Les déposer sur un linge ou une plaque légèrement farinée.",
      "Pesto : mixer ou piler du basilic frais de Frejus avec 1 à 2 gousses d'ail, des pignons de pin, du Parmigiano Reggiano râpé et de l'huile d'olive Carapelli jusqu'à obtenir une sauce souple et parfumée. Saler légèrement si besoin.",
      "Cuisson : cuire les cavatelli dans une grande casserole d'eau bouillante salée jusqu'à ce qu'ils remontent à la surface et soient tendres mais encore légèrement fermes.",
      "Finition : détendre le pesto avec un peu d'eau de cuisson des pâtes, enrober délicatement les cavatelli hors du feu, puis servir aussitôt avec un peu de Parmigiano Reggiano supplémentaire si souhaité.",
    ],
    chemistry: [
      "La semola di grano duro rimacinata absorbe l'eau progressivement et produit une pâte élastique qui garde bien sa forme à la cuisson, même sans œuf.",
      "Ajouter un peu d'eau de cuisson au pesto aide à lier l'huile, le fromage et l'eau autour des pâtes, pour une sauce plus souple et plus homogène.",
    ],
    illustration: "none",
    image: "/images/Cavatelli-Pesto.png",
    pageNumber: 36,
  },
  {
    id: "ravioli-pesto-di-liguria",
    slug: "ravioli-pesto-di-liguria",
    sectionId: "plats-principaux",
    title: "Ravioli pesto di Liguria",
    intro:
      "Pour 4 personnes. Ravioli a la semola di grano duro rimacinata et aux oeufs entiers, garnis d'une farce ricotta-epinards et servis avec un pesto di Liguria au basilic, pignons de pin, Parmigiano Reggiano, huile d'olive, ail et une pointe de citron.",
    steps: [
      "Pate : compter 100 g de semola di grano duro rimacinata et 1 oeuf entier par personne. Pour 4 personnes, melanger 400 g de semola avec 4 oeufs jusqu'a obtenir une pate homogene, en ajoutant un peu d'eau tiède si besoin. Filmer au contact et laisser reposer 30 minutes au frigo.",
      "Farce : melanger 250 g de ricotta pour 4 personnes, soit environ 62,5 g par personne, avec 300 g d'epinards frais reduits a l'huile d'olive, a l'italienne, surtout pas a l'eau, puis bien egouttes et haches. Assaisonner avec sel, poivre et noix de muscade pour garder une farce nette et pas trop humide.",
      "Pesto : compter une demi-plante de basilic et une demi-gousse d'ail par personne, avec des pignons de pin, du Parmigiano Reggiano, de l'huile d'olive et une pincee de citron. Mixer ou piler jusqu'a obtenir une sauce souple et parfumee.",
      "Montage : etaler la pate finement, deposer de petites portions de farce, refermer puis former les ravioli en chassant l'air autour de la garniture.",
      "Cuisson et finition : cuire les ravioli dans une grande casserole d'eau bouillante salee jusqu'a ce qu'ils soient cuits mais encore delicats. Les sortir de l'eau puis les finir doucement au beurre avec quelques feuilles de sauge, juste pour le parfum. Retirer la sauge au moment du dressage, puis dresser enfin avec le pesto.",
    ],
    chemistry: [
      "La semola di grano duro rimacinata et les oeufs entiers donnent une pate souple mais solide, adaptee a une farce humide comme ricotta-epinards.",
      "Bien essorer les epinards limite l'eau libre dans la farce, ce qui aide les ravioli a se souder correctement et a moins risquer de s'ouvrir a la cuisson.",
      "Le citron releve le pesto sans le rendre acide : une petite quantite suffit a rafraichir le basilic et a equilibrer le gras du fromage et de l'huile.",
    ],
    illustration: "none",
    image: "/images/Ravioli-Pesto.png",
    pageNumber: 37,
  },
  {
    id: "vol-au-vent-champignons-paris",
    slug: "vol-au-vent-champignons-paris",
    sectionId: "plats-principaux",
    title: "Vol-au-vent aux fruits de mer",
    intro:
      "Vol-au-vent de la mer : gambas et moules, avec des vieires en option, dans une sauce à base d'échalote, beurre, vin blanc et crème fraîche.",
    steps: [
      "Préparer les vol-au-vent (maison ou prêts à garnir) et les garder croustillants au chaud dans un four doux.",
      "Organisation de l'équipe : une personne pèle les gambas ; une autre nettoie les moules (grattage et retrait du byssus).",
      "Cuire les moules dans une casserole avec un peu de vin blanc jusqu'à ouverture, puis décoquiller (en garder quelques-unes en coque pour le dressage si souhaité).",
      "Poêler rapidement les gambas (et les vieires en option) dans un peu de beurre, juste pour les saisir, puis réserver.",
      "Base de sauce : faire suer l'échalote ciselée dans le beurre, déglacer au vin blanc et laisser réduire.",
      "Ajouter la crème fraîche, laisser épaissir légèrement, puis incorporer les gambas, les moules et les vieires. Mélanger doucement, assaisonner, puis garnir les vol-au-vent au dernier moment.",
    ],
    chemistry: [
      "La réduction du vin blanc concentre les arômes et équilibre l'iode des fruits de mer avec l'acidité.",
      "La crème fraîche apporte de la rondeur et lie la sauce ; le montage final au dernier moment évite de détremper la pâte feuilletée.",
    ],
    illustration: "none",
    image: "/images/Vol-Au-Vent-Fruits-Mer.jpg",
    pageNumber: 38,
  },
  {
    id: "loup-mer-croute-sel",
    slug: "loup-mer-croute-sel",
    sectionId: "plats-principaux",
    title: "Loup de mer en croûte de sel",
    intro:
      "Pour 4 personnes. Un loup de mer entier d'environ 850 g cuit en croûte de sel, avec une base de jus de fraises fermenté 48 heures (250 g de fraises et 10 g de sel) pour apporter une note acidulée et originale.",
    steps: [
      "Préparer le jus de fraises fermenté : mélanger 250 g de fraises avec 10 g de sel et laisser fermenter 48 heures au frais ou dans un endroit très contrôlé, puis récupérer le jus comme base d'accompagnement.",
      "Préparer la croûte : mélanger 800 à 900 g de gros sel avec 1 à 2 blancs d'œufs, et si souhaité un peu d'herbes ou de zeste de citron. La texture doit rappeler un sable humide.",
      "Vider et nettoyer le loup de mer si nécessaire, puis bien le sécher.",
      "Étaler une couche de sel sur une plaque, poser le poisson dessus puis le recouvrir entièrement avec le reste du mélange de sel en tassant légèrement.",
      "Cuire au four jusqu'à ce que le poisson soit juste cuit à cœur ; casser ensuite la croûte, retirer la peau si besoin et lever les filets.",
      "Servir avec quelques gouttes ou un trait du jus de fraises fermenté en base ou à côté, pour contraster avec la douceur iodée du poisson.",
    ],
    chemistry: [
      "La croûte de sel agit comme une coque isolante : elle limite la perte d'humidité et permet une cuisson régulière du poisson.",
      "Les blancs d'œufs lient les cristaux de sel pour former une croûte compacte, tandis que le jus de fraises fermenté apporte acidité et complexité aromatique.",
    ],
    illustration: "none",
    image: "/images/16-Loup-Mer-Croute-Sel.png",
    pageNumber: 39,
  },
  {
    id: "filet-loup-papillote",
    slug: "filet-loup-papillote",
    sectionId: "plats-principaux",
    title: "Filet de loup en papillote",
    intro:
      "Pour 4 personnes. Un filet de loup par personne, cuit en papillote avec capres, tomates cerises coupees en deux, olives vertes et olives noires Kalamata, echalotes finement coupees et une tranche de citron. Le plat est servi avec des pommes de terre domino, sel, poivre et citron.",
    steps: [
      "Pommes de terre domino : tailler les pommes de terre de facon reguliere. Les demarrer a l'eau froide salee, porter a ebullition puis compter encore environ 10 minutes. Egoutter, assaisonner avec sel et poivre, puis finir au four a 200 °C jusqu'a ce qu'elles soient bien dorees.",
      "Papillotes : poser au centre d'un morceau de papier cuisson 1 filet de loup par personne. Ajouter dessus des capres, des tomates cerises coupees en deux, des olives vertes, des olives noires Kalamata, des echalotes finement coupees et enfin une tranche de citron.",
      "Refermer soigneusement chaque papillote pour bien garder la vapeur a l'interieur, puis cuire au four jusqu'a ce que le poisson soit juste nacre et cuit a coeur.",
      "Service : ouvrir les papillotes au dernier moment, verifier l'assaisonnement, ajouter un peu de citron si besoin puis servir aussitot avec les pommes de terre domino.",
    ],
    chemistry: [
      "La cuisson en papillote retient la vapeur et les jus des garnitures : le filet de loup reste plus moelleux et prend les parfums du citron, des olives, des capres et de l'echalote.",
      "Les tomates cerises apportent eau, douceur et acidite ; en chauffant, elles forment un jus leger qui assaisonne naturellement le poisson.",
      "La pre-cuisson a l'eau puis la finition au four aident les pommes de terre domino a etre fondantes a coeur et dorees a l'exterieur.",
    ],
    illustration: "none",
    image: "/images/Papillote.png",
    pageNumber: 40,
  },
  {
    id: "canard-orange-pommes-domino",
    slug: "canard-orange-pommes-domino",
    sectionId: "plats-principaux",
    title: "Magret de canard à l'orange",
    intro:
      "Magret de canard servi avec pommes de terre dominó et une sauce à l'orange (caramélisation). Sauce : 120 g sucre, 200 ml jus d'orange frais (2 à 3 oranges), zeste de ½ orange, 50 ml fond de volaille (optionnel), 20 g beurre froid (optionnel).",
    steps: [
      "Sauce : dans une poêle à feu moyen, faire fondre le sucre sans remuer jusqu'à un caramel blond. Retirer du feu, ajouter progressivement le jus d'orange chaud (attention aux éclaboussures). Remettre à feu doux, mélanger jusqu'à dissolution du caramel, puis laisser réduire 5 à 8 min jusqu'à texture sirupeuse mais fluide.",
      "Pommes de terre : pour les produits qui poussent sous terre, on démarre la cuisson à l'eau froide. Mettre donc les pommes de terre dans une casserole d'eau froide, porter à ébullition puis compter encore 10 minutes. Les sortir, les égoutter, puis les enfourner 1 h à 200 °C.",
      "Magret : inciser la peau, marquer en poêle avec huile d'olive à feu vif (déposer côté peau, cuire environ 3 min de chaque côté jusqu'à peau dorée), puis finir au four 18 min à 200 °C.",
      "Laisser reposer le magret 5 min, trancher et napper de sauce. Servir avec les pommes de terre et du thym.",
    ],
    chemistry: [
      "Le sucre caramélisé apporte couleur et amertume douce ; le jus d'orange et le zeste donnent l'acidité et le parfum.",
      "Le magret cuit peau en premier rend le gras et crispe la peau ; le repos permet une redistribution du jus.",
    ],
    illustration: "none",
    image: "/images/06-Magret-Canard-Orange.png",
    pageNumber: 41,
  },
  {
    id: "magret-canard-coulis-framboises",
    slug: "magret-canard-coulis-framboises",
    sectionId: "plats-principaux",
    title: "Magret de canard, coulis de framboises",
    intro:
      "Pour 4 personnes. Magret de canard servi rosé, tranché et nappé d'un coulis de framboises acidulé. Coulis : 300 g de framboises, 50 g de sucre, 1 cuillère à soupe de jus de citron, 1 cuillère à soupe d'eau si besoin.",
    steps: [
      "Coulis de framboises : mixer 300 g de framboises fraîches ou surgelées avec 50 g de sucre et 1 cuillère à soupe de jus de citron jusqu'à obtenir une purée lisse. Passer au chinois pour retirer les graines. Ajuster la texture avec 1 cuillère à soupe d'eau si le coulis est trop épais ; réserver tiède.",
      "Magret : quadriller la peau de 2 magrets sans entamer la chair. Saler légèrement côté peau. Déposer côté peau dans une poêle tiède à feu moyen-vif avec un filet d'huile d'olive ; laisser dorer 6 à 8 minutes jusqu'à peau bien croustillante et gras rendu.",
      "Retourner 1 à 2 minutes côté chair, puis finir au four 6 à 8 minutes à 200 °C pour une cuisson rosée. Laisser reposer 5 minutes avant de trancher.",
      "Dressage : trancher les magrets en biais, disposer sur l'assiette et napper généreusement de coulis de framboises. Quelques framboises fraîches en garniture si souhaité.",
    ],
    chemistry: [
      "L'acidité du citron et des framboises équilibre le gras du magret et rehausse les notes fruitées sans recourir à un caramel sucré.",
      "Commencer la cuisson côté peau dans une poêle tiède permet de fondre le gras lentement et d'obtenir une peau croustillante tout en gardant la chair rosée.",
      "Passer le coulis au chinois donne une sauce lisse et brillante ; les pectines des framboises suffisent à l'épaissir légèrement sans cuisson longue.",
    ],
    illustration: "none",
    image: "/images/Magret-Canard-Framboises.png",
    pageNumber: 42,
  },
  {
    id: "steak-au-poivre-veau",
    slug: "steak-au-poivre-veau",
    sectionId: "plats-principaux",
    title: "Steak au poivre",
    intro:
      "Pour 2 personnes. 2 filets mignons de veau (150–180 g chacun, 3–4 cm d'épaisseur), beaucoup de grains de poivre noir, vert et rouge, 1 échalote, une bonne quantité de beurre, cognac, 100–150 ml de crème liquide, fond de veau (optionnel). Saisir les filets ; sauce au poivre : échalote au beurre, poivre concassé cuit dans la poêle, cognac flambé, crème.",
    steps: [
      "Concasser beaucoup de grains de poivre noir, vert et rouge au mortier (gros grains, pas en poudre). Réserver.",
      "Sortir le veau du frigo 15–20 min à l'avance. Poêle en fonte ou à fond épais, bien chaude à feu vif.",
      "Faire fondre une bonne quantité de beurre dans la poêle. Déposer les filets mignons. Cuisson 2–3 min par côté selon l'épaisseur (reste rosé au centre). Saler en fin de cuisson. Retirer sur une assiette et couvrir.",
      "Dans la même poêle à feu moyen : faire revenir l'échalote hachée dans du beurre, puis mettre le poivre écrasé et le laisser cuire 1 min. Verser le cognac et flamber. Déglacer le fond à la spatule. Ajouter la crème (et un peu de fond de veau si vous en avez). Réduire 2–3 min, saler si besoin.",
      "Remettre brièvement les filets dans la sauce ou napper à l'assiette. Servir avec frites, purée, légumes verts ou salade.",
    ],
    chemistry: [
      "Cuire le poivre dans la poêle (avec l'échalote et le beurre) développe et adoucit son parfum ; le poivre cru uniquement sur la viande peut rester trop âcre.",
      "Flamber le cognac évapore l'alcool et concentre les arômes ; la crème lie la sauce.",
    ],
    tip: {
      title: "Conseils",
      description: "Le veau se dessèche vite ; mieux vaut un cœur encore rosé qu'une cuisson à fond.",
      steps: [
        "Frites : blanchir les bâtonnets de pomme de terre 4 min dans l'eau bouillante, les laisser refroidir et bien sécher.",
        "Double friture : première friture à 135 °C (275 °F) environ 5 min, puis à 175 °C (350 °F) 5–7 min jusqu'à ce qu'ils soient bien dorés et croustillants.",
        "Saler pendant que les frites sont encore chaudes pour que le sel adhère. Sel marin de Camargue.",
      ],
    },
    illustration: "none",
    image: "/images/08-Steak-Poivre.png",
    pageNumber: 43,
  },
  {
    id: "tournedos-rossini",
    slug: "tournedos-rossini",
    sectionId: "plats-principaux",
    title: "Tournedos Rossini",
    intro:
      "Un grand classique français : médaillon de bœuf poêlé, garni de foie gras poêlé, servi sur un croûton avec sauce au madère ou porto et lamelles de truffe (facultatif mais traditionnel).",
    steps: [
      "Sortir la viande et le foie gras du réfrigérateur 20 à 30 minutes avant la cuisson pour qu'ils reviennent à température ambiante.",
      "Préparer la sauce : faire revenir une échalote ciselée dans un peu de beurre, déglacer avec du madère ou du porto, laisser réduire, ajouter un peu de fond de veau ou de jus de viande, monter au beurre et garder au chaud.",
      "Poêler les croûtons de pain de mie dans du beurre jusqu'à ce qu'ils soient bien dorés des deux côtés ; réserver.",
      "Dans une poêle très chaude avec un peu de matière grasse neutre, saisir les tournedos de bœuf (3–4 cm d'épaisseur) 2–3 minutes de chaque côté pour une cuisson saignante à rosée ; saler en fin de cuisson et laisser reposer quelques minutes sous une feuille d'aluminium.",
      "Dans une poêle bien chaude (sans matière grasse ou avec très peu), poêler rapidement les escalopes de foie gras (environ 1,5–2 cm d'épaisseur) 1 à 2 minutes par face ; les saler et les poivrer.",
      "Dresser : poser chaque tournedos sur un croûton, déposer dessus une escalope de foie gras, napper de sauce au madère et, si souhaité, ajouter quelques lamelles de truffe.",
    ],
    chemistry: [
      "Le repos de la viande après cuisson permet au jus de se redistribuer, ce qui donne une texture plus tendre et juteuse.",
      "La graisse du foie gras fond partiellement à la cuisson et parfume la viande et la sauce, en apportant une grande richesse aromatique.",
      "La réduction du madère concentre les sucres et les arômes du vin, donnant une sauce sirupeuse et intense.",
    ],
    illustration: "none",
    image: "/images/09-Tournedos-Rossini.png",
    pageNumber: 44,
  },
  {
    id: "escalope-veau-milanaise-napolitaine",
    slug: "escalope-veau-milanaise-napolitaine",
    sectionId: "plats-principaux",
    title: "Escalope de veau a la milanaise, version napolitaine",
    intro:
      "Pour 4 personnes. Escalope de veau panee et doree, puis finie version napolitaine, comme en Argentine, avec tomate et mozzarella gratinee, sans jambon.",
    steps: [
      "Preparation du veau : aplatir 4 escalopes de veau entre deux feuilles pour obtenir une epaisseur reguliere. Saler et poivrer legerement.",
      "Panure : preparer des oeufs battus d'un cote et, de l'autre, une chapelure melangee avec ail et persil secs (persillade). Passer chaque escalope dans la chapelure, puis dans l'oeuf, puis encore une fois dans la chapelure, en appuyant legerement pour bien faire adherer.",
      "Cuisson milanaise : poeler les escalopes dans un melange beurre-huile ou dans une huile douce jusqu'a belle coloration doree et croustillante des deux cotes. Egoutter sur grille ou papier.",
      "Version napolitaine : disposer les escalopes sur une plaque ou dans un plat, ajouter dessus un peu de sauce tomate, puis de la mozzarella en tranches ou rapee. Finir avec un peu d'origan si souhaite, sans ajouter de jambon.",
      "Finition : passer quelques minutes au four ou sous le gril juste pour faire fondre et gratiner legerement la mozzarella. Servir aussitot, avec une salade simple, des frites ou des pommes de terre si souhaite.",
    ],
    chemistry: [
      "La panure forme une couche protectrice qui dore rapidement et aide l'escalope a rester moelleuse a l'interieur.",
      "Le contraste entre la croute croustillante, la sauce tomate et la mozzarella fondue donne a la version napolitaine son identite tres gourmande.",
      "Une finition courte sous le gril permet de faire fondre le fromage sans detremper completement la panure.",
    ],
    illustration: "none",
    image: "/images/Milanesa-Napolitana.png",
    pageNumber: 45,
  },
  {
    id: "cotelette-agneau-petits-pois-menthe",
    slug: "cotelette-agneau-petits-pois-menthe",
    sectionId: "plats-principaux",
    title: "Côtelette d'agneau, purée Label Rouge au safran et menthe à l'huile d'olive",
    intro:
      "Pour 4 personnes. Côtelettes d'agneau poêlées rosées sur une purée de pommes de terre Label Rouge au safran, la viande terminée d'une menthe en julienne, huile d'olive, citron, sel et poivre.",
    steps: [
      "Sortir les côtelettes du réfrigérateur 20 minutes avant la cuisson pour qu'elles reviennent à température ambiante. Saler et poivrer légèrement.",
      "Lait au safran : infuser une pincée de safran dans 100 ml de lait chaud pendant 10 minutes.",
      "Pommes de terre Label Rouge : éplucher 800 g de pommes de terre Label Rouge, les couper en morceaux réguliers et les cuire à l'eau bouillante salée environ 20 minutes, jusqu'à ce qu'une lame s'enfonce facilement. Bien les égoutter.",
      "Purée : passer les pommes de terre au moulin à légumes ou les mixer, puis incorporer 80 g de beurre froid en morceaux, les 100 ml de lait au safran, 80 g de crème fraîche, sel et poivre blanc jusqu'à obtenir une purée lisse et souple. Garder au chaud.",
      "Menthe : tailler une grosse poignée de feuilles de menthe fraîche en julienne fine. Au moment de servir, mélanger avec 4 cuillères à soupe d'huile d'olive, le jus d'un demi-citron, sel et poivre du moulin.",
      "Cuisson des côtelettes : dans une poêle très chaude avec un filet d'huile d'olive et un peu de beurre, saisir 4 côtelettes d'agneau 3 à 4 minutes de chaque côté pour une cuisson rosée, ou un peu plus selon l'épaisseur.",
      "Repos : laisser reposer les côtelettes 5 minutes sous une feuille d'aluminium avant de servir.",
      "Dressage : dresser la purée au centre de l'assiette, poser la côtelette dessus et répartir la menthe en julienne par-dessus.",
    ],
    chemistry: [
      "La cuisson rapide à feu vif développe les arômes de Maillard sur la viande tout en gardant l'intérieur rosé et tendre.",
      "Après égouttage, le beurre, le lait au safran et la crème fraîche lient l'amidon des pommes de terre Label Rouge : la matière grasse et l'acidité de la crème fraîche donnent une purée onctueuse ; le safran apporte couleur et notes florales légères.",
      "La menthe en julienne libère davantage d'arômes volatils ; l'huile d'olive et le citron forment une sauce fraîche qui équilibre la richesse de la viande et de la purée.",
    ],
    illustration: "none",
    image: "/images/Cotelette-Agneau-Petits-Pois.png",
    pageNumber: 46,
  },
  {
    id: "risotto-safran-magret-canard-orange",
    slug: "risotto-safran-magret-canard-orange",
    sectionId: "plats-principaux",
    title: "Risotto safran avec magret de canard à l'orange",
    intro:
      "Pour 4 personnes. Risotto carnaroli au safran naturel, servi avec des tranches de magret de canard et une sauce à l'orange. L'assiette joue sur l'équilibre entre le gras du canard, la douceur crémeuse du risotto et la tension acidulée de l'orange.",
    steps: [
      "Préparer la sauce à l'orange : faire fondre 100 g de sucre jusqu'à un caramel blond, puis ajouter progressivement 200 ml de jus d'orange fraîchement pressé. Laisser réduire doucement jusqu'à une texture nappante, puis ajouter un peu de zeste fin si souhaité.",
      "Risotto : dans une sauteuse, chauffer un filet d'huile d'olive, ajouter 400 g de riz carnaroli et le nacrer 1 à 2 minutes en remuant. Mouiller progressivement avec un bouillon chaud en remuant régulièrement. Après 5 minutes de cuisson, ajouter directement dans la sauteuse une pincée de filaments de safran naturel (jamais de safran en poudre). Poursuivre la cuisson environ 18 à 20 minutes au total, jusqu'à un riz fondant mais encore légèrement al dente.",
      "Finition du risotto : hors du feu, monter avec 80 g de beurre français froid en morceaux et 80 g de Parmigiano Reggiano râpé pour obtenir une texture souple et brillante.",
      "Cuire le magret : dans un peu d'huile d'olive, commencer côté peau pendant 3 minutes, puis cuire l'autre côté seulement 90 secondes. Finir ensuite 18 minutes au four à 200 °C. Laisser reposer avant de trancher.",
      "Dressage : dresser le risotto au safran dans l'assiette, disposer les tranches de magret dessus et napper légèrement de sauce à l'orange.",
    ],
    chemistry: [
      "Le riz carnaroli libère progressivement son amidon pendant la cuisson, ce qui donne au risotto sa texture naturellement crémeuse.",
      "Le safran naturel en filaments, ajouté directement dans la sauteuse après 5 minutes de cuisson, parfume et colore le risotto ; l'acidité de l'orange équilibre la richesse du gras du canard.",
    ],
    illustration: "none",
    image: "/images/24-Magret-Risotto-Safran.png",
    pageNumber: 47,
  },
  {
    id: "risotto-betterave-fruits-de-mer",
    slug: "risotto-betterave-fruits-de-mer",
    sectionId: "plats-principaux",
    title: "Risotto betterave et fruits de mer",
    intro:
      "Pour 4 personnes. Risotto carnaroli cuit dans un bouillon de légumes infusé aux parures de fruits de mer (têtes et queues de crevettes, pattes de crabe), puis coloré au jus de betterave cru filtré et monté au beurre et au Parmigiano. Les têtes et queues ne se grillent pas : elles servent uniquement au bouillon. On grille à part les corps de crevettes décortiqués, puis on les dispose sur le risotto avec du persil et une sauce parmesane tiède.",
    steps: [
      "Bouillon : préparer un bouillon de légumes, y faire bouillir les têtes et queues de crevettes ainsi que les pattes de crabe, laisser infuser, puis filtrer soigneusement. Garder le bouillon bien chaud pour la cuisson du risotto.",
      "Risotto : compter 100 g de riz carnaroli par personne (400 g pour 4). Faire suer les échalotes dans du beurre environ 1 minute, ajouter tout le riz et le nacrer 90 secondes en remuant.",
      "Mouiller progressivement avec le bouillon chaud en remuant ; la cuisson dure environ 20 minutes jusqu'à un riz fondant mais encore légèrement ferme au centre.",
      "Vers la fin, incorporer le jus de betterave frais filtré (betteraves crues mixées ou passées à l'extracteur, puis filtrées au chinois).",
      "Hors du feu, monter le risotto avec 100 g de Parmigiano Reggiano râpé et 100 g de beurre pour obtenir l'effet crémeux caractéristique.",
      "Garniture : décortiquer les crevettes (têtes et queues réservées pour le bouillon uniquement — ne pas les griller). Griller à la poêle, avec un filet d'huile d'olive extra vierge, uniquement les corps nets des deux côtés jusqu'à belle coloration et légère croustillance en surface.",
      "Sauce Parmigiano : mélanger 100 g de Parmigiano râpé avec de la crème liquide française, une pointe de muscade, poivre et sel ; chauffer doucement en remuant jusqu'à une texture nappante.",
      "Dressage : dresser le risotto, disposer les crevettes grillées (corps) dessus, parsemer de feuilles de persil frais et napper légèrement de sauce parmesane tiède.",
    ],
    chemistry: [
      "Nacrer le riz avant d'humecter favorise une texture plus régulière et limite l'excès d'amidon libéré d'un coup.",
      "Les carapaces et parures de crustacés libèrent des composés aromatiques iodés et umami dans le bouillon, qui parfument le riz pendant la cuisson lente.",
      "Le jus de betterave apporte couleur et une légère douceur terreuse ; le montage froid au beurre et au fromage forme une émulsion onctueuse sans faire bouillir la crème du lait.",
    ],
    illustration: "none",
    image: "/images/26-Risotto-Betterave-Fruits-Mer.png",
    pageNumber: 48,
  },
  {
    id: "risotto-osso-buco",
    slug: "risotto-osso-buco",
    sectionId: "plats-principaux",
    title: "Risotto a l'osso buco",
    intro:
      "Pour 4 personnes. Un risotto cremoso inspire de Milan, servi avec une garniture d'osso buco de veau longuement mijote, son jus reduit et, si souhaite, une touche de gremolata en finition.",
    steps: [
      "Osso buco : faire revenir 4 tranches de jarret de veau dans un peu d'huile d'olive, puis les reserver. Dans la meme cocotte, faire suer oignon, carotte et celeri. Ajouter un peu de concentre de tomate si souhaite, remettre la viande, deglacer avec du vin blanc puis mouiller avec un fond clair. Ajouter thym ou laurier et laisser mijoter doucement jusqu'a viande tres tendre.",
      "Preparation du jus et de la garniture : quand le veau est fondant, retirer les tranches, filtrer ou faire reduire legerement le jus pour le concentrer. Effilocher ou garder les morceaux entiers selon le dressage voulu.",
      "Risotto : faire suer 1 echalote dans du beurre ou de l'huile d'olive, ajouter 400 g de riz carnaroli puis le nacrer 1 a 2 minutes. Mouiller progressivement avec un bouillon chaud en remuant regulierement jusqu'a cuisson fondante mais encore legerement al dente.",
      "Finition du risotto : hors du feu, incorporer beurre froid et Parmigiano Reggiano rape pour obtenir une texture souple, brillante et bien liee. Ajuster avec un peu de jus de cuisson si besoin.",
      "Dressage : servir le risotto dans l'assiette, ajouter dessus ou a cote l'osso buco et un peu de jus reduit. Terminer, si souhaite, avec une gremolata de zeste de citron, ail et persil pour apporter fraicheur et relief.",
    ],
    chemistry: [
      "La cuisson longue du jarret transforme progressivement le collagene en gelatine, ce qui donne a l'osso buco sa texture fondante et au jus plus de corps.",
      "Le riz carnaroli libere son amidon graduellement pendant la cuisson : c'est ce qui donne au risotto sa liaison naturelle sans avoir besoin de creme.",
      "Le beurre et le fromage ajoutes hors du feu forment une emulsion avec l'amidon du riz et le liquide restant, ce qui rend le risotto plus onctueux et brillant.",
    ],
    illustration: "none",
    image: "/images/Risotto-Osobucco-BW.png",
    pageNumber: 49,
  },
  {
    id: "risotto-gambas",
    slug: "risotto-gambas",
    sectionId: "plats-principaux",
    title: "Risotto aux gambas",
    intro:
      "Pour 4 personnes. Un risotto carnaroli au safran naturel, parfumé à un bouillon de gambas au vin rosé, puis garni de gambas décortiquées et juste saisies. La décortication des gambas est une étape essentielle : elle permet de récupérer un bouillon iodé et de cuire la chair sans carapace.",
    steps: [
      "Décortiquer les gambas : compter 2 gambas crues par personne (8 pour 4 personnes). Détacher la tête en la tournant doucement ; réserver têtes et carapaces pour le bouillon. Retirer la carapace en glissant le pouce sous les pattes et en tirant vers la queue ; conserver ou retirer la queue selon le dressage voulu. Ouvrir légèrement le dos avec la pointe d'un couteau et retirer la veine intestinale sombre. Rincer brièvement les corps et les éponger.",
      "Bouillon de gambas : dans une casserole, faire revenir les têtes et carapaces avec un filet d'huile d'olive 2 à 3 minutes, déglacer au vin rosé (sans eau) et un peu de sel, laisser frémir 15 à 20 minutes, puis filtrer soigneusement. Garder le bouillon bien chaud.",
      "Risotto : dans une sauteuse, chauffer un filet d'huile d'olive, ajouter 400 g de riz carnaroli et le nacrer 1 à 2 minutes en remuant. Dégager avec 10 cl de vin blanc sec, puis mouiller progressivement avec le bouillon de gambas en remuant régulièrement. Après 5 minutes de cuisson, ajouter directement dans la sauteuse une pincée de filaments de safran naturel (jamais de safran en poudre). Poursuivre la cuisson environ 18 à 20 minutes au total, jusqu'à un riz fondant mais encore légèrement al dente.",
      "Gambas : à part, chauffer une poêle avec un filet d'huile d'olive, saisir les gambas décortiquées 1 à 2 minutes de chaque côté jusqu'à une cuisson rosée et juste prise. Saler et poivrer.",
      "Finition du risotto : hors du feu, monter avec 80 g de beurre français froid en morceaux et 80 g de Parmigiano Reggiano râpé pour obtenir une texture souple et brillante. Ajuster le sel et le poivre.",
      "Dressage : dresser le risotto dans l'assiette et disposer les gambas dessus.",
    ],
    chemistry: [
      "Les têtes et carapaces libèrent des composés iodés et umami dans le bouillon, qui parfument le riz pendant la cuisson lente.",
      "Le riz carnaroli libère son amidon progressivement ; le montage hors du feu au beurre français et au Parmigiano Reggiano forme l'émulsion crémeuse caractéristique du risotto.",
      "Le safran naturel en filaments, ajouté directement dans la sauteuse après 5 minutes de cuisson, se hydrate dans le bouillon et libère couleur et arômes plus fins qu'une poudre industrielle.",
      "Décortiquer et éponger les gambas avant la saisie rapide évite l'excès d'humidité et limite une cuisson caoutchouteuse de la chair.",
    ],
    illustration: "none",
    image: "/images/Risotto-Gambas.png",
    pageNumber: 50,
  },
  {
    id: "pot-au-feu",
    slug: "pot-au-feu",
    sectionId: "plats-principaux",
    title: "Pot-au-feu",
    intro:
      "Pour 6 à 8 personnes. Grand classique de la cuisine bourgeoise française : viandes de bœuf (jarret, palette, poitrine) et os à moelle mijotés longuement avec carottes, poireaux, navets, céleri et oignons dans un bouillon aromatisé au bouquet garni. Cuisson lente de 3 à 4 heures pour obtenir des viandes fondantes et un bouillon riche. Traditionnellement servi avec les légumes et du pain, mais se marie aussi très bien avec des gnocchi pour une variation moderne.",
    steps: [
      "Viandes et os : compter environ 1,2 à 1,5 kg de viandes au total pour 6 à 8 personnes. Choisir 400 à 500 g de jarret de bœuf (shank), 400 à 500 g de palette ou de macreuse, 300 à 400 g de poitrine avec os, et 3 à 4 os à moelle. Rincer les viandes à l'eau froide et les éponger.",
      "Démarrage à l'eau froide : dans une grande marmite, déposer toutes les viandes et les os. Couvrir largement d'eau froide (environ 3 à 4 litres), ajouter 1 cuillère à café de gros sel. Porter très lentement à ébullition sans couvrir : cette montée progressive permet aux protéines de coaguler en surface.",
      "Écumage : dès les premiers frémissements, écumer soigneusement l'écume grise qui monte en surface. Répéter l'opération plusieurs fois pendant les 20 premières minutes pour obtenir un bouillon clair.",
      "Aromates et légumes : après l'écumage initial, ajouter 2 oignons piqués de 2 clous de girofle chacun, 1 bouquet garni (thym, laurier, persil), 2 gousses d'ail en chemise. Laisser mijoter à très petite ébullition 2 heures.",
      "Ajout des légumes de garniture : après 2 heures, ajouter 4 à 5 carottes épluchées et coupées en tronçons, 3 à 4 poireaux lavés et ficelés, 2 à 3 navets épluchés et coupés en quartiers, 2 branches de céleri. Poursuivre la cuisson 1 h 30 à 2 heures supplémentaires, jusqu'à ce que les viandes soient très tendres et se défassent à la fourchette.",
      "Os à moelle : retirer les os à moelle après 1 h 30 de cuisson totale pour éviter qu'ils ne se vident complètement ; les garder au chaud dans un peu de bouillon.",
      "Dégraissage : en fin de cuisson, retirer délicatement les viandes et les légumes. Dégraisser le bouillon en surface avec une louche ou un papier absorbant.",
      "Dressage traditionnel : trancher les viandes, disposer dans un plat de service avec les légumes autour. Arroser d'un peu de bouillon. Servir les os à moelle à part, avec du gros sel et du pain grillé. Accompagner de cornichons, moutarde de Dijon et fleur de sel.",
      "Variation gnocchi : pour une présentation moderne, servir le pot-au-feu avec des gnocchi à l'italienne cuits à l'eau bouillante salée, égouttés et montés au beurre. Dresser les gnocchi dans l'assiette, disposer quelques tranches de viande et légumes, arroser généreusement de bouillon chaud.",
    ],
    chemistry: [
      "Le démarrage à l'eau froide permet une extraction progressive des protéines solubles et du collagène ; la montée lente en température favorise leur coagulation en surface plutôt que dans le bouillon, ce qui facilite l'écumage et donne un consommé clair.",
      "La cuisson longue à faible ébullition (92 à 95 °C) transforme le collagène des viandes gélatineuses (jarret, palette, poitrine) en gélatine : les fibres se détendent, la viande devient fondante et le bouillon gagne en corps et en onctuosité.",
      "Les os à moelle libèrent leurs lipides et leur gélatine dans le bouillon ; retirés après 1 h 30, ils gardent leur moelle crémeuse pour le service, tandis que le bouillon a déjà capté leurs arômes.",
      "Les légumes ajoutés en milieu de cuisson apportent sucres, arômes et corps au bouillon sans se déliter complètement ; leurs composés volatils (carottes, céleri, poireaux) enrichissent la palette aromatique du consommé.",
      "L'oignon piqué de clous de girofle et le bouquet garni structurent l'arrière-plan aromatique : eugénol des clous, thymol du thym et lactones du laurier se diffusent lentement pendant les heures de mijotage.",
      "Le dégraissage en fin de cuisson retire l'excès de lipides de surface tout en conservant la gélatine et les composés umami dissous, pour un bouillon à la fois puissant et léger en bouche.",
    ],
    illustration: "none",
    pageNumber: 57,
  },
  {
    id: "creme-caramel",
    slug: "creme-caramel",
    sectionId: "desserts",
    title: "Creme caramel",
    intro:
      "Pour 4 personnes. Grand classique de la cuisine francaise : un caramel blond au fond du moule et une creme prise tres lisse a base de lait, de sucre et d'oeufs, cuite doucement au bain-marie.",
    steps: [
      "Caramel : faire chauffer 100 g de sucre avec 2 a 3 cuilleres a soupe d'eau jusqu'a obtenir un caramel blond ambre. Le verser aussitot au fond de 4 ramequins ou d'un moule, puis incliner rapidement pour bien repartir.",
      "Creme : chauffer 500 ml de lait avec une gousse de vanille fendue ou un peu d'extrait. Pour une version plus riche, on peut remplacer 150 a 250 ml de lait par de la creme liquide entiere (environ 30 a 35 % de matiere grasse), plutot que d'utiliser uniquement de la creme. Fouetter a part 3 oeufs entiers avec 60 a 80 g de sucre sans trop faire mousser, puis verser le liquide chaud progressivement en melangeant.",
      "Passer l'appareil au chinois si souhaite pour obtenir une texture encore plus lisse, puis le verser sur le caramel dans les moules.",
      "Cuisson : disposer les moules dans un plat allant au four, verser de l'eau chaude a mi-hauteur et cuire au bain-marie a 150 a 160 °C pendant environ 35 a 45 minutes, jusqu'a ce que la creme soit prise mais encore tres legerement tremblotante au centre.",
      "Refroidissement et service : laisser refroidir, puis placer au frais plusieurs heures. Pour demouler, passer doucement une lame fine sur le bord et retourner sur une assiette afin que le caramel nappe la creme.",
    ],
    chemistry: [
      "Le caramel provient de la transformation du sucre sous l'effet de la chaleur : il apporte couleur, amertume douce et notes grillees.",
      "Pendant la cuisson douce, les proteines des oeufs coagulent progressivement et donnent a la creme sa tenue sans la rendre granuleuse.",
      "Le bain-marie limite la chaleur directe et aide a obtenir une texture plus reguliere, lisse et delicate.",
    ],
    illustration: "none",
    image: "/images/Creme-Caramel.png",
    pageNumber: 51,
  },
  {
    id: "creme-brulee",
    slug: "creme-brulee",
    sectionId: "desserts",
    title: "Creme brulee",
    intro:
      "Pour 4 personnes. Creme brulee traditionnelle francaise : une creme prise riche et vanillee, a base de creme, de sucre et de jaunes d'oeufs, puis une fine couche de sucre caramélisee juste avant le service.",
    steps: [
      "Proportions : compter par personne 10 cl de creme liquide entiere, 1 cuillere a soupe de sucre et 1 jaune d'oeuf. Pour 4 personnes, utiliser 40 cl de creme, 4 cuilleres a soupe de sucre et 4 jaunes d'oeufs.",
      "Creme : chauffer doucement la creme avec une gousse de vanille fendue ou un peu d'extrait, sans faire bouillir.",
      "Appareil : fouetter les jaunes avec le sucre juste assez pour les melanger, sans trop incorporer d'air. Verser la creme chaude progressivement en remuant.",
      "Cuisson : repartir dans des ramequins, puis cuire au bain-marie a 150 a 160 °C jusqu'a ce que la creme soit prise mais encore legerement tremblotante au centre.",
      "Refroidissement et finition : laisser refroidir completement puis mettre au frais. Au moment de servir, saupoudrer une fine couche de sucre et caraméliser au chalumeau pour former une croute fine et cassante.",
    ],
    chemistry: [
      "Les jaunes d'oeufs coagulent doucement avec la chaleur et donnent a la creme brulee sa texture lisse et soyeuse.",
      "La creme, plus riche en matiere grasse que le lait, apporte plus d'onctuosite et protege un peu la texture contre une cuisson trop brutale.",
      "La couche de sucre caramélisee contraste avec la creme froide : c'est ce jeu de textures entre surface cassante et interieur fondant qui fait l'identite du dessert.",
    ],
    illustration: "none",
    image: "/images/Creme-Brulee-New.png",
    pageNumber: 52,
  },
  {
    id: "flan-dulce-de-leche",
    slug: "flan-dulce-de-leche",
    sectionId: "desserts",
    title: "Crème caramel dulce de leche",
    intro:
      "Pour 4 personnes. Crème caramel dulce de leche : un caramel ambré au fond du ramequin et une crème onctueuse à base de lait, de crème épaisse, de dulce de leche, de sucre et d'œufs, cuite doucement au bain-marie. À préparer à l'avance : minimum 3 à 4 h au frais, idéalement une nuit.",
    steps: [
      "Caramel : faire chauffer 100 g de sucre (soit 5 cuillieres a soupe) avec quelques gouttes d'eau dans une casserole jusqu'a obtenir un caramel ambré. Verser aussitot au fond de 4 ramequins. Laisser prendre.",
      "Lait et crème : chauffer doucement 250 ml de lait avec 175 g de crème épaisse entière (30 à 35 % MG, texture épaisse et onctueuse, pas une crème liquide légère). Ajouter la vanille. Ne pas faire bouillir fortement.",
      "Œufs, sucre et dulce de leche : fouetter 2 œufs entiers et 2 jaunes d'œufs avec 60 g de sucre, puis incorporer 350 g de dulce de leche jusqu'à obtenir un appareil lisse.",
      "Lier : verser progressivement le mélange lait-crème chaud dans les œufs en fouettant.",
      "Remplir : passer l'appareil au chinois si possible pour une texture plus lisse, puis verser sur le caramel dans les ramequins.",
      "Bain-marie : disposer les ramequins dans un plat allant au four, verser de l'eau chaude à mi-hauteur.",
      "Cuisson : enfourner à 150 °C environ 35 à 45 minutes, jusqu'à ce que le centre tremblote légèrement.",
      "Refroidissement : laisser refroidir complètement, puis placer au frais au minimum 3 à 4 heures — idéalement une nuit.",
      "Service : passer une lame fine sur le bord, retourner sur une assiette ; le caramel coule sur la crème.",
    ],
    chemistry: [
      "Le dulce de leche et le sucre apportent douceur, couleur et onctuosité ; le lait et la crème épaisse enrichissent l'appareil pour une texture ferme mais fondante.",
      "Les protéines des œufs coagulent doucement au bain-marie et donnent à la crème caramel sa tenue.",
      "Le refroidissement prolongé permet à la crème de se contracter légèrement et de se démouler proprement ; le caramel liquéfié au frais nappe le dessert au retournement.",
    ],
    illustration: "none",
    image: "/images/Creme-Caramel-Dulce-De-Leche.png",
    pageNumber: 53,
  },
  {
    id: "crepes-dulce-de-leche",
    slug: "crepes-dulce-de-leche",
    sectionId: "desserts",
    title: "Crêpes de dulce de leche",
    intro:
      "Pour 8 personnes. Crêpes fines garnies de dulce de leche, dans l'esprit franco-argentin. Compter 1 à 2 crêpes par personne selon la taille de la poêle, soit 8 à 10 crêpes au total.",
    steps: [
      "Pâte à crêpes : mélanger 500 g de farine, 8 œufs, 1 litre de lait, 100 g de beurre fondu et refroidi, 80 g de sucre et 1 pincée de sel. Fouetter jusqu'à obtenir une pâte lisse et fluide, sans grumeaux.",
      "Repos : couvrir et laisser reposer au minimum 30 minutes au frais, idéalement 1 heure, pour que la farine s'hydrate bien.",
      "Cuisson : beurrer légèrement une poêle antiadhésive bien chaude. Verser une louche de pâte, incliner la poêle pour couvrir toute la surface, cuire 1 à 2 minutes par face jusqu'à coloration dorée. Répéter pour obtenir 8 à 10 crêpes.",
      "Garniture : étaler 45 à 60 g de dulce de leche sur chaque crêpe encore tiède (450 à 500 g au total pour 8 personnes). Replier en triangle, rouler ou plier en portefeuille.",
      "Finition : servir aussitôt, ou réchauffer 2 minutes au four à 150 °C si préparées à l'avance. On peut ajouter un peu de crème fouettée légèrement sucrée ou un zeste d'orange.",
      "Service : dresser 1 à 2 crêpes par assiette, napper d'un filet de dulce de leche supplémentaire si souhaité.",
    ],
    chemistry: [
      "Le repos de la pâte hydrate l'amidon et détend le gluten : les crêpes sont plus souples et moins élastiques à la cuisson.",
      "Le dulce de leche concentre lactose et sucres caramélisés : il lie et nappe la crêpe sans recuire, surtout si la crêpe est encore tiède.",
      "La coloration dorée de la crêpe vient de la réaction de Maillard entre protéines de l'œuf et sucres du lait et du sucre.",
    ],
    illustration: "none",
    image: "/images/Crepes-Dulce-De-Leche.png",
    pageNumber: 54,
  },
  {
    id: "tarte-citron-menton",
    slug: "tarte-citron-menton",
    sectionId: "desserts",
    title: "Tarte au citron de Menton",
    intro:
      "French Riviera. Pour 4 personnes. Préparation : 15 min. Cuisson : 1 h. Repos : 1 h. Une tarte au citron fine et élégante, à base de pâte sucrée et de crème au citron de Menton.",
    steps: [
      "Pour la pâte sucrée : mélanger 250 g de farine, 100 g de sucre glace, 1 pincée de sel, le zeste d'un citron non traité et 125 g de beurre froid coupé en dés. Sabler, ajouter 1 œuf, former une boule et laisser reposer 1 h au frais.",
      "Préchauffer le four à 170 °C. Abaisser la pâte, foncer un moule à tarte, piquer le fond puis précuire 15 min.",
      "Pour la crème au citron : fouetter 3 œufs entiers avec 150 g de sucre sans faire mousser. Ajouter 12 cl de jus de citron de Menton et les zestes fins d'1 citron non traité. Mélanger bien.",
      "Verser la crème au citron dans le fond de tarte précuit.",
      "Baisser le four à 140 °C et cuire 25 à 30 min, jusqu'à ce que l'appareil soit pris mais encore légèrement tremblotant au centre.",
      "Laisser complètement refroidir, puis placer au frais avant de servir.",
    ],
    chemistry: [
      "Dans la pâte sucrée, le beurre enrobe une partie de la farine, ce qui limite le développement du gluten et donne une texture friable et fondante.",
      "Dans la crème au citron, les œufs coagulent doucement à la cuisson ; l'acidité du citron de Menton aide à donner une texture lisse et prise sans rendre l'appareil lourd.",
    ],
    illustration: "none",
    image: "/images/11-Tarte-Citron-Menton.png",
    pageNumber: 55,
  },
  {
    id: "baba-au-rhum-saint-james",
    slug: "baba-au-rhum-saint-james",
    sectionId: "desserts",
    title: "Baba au rhum (Rhum Saint-James)",
    intro:
      "Classique français. Petites brioches alvéolées imbibées d'un sirop sucré parfumé au Rhum Saint-James (Martinique). Pour 6 babas individuels environ. Le rhum s'ajoute au sirop tiède, jamais en ébullition, pour garder tout son parfum.",
    steps: [
      "Pâte : délayer 20 g de levure de boulanger fraîche dans 2 à 3 cuillères à soupe de lait tiède. Dans un saladier, mélanger 250 g de farine, 40 g de sucre et 1 pincée de sel ; creuser un puits, ajouter 3 œufs entiers et la levure délayée. Pétrir jusqu'à une pâte lisse et élastique (robot ou à la main), puis incorporer 100 g de beurre pommade en plusieurs fois jusqu'à absorption complète.",
      "Filmer et laisser lever 1 h à température ambiante jusqu'à doublement de volume. Beurrer 6 moules à baba (ou un grand moule), remplir aux trois quarts, laisser lever encore 30 à 45 min jusqu'à ce que la pâte arrive presque au bord.",
      "Cuisson : four à 180 °C environ 20 à 25 min (moins si petits moules) jusqu'à coloration dorée. Démouler encore tiède sur une grille.",
      "Sirop : porter à ébullition 400 ml d'eau avec 200 g de sucre et 1 gousse de vanille fendue (ou un peu d'extrait) ; laisser frémir 3 à 4 min puis retirer du feu. Laisser tiédir jusqu'à environ 50 °C, puis incorporer 12 à 15 cl de Rhum Saint-James (ajuster selon l'intensité souhaitée).",
      "Imbibition : déposer les babas dans un plat creux ; arroser généreusement de sirop tiède, retourner délicatement pour qu'ils s'imprègnent bien ; répéter si besoin après quelques minutes. Réserver au frais au moins 2 h.",
      "Service : égoutter légèrement si trop de sirop en surface ; napper d'un peu de sirop froid et, si on le souhaite, d'une crème chantilly légèrement sucrée.",
    ],
    chemistry: [
      "La levure transforme les sucres en CO₂ et composés aromatiques : les bulles et l'alcool de fermentation gonflent la mie avant cuisson.",
      "La cuisson fixe la structure protéique des œufs et gélifie l'amidon de la farine, ce qui retient l'humidité du sirop sans effondrer complètement la mie.",
      "Le sucre du sirop augmente la tension osmotique et retient l'eau dans le baba ; le rhum, riche en arômes volatils, se fixe mieux si le sirop n'est plus bouillant.",
    ],
    illustration: "none",
    image: "/images/baba-au-rhum.png",
    pageNumber: 56,
  },
  {
    id: "tiramisu",
    slug: "tiramisu",
    sectionId: "desserts",
    title: "Tiramisu",
    intro:
      "Pour 4 personnes. Classique italien du Veneto, sans cuisson : biscuits à la cuillère imbibés d'un café espresso froid, alternés avec une crème onctueuse au mascarpone, œufs et sucre. À préparer à l'avance : minimum 4 h au frais, idéalement une nuit. Saupoudrer de cacao amer juste avant de servir.",
    steps: [
      "Café : préparer 250 ml d'espresso fort ou de café très corsé, laisser refroidir complètement, puis ajouter 2 cuillères à soupe de Marsala ou de rhum ambré si souhaité.",
      "Crème au mascarpone : fouetter 3 jaunes d'œufs avec 60 g de sucre jusqu'à ce que le mélange blanchisse et devienne mousseux. Incorporer 250 g de mascarpone en mélangeant doucement jusqu'à obtenir une crème lisse.",
      "Blancs : monter 3 blancs d'œufs en neige ferme, puis les incorporer délicatement à la crème au mascarpone en trois fois, sans trop travailler la préparation.",
      "Montage : dans un plat rectangulaire ou des verrines individuelles, tremper rapidement 24 biscuits à la cuillère dans le café froid — une seconde par face, sans les ramollir. Alterner une couche de biscuits et une couche de crème ; terminer par une couche de crème.",
      "Repos : couvrir au contact et placer au frais au minimum 4 heures, idéalement une nuit, pour que la crème se fixe et que les biscuits s'imprègnent uniformément.",
      "Service : saupoudrer généreusement de cacao amer non sucré au moment de servir.",
    ],
    chemistry: [
      "Le mascarpone, très riche en matière grasse, forme avec les jaunes d'œufs et le sucre une crème épaisse et onctueuse ; les blancs montés apportent légèreté sans cuisson.",
      "Tremper les biscuits très brièvement limite l'absorption d'eau : ils restent moelleux à cœur tout en prenant le parfum du café.",
      "Le repos au frais permet à la crème de se stabiliser et aux arômes de café et de Marsala de se répartir ; le cacao amer équilibre la douceur du sucre et du mascarpone.",
    ],
    illustration: "none",
    image: "/images/Tiramisu.png",
    pageNumber: 57,
  },];
