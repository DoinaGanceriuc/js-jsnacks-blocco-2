/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti*/

const squadreCalcio = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
   {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "Fiorentina",
        punti: 0,
        falli: 0
    },
]
console.log(squadreCalcio);


for (let index = 0; index < squadreCalcio.length; index++) {
    const squadra = squadreCalcio[index];
    /* console.log(squadra.punti);
    console.log(squadra.falli); */

    squadra.punti = Math.floor(Math.random() * 10) + 1;
    squadra.falli = Math.floor(Math.random() * 10) + 1;

    console.log(squadra.punti);
    console.log(squadra.falli);

  
    console.log(squadra);
} 