const items =[
  {
      "id": 1,
      "name": "PlayStation 5",
      "price": 49999,
      "description": "La console de nouvelle génération de Sony qui redéfinit l'expérience de jeu. Avec son SSD ultra-rapide, elle garantit des temps de chargement quasi inexistants et des transitions fluides entre les jeux. Les graphismes époustouflants, grâce à la technologie ray tracing et la résolution 4K, offrent une immersion visuelle sans précédent. Le processeur puissant et le support de l'audio 3D créent un environnement de jeu réaliste et captivant.",
      "quantity": 25,
      "category": "console,PS5",
      "matricule": "978-0-123-45678-9",
      "image": "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 2,
      "name": "Xbox Series X",
      "price": 49999,
      "description": "La console de nouvelle génération de Microsoft avec des performances incroyables. SSD rapide pour des temps de chargement courts, graphismes 4K et ray tracing pour une qualité visuelle inégalée. Profitez de l'audio spatial pour une immersion totale dans vos jeux.",
      "quantity": 20,
      "category": "console,xboxseries",
      "matricule": "978-0-234-56789-0",
      "image": "https://gmedia.microsoft.com/is/image/XboxSeriesX/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 3,
      "name": "Nintendo Switch",
      "price": 29999,
      "description": "Console hybride de Nintendo permettant de jouer à la maison ou en déplacement. Profitez d'une bibliothèque de jeux exceptionnelle et de nombreuses fonctionnalités innovantes. Parfait pour les jeux en solo et en multijoueur.",
      "quantity": 30,
      "category": "console,nintendo",
      "matricule": "978-0-345-67890-1",
      "image": "https://gmedia.nintendo.com/is/image/Switch/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 4,
      "name": "PC Gamer Alienware",
      "price": 149999,
      "description": "PC de jeu haut de gamme avec des performances exceptionnelles. Équipé des dernières technologies en matière de processeurs et de cartes graphiques, il offre une expérience de jeu fluide et immersive.",
      "quantity": 10,
      "category": "PC",
      "matricule": "978-0-456-78901-2",
      "image": "https://gmedia.alienware.com/is/image/Alienware/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 5,
      "name": "Carte Cadeau PlayStation",
      "price": 5000,
      "description": "Carte cadeau PlayStation de 50€. Parfait pour offrir ou se faire plaisir avec des jeux, des extensions et des abonnements PlayStation.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-0-567-89012-3",
      "image": "https://gmedia.playstation.com/is/image/PSNCard/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 6,
      "name": "Manette DualSense PS5",
      "price": 6999,
      "description": "Manette sans fil DualSense pour PlayStation 5 avec retour haptique et gâchettes adaptatives. Offrant une expérience de jeu immersive et un confort inégalé.",
      "quantity": 50,
      "category": "accessories,PS5",
      "matricule": "978-0-678-90123-4",
      "image": "https://gmedia.playstation.com/is/image/DualSense/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 7,
      "name": "PlayStation 4",
      "price": 29999,
      "description": "Console de jeu populaire de Sony avec une vaste bibliothèque de jeux. Idéale pour les joueurs de tous âges avec des graphismes de qualité et des fonctionnalités en ligne.",
      "quantity": 40,
      "category": "console,PS4",
      "matricule": "978-0-789-01234-5",
      "image": "https://gmedia.playstation.com/is/image/PS4/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 8,
      "name": "Carte Cadeau Xbox",
      "price": 5000,
      "description": "Carte cadeau Xbox de 50€. Utilisable pour acheter des jeux, des abonnements et des contenus téléchargeables sur la boutique Xbox.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-0-890-12345-6",
      "image": "https://gmedia.xbox.com/is/image/XboxCard/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 9,
      "name": "Manette Xbox Series X",
      "price": 6999,
      "description": "Manette sans fil Xbox Series X avec design ergonomique et boutons personnalisables. Offrant une expérience de jeu précise et confortable.",
      "quantity": 50,
      "category": "accessories,xboxseries",
      "matricule": "978-0-901-23456-7",
      "image": "https://gmedia.xbox.com/is/image/XboxController/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 10,
      "name": "PlayStation 3",
      "price": 19999,
      "description": "Console de jeu classique de Sony avec une vaste bibliothèque de jeux. Parfait pour les nostalgiques et les amateurs de jeux rétro.",
      "quantity": 15,
      "category": "console,PS3",
      "matricule": "978-1-012-34567-8",
      "image": "https://gmedia.playstation.com/is/image/PS3/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 11,
      "name": "Carte Cadeau Nintendo",
      "price": 5000,
      "description": "Carte cadeau Nintendo de 50€. Utilisable pour acheter des jeux et des contenus sur la boutique Nintendo eShop.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-1-123-45678-9",
      "image": "https://gmedia.nintendo.com/is/image/NintendoCard/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 12,
      "name": "Manette Pro Nintendo Switch",
      "price": 6999,
      "description": "Manette sans fil Pro pour Nintendo Switch offrant une prise en main confortable et des performances optimales pour les jeux compétitifs.",
      "quantity": 50,
      "category": "accessories,nintendo",
      "matricule": "978-1-234-56789-0",
      "image": "https://gmedia.nintendo.com/is/image/NintendoProController/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 13,
      "name": "Carte Graphique NVIDIA RTX 3080",
      "price": 69999,
      "description": "Carte graphique de haute performance pour PC de jeu. Offrant des graphismes 4K et le ray tracing pour une expérience de jeu immersive.",
      "quantity": 20,
      "category": "PC",
      "matricule": "978-1-345-67890-1",
      "image": "https://gmedia.nvidia.com/is/image/RTX3080/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 14,
      "name": "PlayStation VR",
      "price": 29999,
      "description": "Casque de réalité virtuelle pour PlayStation offrant une immersion totale dans le monde des jeux VR avec des graphismes et un son de haute qualité.",
      "quantity": 30,
      "category": "accessories,PS4",
      "matricule": "978-1-456-78901-2",
      "image": "https://gmedia.playstation.com/is/image/PSVR/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 15,
      "name": "Xbox Game Pass Ultimate",
      "price": 1499,
      "description": "Abonnement mensuel Xbox Game Pass Ultimate donnant accès à une vaste bibliothèque de jeux sur Xbox et PC, ainsi que des avantages Xbox Live Gold.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-1-567-89012-3",
      "image": "https://gmedia.xbox.com/is/image/GamePass/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 16,
      "name": "Volant de course Logitech G29",
      "price": 29999,
      "description": "Volant de course avec pédales pour une expérience de simulation de course réaliste sur PlayStation et PC.",
      "quantity": 10,
      "category": "accessories,PS4,PS5",
      "matricule": "978-1-678-90123-4",
      "image": "https://gmedia.logitech.com/is/image/G29/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 17,
      "name": "Souris Gaming Razer DeathAdder",
      "price": 4999,
      "description": "Souris de jeu ergonomique avec capteur optique de haute précision et boutons programmables, idéale pour les joueurs compétitifs.",
      "quantity": 50,
      "category": "accessories,PC",
      "matricule": "978-1-789-01234-5",
      "image": "https://gmedia.razer.com/is/image/DeathAdder/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 18,
      "name": "PlayStation 5 Digital Edition",
      "price": 39999,
      "description": "Version numérique de la PlayStation 5 sans lecteur de disque, offrant les mêmes performances et fonctionnalités que la version standard.",
      "quantity": 25,
      "category": "console,PS5",
      "matricule": "978-1-890-12345-6",
      "image": "https://gmedia.playstation.com/is/image/PS5Digital/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 19,
      "name": "Xbox Series S",
      "price": 29999,
      "description": "Console de nouvelle génération de Microsoft à un prix abordable, offrant des performances de jeu en 1440p avec des temps de chargement rapides.",
      "quantity": 20,
      "category": "console,xboxseries",
      "matricule": "978-1-901-23456-7",
      "image": "https://gmedia.microsoft.com/is/image/SeriesS/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 20,
      "name": "Nintendo Switch Lite",
      "price": 19999,
      "description": "Version portable de la Nintendo Switch, parfaite pour jouer en déplacement. Compacte, légère et avec une bibliothèque de jeux impressionnante.",
      "quantity": 30,
      "category": "console,nintendo",
      "matricule": "978-2-012-34567-8",
      "image": "https://gmedia.nintendo.com/is/image/SwitchLite/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 21,
      "name": "Carte Mère ASUS ROG Strix",
      "price": 24999,
      "description": "Carte mère de haute performance pour PC de jeu, avec des fonctionnalités avancées pour l'overclocking et une connectivité étendue.",
      "quantity": 15,
      "category": "PC",
      "matricule": "978-2-123-45678-9",
      "image": "https://gmedia.asus.com/is/image/ROGStrix/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 22,
      "name": "PlayStation Plus 12 Mois",
      "price": 5999,
      "description": "Abonnement annuel à PlayStation Plus offrant des jeux gratuits chaque mois, des réductions exclusives et l'accès au multijoueur en ligne.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-2-234-56789-0",
      "image": "https://gmedia.playstation.com/is/image/PSPlus12Months/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 23,
      "name": "Écouteurs Gaming HyperX Cloud II",
      "price": 9999,
      "description": "Casque de jeu avec son surround 7.1, microphone détachable et confort exceptionnel, idéal pour les longues sessions de jeu.",
      "quantity": 50,
      "category": "accessories,PS5,PC",
      "matricule": "978-2-345-67890-1",
      "image": "https://gmedia.hyperx.com/is/image/CloudII/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 24,
      "name": "PlayStation Camera",
      "price": 5999,
      "description": "Caméra HD pour PlayStation offrant une capture vidéo de haute qualité pour les jeux VR et le streaming.",
      "quantity": 30,
      "category": "accessories,PS4",
      "matricule": "978-2-456-78901-2",
      "image": "https://gmedia.playstation.com/is/image/PSCamera/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 25,
      "name": "Xbox Elite Series 2 Controller",
      "price": 17999,
      "description": "Manette haut de gamme pour Xbox avec des options de personnalisation avancées, des composants interchangeables et une ergonomie exceptionnelle.",
      "quantity": 20,
      "category": "accessories,xboxseries",
      "matricule": "978-2-567-89012-3",
      "image": "https://gmedia.xbox.com/is/image/EliteSeries2/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 26,
      "name": "Logitech G502 HERO",
      "price": 6999,
      "description": "Souris de jeu avec capteur HERO 25K, 11 boutons programmables et poids ajustable, offrant une précision et un confort inégalés.",
      "quantity": 50,
      "category": "accessories,PC",
      "matricule": "978-2-678-90123-4",
      "image": "https://gmedia.logitech.com/is/image/G502Hero/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 27,
      "name": "PlayStation 5 Media Remote",
      "price": 2999,
      "description": "Télécommande multimédia pour PlayStation 5 permettant de contrôler facilement les médias et les applications de streaming.",
      "quantity": 30,
      "category": "accessories,PS5",
      "matricule": "978-2-789-01234-5",
      "image": "https://gmedia.playstation.com/is/image/PS5MediaRemote/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 28,
      "name": "Xbox Game Pass PC",
      "price": 999,
      "description": "Abonnement mensuel Xbox Game Pass pour PC donnant accès à une vaste bibliothèque de jeux pour PC.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-2-890-12345-6",
      "image": "https://gmedia.xbox.com/is/image/GamePassPC/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 29,
      "name": "Manette PS4 DualShock 4",
      "price": 5999,
      "description": "Manette sans fil DualShock 4 pour PlayStation 4 offrant une précision et un confort exceptionnels.",
      "quantity": 50,
      "category": "accessories,PS4",
      "matricule": "978-3-012-34567-8",
      "image": "https://gmedia.playstation.com/is/image/DualShock4/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 30,
      "name": "PlayStation 5 Headset",
      "price": 9999,
      "description": "Casque sans fil pour PlayStation 5 offrant un son 3D immersif et un confort exceptionnel pour les longues sessions de jeu.",
      "quantity": 30,
      "category": "accessories,PS5",
      "matricule": "978-3-123-45678-9",
      "image": "https://gmedia.playstation.com/is/image/PS5Headset/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 31,
      "name": "Xbox Live Gold 12 Mois",
      "price": 5999,
      "description": "Abonnement annuel Xbox Live Gold offrant des jeux gratuits chaque mois, des réductions exclusives et l'accès au multijoueur en ligne.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-3-234-56789-0",
      "image": "https://gmedia.xbox.com/is/image/LiveGold12Months/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 32,
      "name": "Carte Capture Elgato HD60 S+",
      "price": 17999,
      "description": "Carte de capture pour enregistrer et diffuser en direct des séquences de jeu en haute résolution.",
      "quantity": 20,
      "category": "accessories,PS4,PS5,nintendo",
      "matricule": "978-3-345-67890-1",
      "image": "https://gmedia.elgato.com/is/image/HD60S/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 33,
      "name": "Manette Joy-Con Nintendo Switch",
      "price": 7999,
      "description": "Paire de manettes Joy-Con pour Nintendo Switch offrant une polyvalence et un confort de jeu exceptionnels.",
      "quantity": 50,
      "category": "accessories,nintendo",
      "matricule": "978-3-456-78901-2",
      "image": "https://gmedia.nintendo.com/is/image/JoyCon/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 34,
      "name": "Clavier Gaming Corsair K95",
      "price": 19999,
      "description": "Clavier mécanique de jeu avec rétroéclairage RGB et touches programmables pour une personnalisation optimale.",
      "quantity": 30,
      "category": "accessories,PC",
      "matricule": "978-3-567-89012-3",
      "image": "https://gmedia.corsair.com/is/image/K95RGB/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 35,
      "name": "Razer Naga Trinity",
      "price": 8999,
      "description": "Souris de jeu modulaire avec des panneaux latéraux interchangeables, idéale pour les MMORPG et les MOBA.",
      "quantity": 50,
      "category": "accessories,PC",
      "matricule": "978-3-678-90123-4",
      "image": "https://gmedia.razer.com/is/image/NagaTrinity/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 36,
      "name": "PlayStation 5 Charging Station",
      "price": 2999,
      "description": "Station de recharge pour manettes DualSense de PlayStation 5, permettant de recharger jusqu'à deux manettes simultanément.",
      "quantity": 30,
      "category": "accessories,PS5",
      "matricule": "978-3-789-01234-5",
      "image": "https://gmedia.playstation.com/is/image/PS5ChargingStation/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 37,
      "name": "Xbox One",
      "price": 24999,
      "description": "Console de jeu de Microsoft offrant une vaste bibliothèque de jeux et des fonctionnalités multimédias avancées.",
      "quantity": 20,
      "category": "console,xboxseries",
      "matricule": "978-3-890-12345-6",
      "image": "https://gmedia.microsoft.com/is/image/XboxOne/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 38,
      "name": "Nintendo Switch Pro Controller",
      "price": 6999,
      "description": "Manette sans fil Pro pour Nintendo Switch offrant une prise en main confortable et des performances optimales pour les jeux compétitifs.",
      "quantity": 50,
      "category": "accessories,nintendo",
      "matricule": "978-4-012-34567-8",
      "image": "https://gmedia.nintendo.com/is/image/SwitchProController/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 39,
      "name": "Xbox Series X Expansion Card",
      "price": 21999,
      "description": "Carte d'extension de stockage pour Xbox Series X offrant une capacité supplémentaire de 1 To pour les jeux et les applications.",
      "quantity": 20,
      "category": "accessories,xboxseries",
      "matricule": "978-4-123-45678-9",
      "image": "https://gmedia.xbox.com/is/image/ExpansionCard/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
      "id": 40,
      "name": "Nintendo eShop Gift Card",
      "price": 5000,
      "description": "Carte cadeau de 50€ pour le Nintendo eShop, permettant d'acheter des jeux et des contenus téléchargeables.",
      "quantity": 100,
      "category": "gift cards",
      "matricule": "978-4-234-56789-0",
      "image": "https://gmedia.nintendo.com/is/image/eShopCard/product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
    "id": 41,
    "name": "Elden Ring",
    "price": 6999,
    "description": "Explorez un monde fantastique et sombre créé en collaboration par FromSoftware et George R.R. Martin. Combattez des ennemis redoutables et découvrez des mystères épiques.",
    "quantity": 30,
    "category": "jeu,PS5",
    "matricule": "978-0-123-45730-4",
    "image": "https://example.com/eldenring.jpg"
  },
  { 
      "id": 42,
      "name": "Super Smash Bros. Ultimate",
      "price": 5499,
      "description": "Affrontez vos personnages préférés de Nintendo dans des combats épiques. Un jeu de combat ultime pour la Nintendo Switch.",
      "quantity": 35,
      "category": "jeu,nintendo",
      "matricule": "978-0-123-45731-1",
      "image": "https://example.com/smashbrosultimate.jpg"
  },
  {
      "id": 43,
      "name": "Ratchet & Clank: Rift Apart",
      "price": 5999,
      "description": "Voyagez à travers les dimensions avec Ratchet et Clank dans cette aventure palpitante. Découvrez des mondes étonnants et utilisez des armes incroyables.",
      "quantity": 25,
      "category": "jeu,PS5",
      "matricule": "978-0-123-45732-8",
      "image": "https://example.com/ratchetclank.jpg"
  },
  {
      "id": 44,
      "name": "Far Cry 6",
      "price": 6499,
      "description": "Plongez dans Yara, une île tropicale en proie à un régime oppressif. Rejoignez la révolution et libérez le pays avec vos propres méthodes.",
      "quantity": 20,
      "category": "jeu,PS4",
      "matricule": "978-0-123-45733-5",
      "image": "https://example.com/farcry6.jpg"
  },
  {
      "id": 45,
      "name": "The Witcher 3: Wild Hunt",
      "price": 4999,
      "description": "Explorez un monde ouvert immense rempli de monstres à chasser, de quêtes épiques à entreprendre et de décisions morales à prendre. Un chef-d'œuvre du RPG par CD Projekt Red.",
      "quantity": 40,
      "category": "jeu,PS4",
      "matricule": "978-0-123-45734-2",
      "image": "https://example.com/witcher3.jpg"
  },
  {
      "id": 46,
      "name": "Destiny 2",
      "price": 3999,
      "description": "Un jeu de tir en ligne massivement multijoueur où vous pouvez explorer les mystères du système solaire, maîtriser des pouvoirs élémentaires et affronter des ennemis redoutables.",
      "quantity": 50,
      "category": "jeu,PS5",
      "matricule": "978-0-123-45735-9",
      "image": "https://example.com/destiny2.jpg"
  },
  {
      "id": 47,
      "name": "Mario Kart 8 Deluxe",
      "price": 5499,
      "description": "Participez à des courses folles avec Mario et ses amis dans ce jeu de course incontournable pour la Nintendo Switch. Utilisez des power-ups pour prendre la tête.",
      "quantity": 30,
      "category": "jeu,nintendo",
      "matricule": "978-0-123-45736-6",
      "image": "https://example.com/mariokart8.jpg"
  },
  {
      "id": 48,
      "name": "Death Stranding",
      "price": 5999,
      "description": "Voyagez à travers un paysage apocalyptique en tant que Sam Bridges. Livrez des cargaisons précieuses, reconnectez des cités isolées et affrontez des créatures surnaturelles.",
      "quantity": 25,
      "category": "jeu,PS4",
      "matricule": "978-0-123-45737-3",
      "image": "https://example.com/deathstranding.jpg"
  },
  {
      "id": 49,
      "name": "Star Wars Jedi: Fallen Order",
      "price": 5999,
      "description": "Incarnez Cal Kestis, un jeune Jedi qui a survécu à l'Ordre 66. Explorez des mondes éloignés, affrontez des Inquisiteurs et devenez un véritable Jedi.",
      "quantity": 35,
      "category": "jeu,PS4",
      "matricule": "978-0-123-45738-0",
      "image": "https://example.com/jedifallenorder.jpg"
  },
  {
      "id": 50,
      "name": "Persona 5 Strikers",
      "price": 5499,
      "description": "Rejoignez les Phantom Thieves et voyagez à travers le Japon pour découvrir la vérité cachée derrière une série d'incidents mystérieux.",
      "quantity": 40,
      "category": "jeu,PS4",
      "matricule": "978-0-123-45739-7",
      "image": "https://example.com/persona5strikers.jpg"
  },
  {
    "id": 51,
    "name": "Marvel's Spider-Man",
    "price": 4999,
    "description": "Incarnez Spider-Man dans une aventure palpitante à New York. Utilisez vos pouvoirs pour combattre le crime et sauver la ville.",
    "quantity": 30,
    "category": "jeu,PS4",
    "matricule": "978-0-123-45740-3",
    "image": "https://example.com/spidermanps4.jpg"
  },
  {
    "id": 52,
    "name": "Demon's Souls",
    "price": 6999,
    "description": "Découvrez la réimagination du classique par FromSoftware. Affrontez des défis impitoyables et explorez un monde sombre et mystérieux.",
    "quantity": 25,
    "category": "jeu,PS5",
    "matricule": "978-0-123-45741-0",
    "image": "https://example.com/demonssouls.jpg"
  },
  {
    "id": 53,
    "name": "Mortal Kombat 11",
    "price": 5499,
    "description": "Affrontez vos adversaires dans des combats brutaux et sanglants. Utilisez des fatalités et des coups spéciaux pour vaincre vos ennemis.",
    "quantity": 35,
    "category": "jeu,PS4",
    "matricule": "978-0-123-45742-7",
    "image": "https://example.com/mortalkombat11.jpg"
  },
  {
    "id": 54,
    "name": "The Elder Scrolls V: Skyrim",
    "price": 4999,
    "description": "Plongez dans un monde ouvert rempli de dragons, de quêtes épiques et de mystères à découvrir. Un RPG légendaire de Bethesda Game Studios.",
    "quantity": 40,
    "category": "jeu,PS4",
    "matricule": "978-0-123-45743-4",
    "image": "https://example.com/skyrim.jpg"
  },
  {
    "id": 55,
    "name": "Splatoon 2",
    "price": 5499,
    "description": "Participez à des combats de tir colorés en équipe dans ce jeu de tir à la troisième personne pour la Nintendo Switch. Contrôlez des territoires avec de l'encre.",
    "quantity": 30,
    "category": "jeu,nintendo",
    "matricule": "978-0-123-45744-1",
    "image": "https://example.com/splatoon2.jpg"
  },
  {
    "id": 56,
    "name": "Watch Dogs: Legion",
    "price": 5999,
    "description": "Rejoignez la résistance à Londres et utilisez le hacking pour libérer la ville du contrôle des autorités. Recrutez des citoyens pour vos opérations.",
    "quantity": 25,
    "category": "jeu,PS5",
    "matricule": "978-0-123-45745-8",
    "image": "https://example.com/watchdogslegion.jpg"
  },
  {
    "id": 57,
    "name": "BioShock: The Collection",
    "price": 6499,
    "description": "Revivez les aventures de BioShock, BioShock 2 et BioShock Infinite dans une collection remasterisée. Explorez des mondes sous-marins fascinants et affrontez des défis uniques.",
    "quantity": 20,
    "category": "jeu,PS4",
    "matricule": "978-0-123-45746-5",
    "image": "https://example.com/bioshockcollection.jpg"
  },
  {
    "id": 58,
    "name": "Resident Evil Village",
    "price": 6999,
    "description": "Explorez un village mystérieux et terrifiant dans ce survival horror. Affrontez des créatures cauchemardesques et découvrez les secrets obscurs qui vous entourent.",
    "quantity": 20,
    "category": "jeu,PS5",
    "matricule": "978-0-123-45747-2",
    "image": "https://example.com/residentevilvillage.jpg"
  },
  {
    "id": 59,
    "name": "Sekiro: Shadows Die Twice",
    "price": 5999,
    "description": "Maîtrisez le chemin du samouraï dans ce jeu d'action impitoyable de FromSoftware. Affrontez des ennemis redoutables et découvrez des secrets mystiques.",
    "quantity": 25,
    "category": "jeu,PS4",
    "matricule": "978-0-123-45748-9",
    "image": "https://example.com/sekiro.jpg"
  },
  {
    "id": 60,
    "name": "Fortnite",
    "price": 3999,
    "description": "Un jeu de survie et de construction où vous pouvez combattre pour être le dernier survivant. Explorez, construisez et défendez votre position contre d'autres joueurs.",
    "quantity": 50,
    "category": "jeu,PC",
    "matricule": "978-0-123-45749-6",
    "image": "https://example.com/fortnite.jpg"
  }
]

module.exports = items