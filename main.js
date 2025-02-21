/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.  */

// Creare una variabile bikes che contenga un array di oggetti con le varie bici elencate e le loro proprietà
const bikes = [
    {
        name: 'Bitwin',
        weight: 10
    },
    {
        name: 'Specialized',
        weight: 4
    },
    {
        name: 'Canyon Ultimate',
        weight: 6
    },
]

// Creare una array che contenga la bici più leggera
let lighterBike = [bikes[0]];

// Controllare i vari pesi e pushare nella variabile ligtherBike la bici col peso minore
for (let i = 1; i < bikes.length; i++) {
    let weight = bikes[i].weight;
    if (weight < lighterBike[0].weight) {
        lighterBike.pop()
        lighterBike.push(bikes[i])
    }
}

//Stampo il risultato in console
console.log(lighterBike);



/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// Creo un array di oggetti con dentro tre proprietà ciascuno 
const teams = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
]


// Itero sull'array di oggetti in modo da ottenere un numero random nelle proprietà dei punti e dei falli
for (let i = 0; i < teams.length; i++) {
    teams[i].points = Math.floor(Math.random() * 10) + 1;
    teams[i].fouls = Math.floor(Math.random() * 10) + 1;
}
// Stampo l'array in console
console.log(teams);


// Creo un array di oggetti con dentro solo due proprietà
const namesFouls = [
    {
        name:'Inter',
        fouls: 0        
    },
    {
        name:'Milan',
        fouls: 0        
    },
    {
        name:'Roma',
        fouls: 0        
    },
]

// Itero sull'array in modo da generare un numero random nella fouls property
for (let i = 0; i < namesFouls.length; i++) {
    namesFouls[i].fouls = Math.floor(Math.random() * 10) + 1;
}

// Stampo l'array in console
console.log(namesFouls);


