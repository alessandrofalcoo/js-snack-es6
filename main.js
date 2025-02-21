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
let lighterBike = [];
lighterBike.push(bikes[0]);


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

const football = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    }
]