const imgSlider = document.querySelector(".imgSlider");
const sliderAgent = document.querySelector(".carroussel");
const descriptionText = document.querySelector("#description-text");
const roleText = document.querySelector("#role-text");
const h2Agent = document.querySelectorAll(".agent_name");
const spanAgent = document.querySelectorAll(".spanAgent");
const customCursor = document.getElementById("custom-cursor");
let agentId;

sliderAgent.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
});

sliderAgent.addEventListener("mouseover", () => {
  customCursor.style.opacity = 1;
});

sliderAgent.addEventListener("mouseleave", () => {
  customCursor.style.opacity = 0;
});

let arrayCharacters = [
  {
    id: "jett",
    image: `<img src="media/img/Jett.png" alt="Jett" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "Représentante de sa patrie, la Corée du Sud, Jett dispose d'un style de combat basé sur l'agilité et l'esquive, qui lui permet de prendre des risques qu'elle seule peut se permettre de prendre. Elle tourne autour des affrontements et découpe ses ennemis avant même qu'ils ne s'en rendent compte.",
  },
  {
    id: "raze",
    image: `<img src="media/img/Raze.png" alt="Raze" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "Armée de sa personnalité et de sa grosse artillerie, Raze fait une entrée explosive depuis le Brésil. Grâce à sa force brute, elle excelle à débusquer les ennemis retranchés et à faire le ménage dans les espaces étroits, le tout avec une bonne dose de « boum ».",
  },
  {
    id: "breach",
    image: `<img src="media/img/Breach.png" alt="Breach" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo Initiateur" />`,
    description:
      "Breach, le Suédois bionique, tire de puissantes décharges cinétiques pour ouvrir un chemin en territoire ennemi. Grâce aux dégâts et aux diversions ainsi provoqués, aucun combat n'est jamais en sa défaveur.",
  },
  {
    id: "omen",
    image: `<img src="media/img/omen.png" alt="Omen" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Véritable fantôme d'un souvenir, Omen chasse dans les ténèbres. Il aveugle les ennemis, se téléporte d'un bout à l'autre du champ de bataille et laisse la peur se répandre parmi ses adversaires qui se demandent qui sera sa prochaine victime.",
  },
  {
    id: "brimstone",
    image: `<img src="media/img/Brimstone.png" alt="Brimstone" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Tout droit venu des États-Unis d'Amérique, Brimstone possède un arsenal orbital qui permet à son escouade de toujours avoir l'avantage. La précision et la portée de ses compétences utilitaires font de lui un commandant sans égal sur le terrain.",
  },
  {
    id: "phoenix",
    image: `<img src="media/img/Phoenix.png" alt="Phoenix" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "En provenance du Royaume-Uni, Phoenix illumine le champ de bataille avec ses pouvoirs astraux et son style de combat flamboyant. Peu importe que les renforts arrivent ou non, il fonce au combat quand il le décide.",
  },
  {
    id: "sage",
    image: `<img src="media/img/Sage.png" alt="Sage" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Véritable pilier originaire de Chine, Sage assure sa sécurité et celle de son équipe où qu'elle aille. Elle peut réanimer ses alliés tombés au combat et repousser les assauts ennemis pour offrir des oasis de tranquillité sur un champ de bataille infernal.",
  },
  {
    id: "sova",
    image: `<img src="media/img/sova.png" alt="Sova" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo Initiator" />`,
    description:
      "Né dans l'hiver éternel de la toundra russe, Sova traque, trouve et élimine ses ennemis avec une efficacité et une précision redoutables. Ses incroyables talents d'éclaireur et son arc personnalisé lui garantissent que sa cible ne fuira jamais très longtemps.",
  },
  {
    id: "viper",
    image: `<img src="media/img/Viper.png" alt="Viper" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Viper est une chimiste américaine qui déploie un arsenal d'appareils toxiques pour contrôler le champ de bataille et handicaper la vision des ennemis. Si les toxines ne suffisent pas à abattre sa proie, ses machinations finiront le travail.",
  },
  {
    id: "cypher",
    image: `<img src="media/img/Cypher.png" alt="Cypher" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Informateur originaire du Maroc, Cypher est un véritable réseau de surveillance à lui tout seul. Il révèle tous les secrets. Il détecte toutes les manœuvres. Rien n'échappe à Cypher.",
  },
  {
    id: "reyna",
    image: `<img src="media/img/Reyna.png" alt="Reyna" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo duelist" />`,
    description:
      "Originaire du cœur du Mexique, Reyna est une experte des combats singuliers qui se renforce à chaque élimination qu'elle réussit. Son efficacité n'est limitée que par son habileté, ce qui la rend très dépendante de ses propres performances.",
  },
  {
    id: "killjoy",
    image: `<img src="media/img/Killjoy.png" alt="Killjoy" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Le génie à l'allemande. Killjoy assure le contrôle facile du terrain grâce à son armée d'inventions. Si son équipement ne suffit pas à arrêter l'ennemi, ce sont les entraves de ses robots qui en feront du menu fretin.",
  },
  {
    id: "skye",
    image: `<img src="media/img/Skye.png" alt="Skye" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "Originaire d'Australie, Skye et sa bande de bêtes sauvages ouvrent la voie à travers les territoires hostiles. Grâce à ses créations qui entravent l'ennemi et à sa faculté à soigner les autres, l'équipe est plus forte et plus en sécurité quand elle compte Skye dans ses rangs.",
  },
  {
    id: "yoru",
    image: `<img src="media/img/Yoru.png" alt="Yoru" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "Le Japonais Yoru perce des trous dans la réalité pour s'infiltrer derrière les lignes ennemies sans se faire repérer. En faisant preuve d'autant de ruse que d'agressivité, il prend ses cibles par surprise avant qu'elles n'aient le temps de se retourner.",
  },
  {
    id: "astra",
    image: `<img src="media/img/Astra.png" alt="Astra" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "L'agent ghanéen Astra canalise les énergies du cosmos pour façonner le champ de bataille à sa convenance. Avec une maîtrise complète de sa forme astrale et un talent pour la planification stratégique, elle a toujours une large avance sur ses ennemis.",
  },
  {
    id: "kay/o",
    image: `<img src="media/img/Kayo.png" alt="Kayo" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "KAY/O est une machine de guerre conçue dans un but précis : neutraliser les radiants. La neutralisation des compétences ennemies réduit les possibilités de riposte des adversaires, ce qui confère un avantage décisif à son équipe.",
  },
  {
    id: "chamber",
    image: `<img src="media/img/Chamber.png" alt="Chamber" />`,
    role: "SENTINEL",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Aussi classe que bien équipé, le concepteur d'armes Chamber repousse les assaillants avec une précision mortelle. Il met à profit son arsenal bien particulier pour tenir sa position et éliminer les ennemis de loin en prévoyant une solution aux défis posés par chaque stratégie.",
  },
  {
    id: "neon",
    image: `<img src="media/img/Neon.png" alt="Neon" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo duelliste" />`,
    description:
      "L'agent philippin, Neon, s'élance vers l'avant à une vitesse fulgurante, libérant de grosses décharges de radiance biomagnétique générées frénétiquement par son corps. Elle se lance à la poursuite des ennemis qui n'ont pas le temps de s'y préparer et les élimine aussi vite que l'éclair.",
  },
  {
    id: "fade",
    image: `<img src="media/img/Fade.png" alt="Fade" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "Originaire de Turquie, la chasseuse de primes Fade utilise le pouvoir des cauchemars pour s'emparer des secrets ennemis. Elle traque ses cibles et révèle leurs plus grandes peurs pour mieux les briser dans l'obscurité.",
  },
];

const agentRoll = () => {
  let agent = arrayCharacters.find(
    (arrayCharacters) => arrayCharacters.id === agentId
  );

  imgSlider.innerHTML = agent.image;
  roleText.innerHTML = agent.role;
  descriptionText.innerHTML = agent.description;
  roleText.innerHTML += agent.roleImg;
  imgSlider.style.animation = "displayImg 0.4s linear 1";
};

const anim = () => {
  roleText.style.animation = "textAnim 0.8s linear 1";
  descriptionText.style.animation = "textAnim 0.8s linear 1";
};

const animReset = () => {
  roleText.style.animation = "";
  descriptionText.style.animation = "";
  imgSlider.style.animation = "";
};

sliderAgent.addEventListener("click", (e) => {
  agentId = e.target.id;
  agentRoll();
  anim();
  setTimeout(animReset, 2000);
});

// Add/Remove class au clic sur une slide

const removeActiveClasses = () => {
  h2Agent.forEach((titleAgent) => {
    titleAgent.classList.remove("active");
  });
};

h2Agent.forEach((titleAgent) => {
  titleAgent.addEventListener("mouseover", () => {
    titleAgent.style.transition = "0.4s";
    titleAgent.style.left = "14px";
  });

  titleAgent.addEventListener("mouseout", () => {
    titleAgent.style.left = "0px";
  });

  titleAgent.addEventListener("click", () => {
    removeActiveClasses();
    titleAgent.classList.add("active");
  });
});
