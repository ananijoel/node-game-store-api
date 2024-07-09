const items =[
    {
      "id": 1,
      "name": "PlayStation 5",
      "price": 49999,
      "description": "La console de jeu PlayStation 5 de Sony avec des performances de nouvelle génération et des graphismes époustouflants.",
      "quantity": 25,
      "category": "Console",
      "matricule": "978-0-123-45678-9",
      "image": "image1.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 2,
      "name": "Xbox Series X",
      "price": 49999,
      "description": "La console de jeu Xbox Series X de Microsoft, offrant des performances de nouvelle génération et des graphismes immersifs.",
      "quantity": 20,
      "category": "Console",
      "matricule": "978-0-123-45679-6",
      "image": "image2.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 3,
      "name": "Nintendo Switch",
      "price": 29999,
      "description": "La console de jeu portable et de salon Nintendo Switch, parfaite pour jouer où que vous soyez.",
      "quantity": 30,
      "category": "Console",
      "matricule": "978-0-123-45680-2",
      "image": "image3.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 4,
      "name": "The Legend of Zelda: Breath of the Wild",
      "price": 5999,
      "description": "Un jeu d'aventure en monde ouvert acclamé par la critique pour la Nintendo Switch.",
      "quantity": 15,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45681-9",
      "image": "image4.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 5,
      "name": "Spider-Man: Miles Morales",
      "price": 4999,
      "description": "Un jeu d'action-aventure pour PlayStation 5 mettant en vedette Miles Morales.",
      "quantity": 20,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45682-6",
      "image": "image5.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 6,
      "name": "Halo Infinite",
      "price": 5999,
      "description": "Un jeu de tir à la première personne pour Xbox Series X et PC, avec une campagne épique et un mode multijoueur.",
      "quantity": 18,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45683-3",
      "image": "image6.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 7,
      "name": "DualSense Wireless Controller",
      "price": 6999,
      "description": "La manette sans fil DualSense pour PlayStation 5 avec retour haptique et gâchettes adaptatives.",
      "quantity": 35,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45684-0",
      "image": "image7.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 8,
      "name": "Xbox Wireless Controller",
      "price": 6499,
      "description": "La manette sans fil Xbox avec une conception améliorée et une connectivité sans fil.",
      "quantity": 40,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45685-7",
      "image": "image8.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 9,
      "name": "Nintendo Switch Pro Controller",
      "price": 6999,
      "description": "La manette Pro pour Nintendo Switch avec une conception ergonomique et des commandes précises.",
      "quantity": 25,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45686-4",
      "image": "image9.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 10,
      "name": "Xbox Game Pass Ultimate",
      "price": 1499,
      "description": "Abonnement Xbox Game Pass Ultimate offrant un accès à des centaines de jeux pour console et PC.",
      "quantity": 100,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45687-1",
      "image": "image10.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 11,
      "name": "PlayStation Plus Membership",
      "price": 999,
      "description": "Abonnement PlayStation Plus offrant des jeux gratuits mensuels et un accès multijoueur en ligne.",
      "quantity": 150,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45688-8",
      "image": "image11.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 12,
      "name": "Fortnite V-Bucks Card",
      "price": 2500,
      "description": "Carte cadeau pour acheter des V-Bucks dans Fortnite, la monnaie virtuelle du jeu.",
      "quantity": 200,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45689-5",
      "image": "image12.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 13,
      "name": "The Last of Us Part II",
      "price": 4999,
      "description": "Un jeu d'action-aventure pour PlayStation 4 et PlayStation 5, salué pour son histoire et ses graphismes.",
      "quantity": 10,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45690-1",
      "image": "image13.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 14,
      "name": "Cyberpunk 2077",
      "price": 5999,
      "description": "Un jeu de rôle en monde ouvert pour PlayStation, Xbox et PC, se déroulant dans un futur dystopique.",
      "quantity": 12,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45691-8",
      "image": "image14.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
     

 "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 15,
      "name": "Animal Crossing: New Horizons",
      "price": 5999,
      "description": "Un jeu de simulation de vie pour Nintendo Switch où les joueurs créent et gèrent leur propre île.",
      "quantity": 25,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45692-5",
      "image": "image15.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 16,
      "name": "Mario Kart 8 Deluxe",
      "price": 5999,
      "description": "Un jeu de course amusant et compétitif pour Nintendo Switch, avec des personnages emblématiques de Mario.",
      "quantity": 20,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45693-2",
      "image": "image16.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 17,
      "name": "Assassin's Creed Valhalla",
      "price": 4999,
      "description": "Un jeu d'action-aventure en monde ouvert pour PlayStation, Xbox et PC, mettant en scène des Vikings.",
      "quantity": 15,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45694-9",
      "image": "image17.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 18,
      "name": "Microsoft Xbox Live Gold",
      "price": 999,
      "description": "Abonnement Xbox Live Gold offrant un accès multijoueur en ligne et des jeux gratuits mensuels.",
      "quantity": 150,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45695-6",
      "image": "image18.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 19,
      "name": "Ring Fit Adventure",
      "price": 7999,
      "description": "Un jeu d'aventure et de fitness pour Nintendo Switch utilisant des accessoires de fitness pour jouer.",
      "quantity": 30,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45696-3",
      "image": "image19.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 20,
      "name": "FIFA 23",
      "price": 5999,
      "description": "Un jeu de simulation de football pour PlayStation, Xbox et PC, avec des graphismes réalistes et un gameplay amélioré.",
      "quantity": 20,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45697-0",
      "image": "image20.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 21,
      "name": "Overwatch 2",
      "price": 5999,
      "description": "Un jeu de tir en équipe pour PlayStation, Xbox et PC, avec des héros uniques et des combats compétitifs.",
      "quantity": 10,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45698-7",
      "image": "image21.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 22,
      "name": "Sekiro: Shadows Die Twice",
      "price": 4999,
      "description": "Un jeu d'action-aventure pour PlayStation, Xbox et PC, avec un combat intense et une histoire immersive.",
      "quantity": 8,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45699-4",
      "image": "image22.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 23,
      "name": "Fall Guys: Ultimate Knockout",
      "price": 1999,
      "description": "Un jeu multijoueur amusant et chaotique pour PlayStation, Xbox et PC, où les joueurs s'affrontent dans des mini-jeux.",
      "quantity": 50,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45700-7",
      "image": "image23.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 24,
      "name": "Red Dead Redemption 2",
      "price": 4999,
      "description": "Un jeu d'action-aventure en monde ouvert pour PlayStation, Xbox et PC, se déroulant dans le Far West.",
      "quantity": 15,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45701-4",
      "image": "image24.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 25,
      "name": "Fortnite",
      "price": 0,
      "description": "Un jeu de bataille royale gratuit pour PlayStation, Xbox, Nintendo Switch et PC, avec des mises à jour régulières.",
      "quantity": 1000,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45702-1",
      "image": "image25.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 26,
      "name": "Nintendo eShop Gift Card",
      "price": 5000,
      "description": "Carte cadeau pour acheter des jeux et des contenus numériques sur le Nintendo eShop.",
      "quantity": 100,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45703-8",
      "image": "image26.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 27,
      "name": "PlayStation Network Gift Card",
      "price": 5000,
      "description": "Carte cadeau pour acheter des jeux et des contenus numériques sur le PlayStation Store.",
      "quantity": 100,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45704-5",
      "image": "image27.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 28,
      "name": "Xbox Gift Card",
      "price": 5000,
      "description": "Carte cadeau pour acheter des jeux et des contenus numériques sur le Microsoft Store.",
      "quantity": 100,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45705-2",
      "image": "image28.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id":

 29,
      "name": "Apex Legends",
      "price": 0,
      "description": "Un jeu de bataille royale gratuit pour PlayStation, Xbox, Nintendo Switch et PC, avec des personnages uniques.",
      "quantity": 1000,
      "category": "Jeu de Console",
      "matricule": "978-0-123-45706-9",
      "image": "image29.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 30,
      "name": "Logitech G Pro X Gaming Headset",
      "price": 12999,
      "description": "Un casque de jeu haut de gamme avec un son immersif et un microphone de qualité professionnelle.",
      "quantity": 10,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45707-6",
      "image": "image30.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 31,
      "name": "SteelSeries Arctis 7 Wireless Gaming Headset",
      "price": 14999,
      "description": "Un casque de jeu sans fil avec un son de haute qualité et une longue durée de vie de la batterie.",
      "quantity": 5,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45708-3",
      "image": "image31.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 32,
      "name": "Razer BlackWidow Elite Mechanical Gaming Keyboard",
      "price": 16999,
      "description": "Un clavier de jeu mécanique haut de gamme avec des touches rétroéclairées et des switches tactiles.",
      "quantity": 5,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45709-0",
      "image": "image32.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 33,
      "name": "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
      "price": 19999,
      "description": "Un clavier de jeu mécanique avec des touches programmables et un éclairage RGB dynamique.",
      "quantity": 5,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45710-6",
      "image": "image33.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 34,
      "name": "Nintendo Switch Pro Controller zelda ",
      "price": 6999,
      "description": "Un contrôleur de haute qualité pour la Nintendo Switch, avec une ergonomie améliorée et une longue durée de vie de la batterie.",
      "quantity": 10,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45711-3",
      "image": "image34.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 35,
      "name": "Sony PlayStation 5 DualSense Wireless Controller",
      "price": 6999,
      "description": "Un contrôleur sans fil de haute qualité pour la PlayStation 5, avec des retours haptiques et des gâchettes adaptatives.",
      "quantity": 10,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45712-0",
      "image": "image35.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 36,
      "name": "Xbox Series X Wireless Controller",
      "price": 6999,
      "description": "Un contrôleur sans fil de haute qualité pour la Xbox Series X, avec un design amélioré et une meilleure réactivité.",
      "quantity": 10,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45713-7",
      "image": "image36.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 37,
      "name": "Meta Quest 2",
      "price": 29999,
      "description": "Un casque de réalité virtuelle tout-en-un offrant une expérience immersive sans nécessiter de PC.",
      "quantity": 8,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45714-4",
      "image": "image37.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 38,
      "name": "Sony PlayStation VR2",
      "price": 39999,
      "description": "Un casque de réalité virtuelle pour PlayStation 5, offrant des graphismes haute résolution et une immersion totale.",
      "quantity": 5,
      "category": "Accessoire de Console",
      "matricule": "978-0-123-45715-1",
      "image": "image38.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 39,
      "name": "Xbox Game Pass Ultimate",
      "price": 1499,
      "description": "Abonnement offrant un accès à un catalogue de jeux pour Xbox et PC, ainsi que des avantages Xbox Live Gold.",
      "quantity": 200,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45716-8",
      "image": "image39.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    },
    {
      "id": 40,
      "name": "Nintendo Switch Online Membership",
      "price": 1999,
      "description": "Abonnement offrant un accès multijoueur en ligne, des jeux classiques NES/SNES et d'autres avantages.",
      "quantity": 200,
      "category": "Carte Cadeau",
      "matricule": "978-0-123-45717-5",
      "image": "image40.jpg",
      "createdAt": "2024-07-09T17:37:46.000Z",
      "updatedAt": "2024-07-09T17:37:46.000Z"
    }
] 

module.exports = items