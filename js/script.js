
// dichiaro un array di oggetti
const bicicletta =[
    {marca:"atala",
        peso: 300,
    },
    {marca:"bianchi",
        peso: 400
    },
    {marca:"graziella",
        peso:350

    },
    {marca:"bmx",
        peso:500,
    },
    {marca:"rider",
        peso:200,
    }
    

]


console.log(bicicletta)

// dichiaro una variabile per la bici più leggera
let biciLeggera= bicicletta[0]
//  ciclo le biciclette 

for (let index = 0; index < bicicletta.length; index++) {
     if(bicicletta[index].peso < biciLeggera.peso){
        biciLeggera = bicicletta[index]
     }
    
}
// stampo in console la bici più leggera
console.log("bici più leggera è",biciLeggera)

// esercizio due 

const squadre =[
    {squadra:"juventus",
        punti:0,
        falliSubiti:0,
    },
    {squadra:"inter",
        punti:0,
        falliSubiti:0,
    },
    {squadra:"atalanta",
        punti:0,
        falliSubiti:0,
    },
    {squadra:"milan",
        punti:0,
        falliSubiti:0,
    },
    
    
]

// genero la funzione che mi genera numri casuali

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

// assegno numeri casuali per i punti e per i falli
squadre.forEach(squadra => {
    squadra.punti = getRandomNum(0, 50);
    squadra.falli = getRandomNum(0, 50);   
});

console.log("squadre con punti e falli subuti",squadre)

let FalliDelleSquadre = squadre.map(squadra =>({
    nome: squadra.squadra,
    falli: squadra.Fallisubiti,
}))

console.log(  "array con nomi e falli",FalliDelleSquadre)



