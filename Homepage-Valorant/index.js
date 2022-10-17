const imgSlider = document.querySelector(".imgSlider");
const sliderAgent = document.querySelector(".carroussel");
const descriptionText = document.querySelector("#description-text");
const roleText = document.querySelector("#role-text");
const h2Agent = document.querySelectorAll(".agent_name");
const spanAgent = document.querySelectorAll(".spanAgent");
const customCursor = document.getElementById("custom-cursor");
const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");
const skill4 = document.getElementById("skill4");
const skillVideo = document.querySelectorAll(".click_video");
const dots = document.querySelector(".slick-dots");
const listSkills = document.querySelectorAll(".list_skills");
const containerBanner = document.querySelector(".container-banner");

let agentId = "jett";
let videoId = "skill1";

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

list_article.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
});

list_article.addEventListener("mouseover", () => {
  customCursor.style.opacity = 1;
});

list_article.addEventListener("mouseleave", () => {
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
    skill1: `<img src="media/img/Jett/TX_Jett_Q.png" alt="Jett Q" />`,
    skill2: `<img src="media/img/Jett/TX_Jett_E.png" alt="Jett E" />`,
    skill3: `<img src="media/img/Jett/TX_Jett_C.png" alt="Jett C" />`,
    skill4: `<img src="media/img/Jett/TX_Jett_X.png" alt="Jett X" />`,
  },
  {
    id: "raze",
    image: `<img src="media/img/Raze.png" alt="Raze" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "Armée de sa personnalité et de sa grosse artillerie, Raze fait une entrée explosive depuis le Brésil. Grâce à sa force brute, elle excelle à débusquer les ennemis retranchés et à faire le ménage dans les espaces étroits, le tout avec une bonne dose de « boum ».",
    skill1: `<img src="media/img/Raze/TX_Raze_Q.png" alt="Raze Q" />`,
    skill2: `<img src="media/img/Raze/TX_Raze_E.png" alt="Raze E" />`,
    skill3: `<img src="media/img/Raze/TX_Raze_C.png" alt="Raze C" />`,
    skill4: `<img src="media/img/Raze/TX_Raze_X.png" alt="Raze X" />`,
  },
  {
    id: "breach",
    image: `<img src="media/img/Breach.png" alt="Breach" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo Initiateur" />`,
    description:
      "Breach, le Suédois bionique, tire de puissantes décharges cinétiques pour ouvrir un chemin en territoire ennemi. Grâce aux dégâts et aux diversions ainsi provoqués, aucun combat n'est jamais en sa défaveur.",
    skill1: `<img src="media/img/Breach/TX_Breach_Q.png" alt="Breach Q" />`,
    skill2: `<img src="media/img/Breach/TX_Breach_E.png" alt="Breach E" />`,
    skill3: `<img src="media/img/Breach/TX_Breach_C.png" alt="Breach C" />`,
    skill4: `<img src="media/img/Breach/TX_Breach_X.png" alt="Breach X" />`,
  },
  {
    id: "omen",
    image: `<img src="media/img/omen.png" alt="Omen" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Véritable fantôme d'un souvenir, Omen chasse dans les ténèbres. Il aveugle les ennemis, se téléporte d'un bout à l'autre du champ de bataille et laisse la peur se répandre parmi ses adversaires qui se demandent qui sera sa prochaine victime.",
    skill1: `<img src="media/img/Omen/TX_Omen_Q.png" alt="Omen Q" />`,
    skill2: `<img src="media/img/Omen/TX_Omen_E.png" alt="Omen E" />`,
    skill3: `<img src="media/img/Omen/TX_Omen_C.png" alt="Omen C" />`,
    skill4: `<img src="media/img/Omen/TX_Omen_X.png" alt="Omen X" />`,
  },
  {
    id: "brimstone",
    image: `<img src="media/img/Brimstone.png" alt="Brimstone" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Tout droit venu des États-Unis d'Amérique, Brimstone possède un arsenal orbital qui permet à son escouade de toujours avoir l'avantage. La précision et la portée de ses compétences utilitaires font de lui un commandant sans égal sur le terrain.",
    skill1: `<img src="media/img/Brimstone/TX_Brimstone_Q.png" alt="Brimstone Q" />`,
    skill2: `<img src="media/img/Brimstone/TX_Brimstone_E.png" alt="Brimstone E" />`,
    skill3: `<img src="media/img/Brimstone/TX_Brimstone_C.png" alt="Brimstone C" />`,
    skill4: `<img src="media/img/Brimstone/TX_Brimstone_X.png" alt="Brimstone X" />`,
  },
  {
    id: "phoenix",
    image: `<img src="media/img/Phoenix.png" alt="Phoenix" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "En provenance du Royaume-Uni, Phoenix illumine le champ de bataille avec ses pouvoirs astraux et son style de combat flamboyant. Peu importe que les renforts arrivent ou non, il fonce au combat quand il le décide.",
    skill1: `<img src="media/img/Phoenix/TX_Pheonix_Q.png" alt="Phoenix Q" />`,
    skill2: `<img src="media/img/Phoenix/TX_Pheonix_E.png" alt="Phoenix E" />`,
    skill3: `<img src="media/img/Phoenix/TX_Pheonix_C.png" alt="Phoenix C" />`,
    skill4: `<img src="media/img/Phoenix/TX_Pheonix_X.png" alt="Phoenix X" />`,
  },
  {
    id: "sage",
    image: `<img src="media/img/Sage.png" alt="Sage" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Véritable pilier originaire de Chine, Sage assure sa sécurité et celle de son équipe où qu'elle aille. Elle peut réanimer ses alliés tombés au combat et repousser les assauts ennemis pour offrir des oasis de tranquillité sur un champ de bataille infernal.",
    skill1: `<img src="media/img/Sage/TX_Sage_Q.png" alt="Sage Q" />`,
    skill2: `<img src="media/img/Sage/TX_Sage_E.png" alt="Sage E" />`,
    skill3: `<img src="media/img/Sage/TX_Sage_C.png" alt="Sage C" />`,
    skill4: `<img src="media/img/Sage/TX_Sage_X.png" alt="Sage X" />`,
  },
  {
    id: "sova",
    image: `<img src="media/img/sova.png" alt="Sova" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo Initiator" />`,
    description:
      "Né dans l'hiver éternel de la toundra russe, Sova traque, trouve et élimine ses ennemis avec une efficacité et une précision redoutables. Ses incroyables talents d'éclaireur et son arc personnalisé lui garantissent que sa cible ne fuira jamais très longtemps.",
    skill1: `<img src="media/img/Sova/TX_Sova_Q.png" alt="Sova Q" />`,
    skill2: `<img src="media/img/Sova/TX_Sova_E.png" alt="Sova E" />`,
    skill3: `<img src="media/img/Sova/TX_Sova_C.png" alt="Sova C" />`,
    skill4: `<img src="media/img/Sova/TX_Sova_X.png" alt="Sova X" />`,
  },
  {
    id: "viper",
    image: `<img src="media/img/Viper.png" alt="Viper" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "Viper est une chimiste américaine qui déploie un arsenal d'appareils toxiques pour contrôler le champ de bataille et handicaper la vision des ennemis. Si les toxines ne suffisent pas à abattre sa proie, ses machinations finiront le travail.",
    skill1: `<img src="media/img/Viper/TX_Viper_Q.png" alt="Viper Q" />`,
    skill2: `<img src="media/img/Viper/TX_Viper_E.png" alt="Viper E" />`,
    skill3: `<img src="media/img/Viper/TX_Viper_C.png" alt="Viper C" />`,
    skill4: `<img src="media/img/Viper/TX_Viper_X.png" alt="Viper X" />`,
  },
  {
    id: "cypher",
    image: `<img src="media/img/Cypher.png" alt="Cypher" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Informateur originaire du Maroc, Cypher est un véritable réseau de surveillance à lui tout seul. Il révèle tous les secrets. Il détecte toutes les manœuvres. Rien n'échappe à Cypher.",
    skill1: `<img src="media/img/Cypher/TX_Cypher_Q.png" alt="Cypher Q" />`,
    skill2: `<img src="media/img/Cypher/TX_Cypher_E.png" alt="Cypher E" />`,
    skill3: `<img src="media/img/Cypher/TX_Cypher_C.png" alt="Cypher C" />`,
    skill4: `<img src="media/img/Cypher/TX_Cypher_X.png" alt="Cypher X" />`,
  },
  {
    id: "reyna",
    image: `<img src="media/img/Reyna.png" alt="Reyna" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo duelist" />`,
    description:
      "Originaire du cœur du Mexique, Reyna est une experte des combats singuliers qui se renforce à chaque élimination qu'elle réussit. Son efficacité n'est limitée que par son habileté, ce qui la rend très dépendante de ses propres performances.",
    skill1: `<img src="media/img/Reyna/TX_Reyna_Q.png" alt="Reyna Q" />`,
    skill2: `<img src="media/img/Reyna/TX_Reyna_E.png" alt="Reyna E" />`,
    skill3: `<img src="media/img/Reyna/TX_Reyna_C.png" alt="Reyna C" />`,
    skill4: `<img src="media/img/Reyna/TX_Reyna_X.png" alt="Reyna X" />`,
  },
  {
    id: "killjoy",
    image: `<img src="media/img/Killjoy.png" alt="Killjoy" />`,
    role: "SENTINELLE",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Le génie à l'allemande. Killjoy assure le contrôle facile du terrain grâce à son armée d'inventions. Si son équipement ne suffit pas à arrêter l'ennemi, ce sont les entraves de ses robots qui en feront du menu fretin.",
    skill1: `<img src="media/img/Killjoy/Copy_of_TX_KJ_Alarm.png" alt="Killjoy Q" />`,
    skill2: `<img src="media/img/Killjoy/Copy_of_tx_kj_turret.png" alt="Killjoy C" />`,
    skill3: `<img src="media/img/Killjoy/Copy_of_TX_KJ_Bees.png" alt="Killjoy E" />`,
    skill4: `<img src="media/img/Killjoy/Copy_of_TX_KJ_Lockdown.png" alt="Killjoy X" />`,
  },
  {
    id: "skye",
    image: `<img src="media/img/Skye.png" alt="Skye" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "Originaire d'Australie, Skye et sa bande de bêtes sauvages ouvrent la voie à travers les territoires hostiles. Grâce à ses créations qui entravent l'ennemi et à sa faculté à soigner les autres, l'équipe est plus forte et plus en sécurité quand elle compte Skye dans ses rangs.",
    skill1: `<img src="media/img/Skye/SKye-abilities-_0000s_0003_ICONS_0000_Layer-1.png" alt="Skye Q" />`,
    skill2: `<img src="media/img/Skye/SKye-abilities-_0000s_0002_ICONS_0001_Layer-2.png" alt="Skye C" />`,
    skill3: `<img src="media/img/Skye/SKye-abilities-_0000s_0001_ICONS_0002_Layer-3.png" alt="Skye E" />`,
    skill4: `<img src="media/img/Skye/SKye-abilities-_0000s_0000_ICONS_0003_Layer-4.png" alt="Skye X" />`,
  },
  {
    id: "yoru",
    image: `<img src="media/img/Yoru.png" alt="Yoru" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo dueliste" />`,
    description:
      "Le Japonais Yoru perce des trous dans la réalité pour s'infiltrer derrière les lignes ennemies sans se faire repérer. En faisant preuve d'autant de ruse que d'agressivité, il prend ses cibles par surprise avant qu'elles n'aient le temps de se retourner.",
    skill1: `<img src="media/img/Yoru/Yoru_Anility_Icons_512x512_Q.png" alt="Yoru Q" />`,
    skill2: `<img src="media/img/Yoru/yoru_ability_icons_52x512_E.png" alt="Yoru C" />`,
    skill3: `<img src="media/img/Yoru/TX_Yoru_Fakeout.png" alt="Yoru E" />`,
    skill4: `<img src="media/img/Yoru/Yoru_Anility_Icons_512x512_X.png" alt="Yoru X" />`,
  },
  {
    id: "astra",
    image: `<img src="media/img/Astra.png" alt="Astra" />`,
    role: "CONTRÔLEUR",
    roleImg: `<img src="media/img/icons_role/Controller.png" alt="logo controleur" />`,
    description:
      "L'agent ghanéen Astra canalise les énergies du cosmos pour façonner le champ de bataille à sa convenance. Avec une maîtrise complète de sa forme astrale et un talent pour la planification stratégique, elle a toujours une large avance sur ses ennemis.",
    skill1: `<img src="media/img/Astra/Astra_Ability_Icons_Q_NovaPulsev2.png" alt="Astra Q" />`,
    skill2: `<img src="media/img/Astra/Astra_Ability_Icons_E_Nebulav2.png" alt="Astra E" />`,
    skill3: `<img src="media/img/Astra/Astra_Ability_Icons_C_GravityWellv2.png" alt="Astra C" />`,
    skill4: `<img src="media/img/Astra/Astra_Ability_Icons_X_CosmicDividev2.png" alt="Astra X" />`,
  },
  {
    id: "kay/o",
    image: `<img src="media/img/Kayo.png" alt="Kayo" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "KAY/O est une machine de guerre conçue dans un but précis : neutraliser les radiants. La neutralisation des compétences ennemies réduit les possibilités de riposte des adversaires, ce qui confère un avantage décisif à son équipe.",
    skill1: `<img src="media/img/Kayo/Q_FlashDrive.png" alt="Kayo Q" />`,
    skill2: `<img src="media/img/Kayo/E_ZeroPoint.png" alt="Kayo C" />`,
    skill3: `<img src="media/img/Kayo/C_FragMent.png" alt="Kayo E" />`,
    skill4: `<img src="media/img/Kayo/X_NullCmd.png" alt="Kayo X" />`,
  },
  {
    id: "chamber",
    image: `<img src="media/img/Chamber.png" alt="Chamber" />`,
    role: "SENTINEL",
    roleImg: `<img src="media/img/icons_role/Sentinel.png" alt="logo sentinel" />`,
    description:
      "Aussi classe que bien équipé, le concepteur d'armes Chamber repousse les assaillants avec une précision mortelle. Il met à profit son arsenal bien particulier pour tenir sa position et éliminer les ennemis de loin en prévoyant une solution aux défis posés par chaque stratégie.",
    skill1: `<img src="media/img/Chamber/Chamber_ability_Q.png" alt="Chamber Q" />`,
    skill2: `<img src="media/img/Chamber/Chamber_ability_E.png" alt="Chamber E" />`,
    skill3: `<img src="media/img/Chamber/Chamber_ability_C.png" alt="Chamber C" />`,
    skill4: `<img src="media/img/Chamber/Chamber_ability_X.png" alt="Chamber X" />`,
  },
  {
    id: "neon",
    image: `<img src="media/img/Neon.png" alt="Neon" />`,
    role: "DUELLISTE",
    roleImg: `<img src="media/img/icons_role/Duelist.png" alt="logo duelliste" />`,
    description:
      "L'agent philippin, Neon, s'élance vers l'avant à une vitesse fulgurante, libérant de grosses décharges de radiance biomagnétique générées frénétiquement par son corps. Elle se lance à la poursuite des ennemis qui n'ont pas le temps de s'y préparer et les élimine aussi vite que l'éclair.",
    skill1: `<img src="media/img/Neon/Neon_Q-Relay_Bolt.png" alt="Neon Q" />`,
    skill2: `<img src="media/img/Neon/Neon_E-High_Gear.png" alt="Neon E" />`,
    skill3: `<img src="media/img/Neon/Neon_C-Fast_Lane.png" alt="Neon C" />`,
    skill4: `<img src="media/img/Neon/Neon_X-Overdrive.png" alt="Neon X" />`,
  },
  {
    id: "fade",
    image: `<img src="media/img/Fade.png" alt="Fade" />`,
    role: "INITIATEUR",
    roleImg: `<img src="media/img/icons_role/Initiator.png" alt="logo initiateur" />`,
    description:
      "Originaire de Turquie, la chasseuse de primes Fade utilise le pouvoir des cauchemars pour s'emparer des secrets ennemis. Elle traque ses cibles et révèle leurs plus grandes peurs pour mieux les briser dans l'obscurité.",
    skill1: `<img src="media/img/Fade/Fade_-_Q_-_Seize.png" alt="Fade Q" />`,
    skill2: `<img src="media/img/Fade/Fade_-_E_-_Haunt.png" alt="Fade E" />`,
    skill3: `<img src="media/img/Fade/Fade_-_C_-_Prowler.png" alt="Fade C" />`,
    skill4: `<img src="media/img/Fade/Fade_-_X_-_Nightfall.png" alt="Fade X" />`,
  },
];

let arraySkills = [
  {
    id: "jett",
    skill1: [
      "A - COURANT ASCENDANT",
      "Vous vous propulsez INSTANTANÉMENT dans les airs.",
    ],
    skill2: [
      "E - VENT ARRIÈRE",
      "Vous vous propulsez INSTANTANÉMENT dans la direction vers laquelle vous vous dirigez. Si vous êtes immobile, vous vous propulsez vers l'avant.",
    ],
    skill3: [
      "C - AVERSE",
      "Lancez INSTANTANÉMENT un projectile. Lorsqu'il touche une surface, il libère un nuage qui bloque la vision pendant un court instant. MAINTENEZ la touche de la compétence pour courber la fumée dans la direction de votre réticule.",
    ],
    skill4: [
      "X - TEMPÊTE DE LAMES",
      "ÉQUIPEZ-vous d'un ensemble de couteaux extrêmement précis qui se rechargent lorsque vous éliminez un ennemi. TIREZ pour lancer un seul couteau sur votre cible. Utilisez le TIR SECONDAIRE pour lancer toutes les dagues restantes sur votre cible.",
    ],
  },
  {
    id: "raze",
    skill1: [
      "A - PACK EXPLOSIF",
      "Lancez INSTANTANÉMENT un pack explosif qui se colle aux surfaces. RÉUTILISEZ la compétence pour déclencher l'explosion, ce qui blesse et déplace tous ceux pris dans le souffle. Raze n'est pas blessée par cette compétence, mais elle subit des dégâts de chute si elle tombe d'assez haut.",
    ],
    skill2: [
      "E - GRENADE GIGOGNE",
      "ÉQUIPEZ-vous d'une grenade à sous-munitions. TIREZ pour lancer la grenade. Elle inflige des dégâts et crée des sous-munitions qui blessent tous ceux qui sont à leur portée.",
    ],
    skill3: [
      "C - BOUM BOT",
      "ÉQUIPEZ-vous d'un Boum Bot. TIREZ pour déployer le bot, ce qui le propulse en ligne droite sur le sol. Il rebondit contre les murs. Les Boum Bots se verrouillent sur les ennemis situés dans un cône face à eux et les chassent, explosant quand ils les atteignent en infligeant de lourds dégâts.",
    ],
    skill4: [
      "X - BOUQUET FINAL",
      "ÉQUIPEZ-vous d'un lance-roquettes. TIREZ pour lancer une roquette qui inflige de lourds dégâts de zone au premier contact.",
    ],
  },
  {
    id: "breach",
    skill1: [
      "A - POINT D'IGNITION",
      "ÉQUIPEZ-vous d'une charge aveuglante. TIREZ pour provoquer une explosion rapide à travers le mur. La charge explose en aveuglant tous les joueurs qui la regardent.",
    ],
    skill2: [
      "E - LIGNE DE FRACTURE",
      "ÉQUIPEZ-vous d'un explosif sismique. MAINTENEZ LE TIR pour augmenter la distance. RELÂCHEZ pour provoquer un séisme qui désoriente tous les joueurs dans la zone et sur une ligne menant à la zone.",
    ],
    skill3: [
      "C - RÉPLIQUE",
      "ÉQUIPEZ-vous d'une charge à fusion. TIREZ pour provoquer une explosion lente à travers le mur. L'explosion inflige d'importants dégâts à tous ceux dans la zone.",
    ],
    skill4: [
      "X - ONDE SISMIQUE",
      "ÉQUIPEZ-vous d'une charge sismique. TIREZ pour envoyer un séisme déferlant à travers tous les obstacles dans une large zone conique. Le séisme désoriente et projette en l'air tous ceux qu'il touche.",
    ],
  },
  {
    id: "omen",
    skill1: [
      "A - PARANOÏA",
      "Tirez INSTANTANÉMENT un projectile d'ombre vers l'avant, ce qui réduit brièvement la portée de la vision de tous les joueurs touchés. Ce projectile peut traverser les murs.",
    ],
    skill2: [
      "E - VOILE SOMBRE",
      "ÉQUIPEZ-vous d'un orbe d'ombre accompagné d'un indicateur de portée. TIREZ pour lancer l'orbe à l'endroit marqué, ce qui crée une sphère d'ombre durable qui bloque la vision. MAINTENEZ LE TIR SECONDAIRE tout en visant pour éloigner le marqueur. MAINTENEZ la touche de la compétence tout en visant pour rapprocher le marqueur.",
    ],
    skill3: [
      "C - VOIE DES OMBRES",
      "ÉQUIPEZ-vous d'une compétence de marche des ombres accompagnée d'un indicateur de portée. TIREZ pour commencer une courte canalisation avant de vous téléporter vers l'endroit marqué.",
    ],
    skill4: [
      "X - DEPUIS LES OMBRES",
      "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour commencer à vous téléporter vers l'endroit sélectionné. Pendant la téléportation, vous apparaissez sous forme d'ombre. Les ennemis peuvent détruire cette ombre pour annuler votre téléportation",
    ],
  },
  {
    id: "brimstone",
    skill1: [
      "A - BOMBE INCENDIAIRE",
      "ÉQUIPEZ-vous d'un lance-grenades incendiaires. TIREZ pour lancer une grenade qui explose lorsqu'elle s'arrête au sol, créant une zone enflammée persistante qui blesse les joueurs.",
    ],
    skill2: [
      "E - FRAPPE FUMIGÈNE",
      "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour définir les endroits où les nuages de fumée de Brimstone atterriront. Utilisez le TIR SECONDAIRE pour confirmer, ce qui lance des nuages de fumée durables qui bloquent la vision dans la zone sélectionnée.",
    ],
    skill3: [
      "C - BALISE STIMULANTE",
      "ÉQUIPEZ-vous d'une balise stimulante. TIREZ pour lancer la balise devant Brimstone. Lorsqu'elle touche le sol, la balise crée un champ qui confère Tir rapide aux joueurs.",
    ],
    skill4: [
      "X - RAYON ORBITAL",
      "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour ordonner une frappe orbitale persistante à l'endroit sélectionné, ce qui inflige d'importants dégâts sur la durée aux joueurs pris dans la zone.",
    ],
  },
  {
    id: "phoenix",
    skill1: [
      "A - BALLE COURBE",
      "ÉQUIPEZ-vous d'un orbe flamboyant qui explose peu après avoir été lancé, aveuglant tous les joueurs qui le regardent. TIREZ pour courber la trajectoire de l'orbe vers la gauche. Utilisez le TIR SECONDAIRE pour courber la trajectoire de l'orbe vers la droite.",
    ],
    skill2: [
      "E - MAINS BRÛLANTES",
      "ÉQUIPEZ-vous d'une boule de feu. TIREZ pour lancer une boule de feu qui explose après un certain temps ou en touchant le sol, créant une zone enflammée persistante qui blesse les ennemis.",
    ],
    skill3: [
      "C - BRASIER",
      "ÉQUIPEZ-vous d'un mur de feu. TIREZ pour créer une ligne de feu qui se déplace vers l'avant, créant un mur de feu qui bloque la vision et blesse les joueurs qui le traversent. MAINTENEZ LE TIR pour courber le mur dans la direction de votre réticule.",
    ],
    skill4: [
      "X - REVANCHE",
      "Placez INSTANTANÉMENT un marqueur sur votre position. Tant que cette compétence est active, mourir vous renvoie à cette position avec tous vos PV (même chose si la compétence expire).",
    ],
  },
  {
    id: "sage",
    skill1: [
      "A - ORBE DE LENTEUR",
      "ÉQUIPEZ-vous d'un orbe ralentissant. TIREZ pour lancer l'orbe devant vous. Lorsqu'il touche le sol, l'orbe explose et crée un champ persistant qui ralentit les joueurs qui s'y trouvent.",
    ],
    skill2: [
      "E - ORBE DE SOIN",
      "ÉQUIPEZ-vous d'un orbe de soin. TIREZ en visant un allié blessé pour lui rendre des PV sur la durée. Si vous avez subi des dégâts, utilisez le TIR SECONDAIRE pour récupérer des PV sur la durée.",
    ],
    skill3: [
      "C - ORBE BARRIÈRE",
      "ÉQUIPEZ-vous d'un orbe barrière. TIRER permet de placer un mur solide. Le TIR SECONDAIRE fait pivoter le cibleur.",
    ],
    skill4: [
      "X - RÉSURRECTION",
      "ÉQUIPEZ-vous d'une compétence de résurrection. TIREZ en visant un allié mort pour le ramener à la vie. Après une courte canalisation, votre allié est ramené à la vie avec tous ses PV.",
    ],
  },
  {
    id: "sova",
    skill1: [
      "A - ÉLECTROFLÈCHE",
      "ÉQUIPEZ-vous d'un arc et d'une flèche électrique. TIREZ pour décocher la flèche, qui explose à l'impact et blesse les joueurs proches. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche.",
    ],
    skill2: [
      "E - FLÈCHE DE RECONNAISSANCE",
      "ÉQUIPEZ-vous d'un arc et d'une flèche de reconnaissance. TIREZ pour décocher la flèche, qui s'active à l'impact et révèle la position des ennemis proches se trouvant dans sa ligne de vue. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche.",
    ],
    skill3: [
      "C - DRONE RAPACE",
      "ÉQUIPEZ-vous d'un drone rapace. TIREZ pour déployer et prendre le contrôle du drone. Quand vous contrôlez le drone, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché",
    ],
    skill4: [
      "X - FUREUR DU CHASSEUR",
      "ÉQUIPEZ-vous d'un arc et de trois projectiles d'énergie à longue portée capables de traverser les murs. TIREZ pour décocher un projectile d'énergie en ligne droite, qui inflige des dégâts et révèle la position des ennemis touchés. Cette compétence peut être RÉUTILISÉE jusqu'à deux fois de plus tant que la compétence est active.",
    ],
  },
  {
    id: "viper",
    skill1: [
      "A - NUAGE DE POISON",
      "ÉQUIPEZ-vous d'un diffuseur de gaz. TIREZ pour lancer le diffuseur, qui reste présent jusqu'à la fin de la manche. RÉUTILISEZ la compétence pour créer un nuage de fumée toxique qui consomme du carburant. Cette compétence peut être RÉUTILISÉE plus d'une fois et le diffuseur peut être ramassé pour être REDÉPLOYÉ.",
    ],
    skill2: [
      "E - ÉCRAN TOXIQUE",
      "ÉQUIPEZ-vous d'un lance-diffuseurs de gaz. TIREZ pour déployer une longue ligne de diffuseurs de gaz. RÉUTILISEZ la compétence pour créer un mur de gaz toxique qui consomme du carburant. Cette compétence peut être RÉUTILISÉE plus d'une fois.",
    ],
    skill3: [
      "C - MORSURE DU SERPENT",
      "ÉQUIPEZ-vous d'un lance-grenades chimiques. TIREZ pour lancer une grenade qui se brise en touchant le sol, créant une zone chimique persistante qui blesse les ennemis.",
    ],
    skill4: [
      "X - NID DE VIPÈRES",
      "ÉQUIPEZ-vous d'un vaporisateur chimique. TIREZ pour vaporiser un nuage chimique tout autour de Viper, créant un large nuage qui réduit la portée de la vision et les PV max des joueurs qui se trouvent dedans.",
    ],
  },
  {
    id: "cypher",
    skill1: [
      "A - CYBERCAGE",
      "Lancez INSTANTANÉMENT la cybercage devant Cypher. ACTIVEZ pour créer une zone qui bloque la vision et qui ralentit les ennemis qui la traversent.",
    ],
    skill2: [
      "E - CAMÉRA ESPIONNE",
      "ÉQUIPEZ-vous d'une caméra espionne. TIREZ pour placer la caméra espionne à l'endroit ciblé. RÉUTILISEZ cette compétence pour prendre le contrôle de la caméra. Quand vous contrôlez la caméra, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché.",
    ],
    skill3: [
      "C - FIL DE DÉTENTE",
      "ÉQUIPEZ-vous d'un fil de détente. TIREZ pour placer un fil de détente dissimulé et destructible, créant une ligne qui va du point de placement au mur opposé. Les joueurs ennemis qui franchissent le fil de détente seront attachés, révélés et désorientés après un court instant s'ils ne détruisent pas le dispositif dans les temps. Le fil peut être ramassé pour être REDÉPLOYÉ.",
    ],
    skill4: [
      "X - VOL NEURAL",
      "Utilisez cette compétence INSTANTANÉMENT sur un cadavre ennemi pour révéler la position de tous les joueurs ennemis en vie.",
    ],
  },
  {
    id: "reyna",
    skill1: [
      "A - DÉVORATION",
      "Les ennemis tués par Reyna laissent des orbes d'âme qui durent 3 sec. Vous consommez INSTANTANÉMENT un orbe d'âme proche pour rapidement regagner des PV pendant un court instant. Au-delà de 100 PV, les PV ainsi gagnés sont perdus progressivement. Si IMPÉRATRICE est active, cette compétence se lancera automatiquement et ne consommera pas d'orbe.",
    ],
    skill2: [
      "E - REBUFFADE",
      "Vous consommez INSTANTANÉMENT un orbe d'âme proche et devenez intangible pendant un court instant. Si IMPÉRATRICE est active, vous devenez également invisible.",
    ],
    skill3: [
      "C -  ŒILLADE",
      "ÉQUIPEZ-vous d'un œil éthéré destructible. ACTIVEZ pour lancer l'œil vers l'avant sur une courte distance. L'œil rend myopes tous les ennemis qui le regardent.",
    ],
    skill4: [
      "X - IMPÉRATRICE",
      "Entrez INSTANTANÉMENT en furie, ce qui augmente considérablement vos vitesses de tir, de changement d'arme et de rechargement. Réussir une élimination réinitialise la durée.",
    ],
  },
  {
    id: "killjoy",
    skill1: [
      "A - BOT-ALARME",
      "ÉQUIPEZ-vous d'un robot d'alarme camouflé. TIREZ pour déployer un robot qui traque les ennemis à sa portée. Quand il atteint sa cible, le robot explose, infligeant l'altération d'état Vulnérable. MAINTENEZ LA TOUCHE D'ÉQUIPEMENT pour rappeler un robot déployé.",
    ],
    skill2: [
      "E - TOURELLE",
      "ÉQUIPEZ-vous d'une tourelle. TIREZ pour déployer une tourelle qui tire sur les ennemis dans un cône de 180 degrés. MAINTENEZ LA TOUCHE D'ÉQUIPEMENT pour rappeler la tourelle déployée.",
    ],
    skill3: [
      "C - ESSAIM DE NANITES",
      "ÉQUIPEZ-vous d'une grenade à essaim de nanites. TIREZ pour lancer la grenade. À l'atterrissage, la grenade se camoufle. ACTIVEZ la grenade pour déployer un essaim de nanites.",
    ],
    skill4: [
      "X - CONFINEMENT",
      "ÉQUIPEZ-vous d'un dispositif de confinement. TIREZ pour déployer le dispositif. Après un long délai d'activation, le dispositif retient tous les ennemis pris dans sa zone d'effet. Le dispositif peut être détruit par les ennemis.",
    ],
  },
  {
    id: "skye",
    skill1: [
      "A - ÉCLAIREUR",
      "ÉQUIPEZ-vous d'une breloque Tigre de Tasmanie. TIREZ pour lancer et prendre le contrôle du prédateur. Lorsque vous le contrôlez, TIREZ pour bondir en avant, ce qui provoque une explosion qui désoriente et blesse les ennemis directement touchés.",
    ],
    skill2: [
      "E - GUIDE ÉCLATANT",
      "ÉQUIPEZ-vous d'une breloque Faucon. TIREZ pour lancer l'oiseau devant vous. MAINTENEZ LE TIR pour guider le faucon dans la direction de votre réticule. RÉUTILISEZ la compétence pendant que le faucon est dans les airs pour le transformer en lumière qui envoie une confirmation d'impact si un ennemi était à portée et en ligne de mire.",
    ],
    skill3: [
      "C - REVITALISATION",
      "ÉQUIPEZ-vous d'une breloque de soin. MAINTENEZ LE TIR pour effectuer une canalisation qui soigne les alliés à portée et dans la ligne de mire. Peut être réutilisé jusqu'à épuisement de la capacité de soin. Skye ne peut pas se soigner.",
    ],
    skill4: [
      "X - TRAQUEURS",
      "ÉQUIPEZ-vous d'une breloque Traqueurs. TIREZ pour lancer trois traqueurs qui pourchasseront les trois ennemis les plus proches. Si un traqueur atteint sa cible, il réduit le champ de vision de celle-ci.",
    ],
  },
  {
    id: "yoru",
    skill1: [
      "A - ANGLE MORT",
      "ÉQUIPEZ-vous d'un fragment dimensionnel instable arraché à la réalité. TIREZ pour lancer le fragment, qui provoquera un éclat aveuglant peu après avoir touché une surface dure.",
    ],
    skill2: [
      "E - VISITE SURPRISE",
      "ÉQUIPEZ-vous d'une balise dimensionnelle. TIREZ pour envoyer la balise vers l'avant. Utilisez le TIR SECONDAIRE pour poser une balise stationnaire devant vous. ACTIVEZ la balise pour vous y téléporter. UTILISEZ la balise pour feindre la téléportation.",
    ],
    skill3: [
      "C - FEINTE",
      "ÉQUIPEZ-vous d'un écho qui se transforme en double de Yoru une fois activé. TIREZ pour activer instantanément le double et l'envoyer vers l'avant. Utilisez le TIR SECONDAIRE pour poser un écho inactif devant vous. UTILISEZ un écho inactif pour le transformer en double et l'envoyer vers l'avant. Le double explose en émettant une lumière aveuglante quand les ennemis le détruisent.",
    ],
    skill4: [
      "X - TRANSFERT DIMENSIONNEL",
      "ÉQUIPEZ-vous d'un masque qui permet de voir entre les dimensions. TIREZ pour passer dans la dimension de Yoru. Les ennemis hors de la zone ne peuvent ni vous voir ni vous affecter.",
    ],
  },
  {
    id: "astra",
    skill1: [
      "A - IMPULSION NOVA",
      "Placez des étoiles sous sa forme astrale (X) ACTIVEZ une étoile pour faire exploser une Impulsion Nova. L'Impulsion Nova se charge brièvement avant de détonner, désorientant tous les joueurs dans son rayon d'effet.",
    ],
    skill2: [
      "E - NÉBULEUSE",
      "Placez des étoiles sous sa forme astrale (X) ACTIVEZ une étoile pour la transformer en Nébuleuse (fumée). Utilisez (F) sur une étoile pour la dissiper, ce qui vous permettra de la replacer à un autre endroit après un délai. Dissipation forme brièvement une fausse nébuleuse à l'emplacement de l'étoile avant de la rappeler.",
    ],
    skill3: [
      "C - PUITS DE GRAVITÉ",
      "Placez des étoiles sous sa forme astrale (X) ACTIVEZ une étoile pour former un Puits de gravité. Les joueurs dans la zone sont attirés vers le centre avant qu'il n'explose, ce qui applique l'altération d'état Fragile à tous les joueurs.",
    ],
    skill4: [
      "X - FORME ASTRALE / DIVISION COSMIQUE",
      "ACTIVEZ (X) pour passer en forme astrale, ce qui permet de placer des étoiles avec votre TIR PRINCIPAL. Les étoiles peuvent être activées plus tard pour être transformées en Impulsion Nova, en Nébuleuse ou en Puits de gravité. Lorsque Division cosmique est chargée, utilisez le TIR SECONDAIRE en forme astrale pour ajuster votre visée, puis le TIR PRINCIPAL pour choisir deux emplacements. Une Division cosmique infinie reliera alors les deux emplacements sélectionnés. Division cosmique bloque les balles et étouffe fortement les sons.",
    ],
  },
  {
    id: "kayo",
    skill1: [
      "A - MÉMOIRE/FLASH",
      "ÉQUIPEZ-vous d'une grenade aveuglante. TIREZ pour la lancer. La grenade explose après un court instant et aveugle tous ceux qui voient l'explosion.",
    ],
    skill2: [
      "E - POINT/ZÉRO",
      "ÉQUIPEZ-vous d'une lame neutralisante. TIREZ pour la lancer. La lame se colle à la première surface touchée. Après un délai, elle neutralise tous ceux dans le rayon de l'explosion.",
    ],
    skill3: [
      "C - FRAG/MENT",
      "ÉQUIPEZ-vous d'un fragment explosif. TIREZ pour le lancer. Le fragment se colle au sol et explose à plusieurs reprises, infligeant des dégâts quasi mortels au centre de chaque explosion.",
    ],
    skill4: [
      "X - CMD/NULL",
      "Entrez INSTANTANÉMENT en surcharge. KAY/O est renforcé par de l'énergie radianite polarisée et il émet de grandes vagues d'énergie. Les ennemis touchés par ces vagues sont neutralisés pendant un court instant.",
    ],
  },
  {
    id: "chamber",
    skill1: [
      "A - CHASSEUR DE TÊTES",
      "ACTIVEZ pour équiper un gros calibre. Faites un TIR SECONDAIRE avec le pistolet équipé pour utiliser le viseur.",
    ],
    skill2: [
      "E - RENDEZ-VOUS",
      "PLACEZ deux balises de téléportation. Quand vous vous trouvez sur le sol à portée d'une balise, RÉACTIVEZ pour vous téléporter rapidement vers l'autre balise. Les balises peuvent être ramassées pour être REDÉPLOYÉES.",
    ],
    skill3: [
      "C - MARQUE DÉPOSÉE",
      "POSEZ un piège qui détecte les ennemis. Quand un ennemi devient visible à portée, le piège déclenche un compte à rebours avant d'ébranler le terrain autour de lui, créant un champ persistant qui ralentit les joueurs qui s'y trouvent.",
    ],
    skill4: [
      "X - TOUR DE FORCE",
      "ACTIVEZ pour matérialiser un puissant fusil de sniper personnalisé qui tue l'ennemi en un coup. Tuer un ennemi crée un champ persistant qui ralentit les joueurs qui s'y trouvent.",
    ],
  },
  {
    id: "neon",
    skill1: [
      "A - ÉCLAIR RELAIS",
      "Lancez INSTANTANÉMENT un éclair d'énergie qui rebondit une fois. Chaque fois qu'il rencontre une surface, l'éclair électrifie le sol en dessous avec un coup de jus.",
    ],
    skill2: [
      "E - VITESSE SUPÉRIEURE",
      "Chargez INSTANTANÉMENT le pouvoir de Neon pour décupler sa vitesse. À la fin du chargement, utilisez TIR SECONDAIRE pour déclencher une glissade électrique. Vous regagnez une charge de glissade toutes les deux éliminations.",
    ],
    skill3: [
      "C - VOIE RAPIDE",
      "TIREZ deux lignes d'énergie dans le sol devant vous qui parcourent une courte distance ou jusqu'à frapper une surface. Elles s'élèvent alors en murs d'électricité statique qui bloquent la vision et infligent des dégâts aux ennemis qui les traversent.",
    ],
    skill4: [
      "X - ULTRA-VITESSE",
      "Libérez toute la puissance et la vitesse de Neon pendant un court instant. TIREZ pour canaliser son pouvoir en un rayon électrique mortel à grande précision. Chaque élimination réinitialise sa durée.",
    ],
  },
  {
    id: "fade",
    skill1: [
      "A - CAPTURE",
      "Équipez-vous d'un orbe d'encre cauchemardesque. TIREZ pour lancer l'orbe. Celui-ci tombe au sol après un temps défini, ce qui fait exploser l'encre et crée une zone. Les ennemis pris dans cette zone ne peuvent pas en sortir par des moyens normaux. RÉUTILISEZ la compétence pour faire tomber le projectile plus tôt.",
    ],
    skill2: [
      "E - HANTEUR",
      "Équipez-vous d'une entité cauchemardesque. TIREZ pour lancer l'orbe. Celui-ci tombe au sol après un temps défini, et se transforme alors en entité cauchemardesque qui révèle les ennemis dans son champ de vision. Les ennemis peuvent détruire cette entité. RÉUTILISEZ la compétence pour faire tomber le projectile plus tôt.",
    ],
    skill3: [
      "C - RÔDEUR",
      "ÉQUIPEZ-vous d'un Rôdeur. TIREZ pour envoyer le Rôdeur sur une ligne droite. Le Rôdeur se verrouille sur les ennemis ou les pistes qui entrent dans son cône de vision frontal et les suit ; s'il atteint un ennemi, il le rend myope. MAINTENEZ la touche de TIR pour guider le Rôdeur dans la direction de votre réticule.",
    ],
    skill4: [
      "X - NUIT TOMBANTE",
      "ÉQUIPEZ-vous du pouvoir de la peur. TIREZ pour envoyer une vague d'énergie cauchemardesque qui peut traverser les murs. L'énergie crée une piste vers l'ennemi, en plus de l'assourdir et de désagréger ses PV.",
    ],
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
  skill1.innerHTML = agent.skill1;
  skill2.innerHTML = agent.skill2;
  skill3.innerHTML = agent.skill3;
  skill4.innerHTML = agent.skill4;
  videoSkillX.src = "media/videos/" + agentId + "/skill1.mp4";

  let pouvoir = arraySkills.find((arraySkills) => arraySkills.id === agentId);

  skillTitle.textContent = pouvoir.skill1[0];
  skillContent.textContent = pouvoir.skill1[1];
};

skillVideo.forEach((video) => {
  video.addEventListener("click", () => {
    videoId = video.id;
    videoSkillX.src = "media/videos/" + agentId + "/" + videoId + ".mp4";

    let pouvoir = arraySkills.find((arraySkills) => arraySkills.id === agentId);

    if (videoId === "skill1") {
      skillTitle.textContent = pouvoir.skill1[0];
      skillContent.textContent = pouvoir.skill1[1];
    } else if (videoId === "skill2") {
      skillTitle.textContent = pouvoir.skill2[0];
      skillContent.textContent = pouvoir.skill2[1];
    } else if (videoId === "skill3") {
      skillTitle.textContent = pouvoir.skill3[0];
      skillContent.textContent = pouvoir.skill3[1];
    } else if (videoId === "skill4") {
      skillTitle.textContent = pouvoir.skill4[0];
      skillContent.textContent = pouvoir.skill4[1];
    }
  });
});

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

const removeActiveListClasses = () => {
  listSkills.forEach((listSkill) => {
    listSkill.classList.remove("active_skill");
  });
};

listSkills.forEach((listSkill) => {
  listSkill.addEventListener("click", () => {
    removeActiveListClasses();
    listSkill.classList.add("active_skill");
  });
});

const burgerBtn = document.getElementById("burger_icon");

burgerBtn.addEventListener("click", () => {
  listMobile.style.transform = "translateX(0px)";
});

cross_icon.addEventListener("click", () => {
  listMobile.style.transform = "translateX(100%)";
});
