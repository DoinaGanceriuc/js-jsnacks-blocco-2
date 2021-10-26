//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach

const biciclette = [
    {
        nome: "Mountain bike",
        peso: 5
    },
    {
        nome: "Ibrida",
        peso: 6
    },
    {
        nome: "Bmx",
        peso: 8
    },
    {
        nome: "A scatto fisso",
        peso: 7
    },
    {
        nome: "Pieghevole",
        peso: 4
    }
]

//console.log(biciclette);

let biciDiRiferimento = biciclette[0]

biciclette.forEach(element => {
   // console.log(element);

    if (element.peso < biciDiRiferimento.peso ) {
        biciDiRiferimento = element
    }



    
});
console.log(biciDiRiferimento);