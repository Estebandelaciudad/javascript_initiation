const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// --------------------------------------------------------

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ")
minimum = []
for(let k in books) {
    minimum.push(books[k].rented)};
    if (minimum.sort()[0] == 0) {
        console.log("Non, certains livres n'ont jamais été empruntés");}
    else
        {console.log("Oui, tous les livres ont déjà été empruntés une fois");}

// --------------------------------------------------------

console.log("Quel est livre le plus emprunté ")
var number = 0
    for(let k in books) {
        if (books[k].rented >= number) { 
        number = books[k].rented}}
   

    for(let k in books) {
        if (books[k].rented == number) {
            console.log(books[k].title+" est le livre plus emprunté avec "+number+" emprunts.")};
        };

 
// --------------------------------------------------------

console.log("Quel est le livre le moins emprunté ")
var number2 = books[0].rented
    for(let k in books) {
        if (books[k].rented <= number2) { 
        number2 = books[k].rented}};
   

    for(let k in books) {
        if (books[k].rented == number2) {
            console.log(books[k].title+" est le livre le moins emprunté avec "+number2+" emprunts.")};
        };

// --------------------------------------------------------

console.log("Trouve le livre avec l'ID: 873495 ")
for(let k in books) {
    if (books[k].id == 873495) {
        console.log(books[k].title+" est le livre avec l'ID 873495.")};
    };

// --------------------------------------------------------

console.log("Supprime le livre avec l'ID: 133712 ")
for(let k in books) {
if (books[k].id == 133712) {
    console.log(books[k]);
    delete books[k];}
};
console.log(books);

// --------------------------------------------------------

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
var array = []
for(let k in books) {
array.push(books[k].title)};
console.log(array.sort())