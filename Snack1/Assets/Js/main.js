/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

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

console.log(biciclette);



for (let index = 0; index < biciclette.length; index++) {
    const singolaBici = biciclette[index];
    /* console.log(singolaBici); */
    // console.log(singolaBici.nome, singolaBici.peso)
    console.log(singolaBici.peso);



  

    if (singolaBici.peso < "qualcosa" ) {
        console.log("minore");
    }

}






