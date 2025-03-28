
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

const calcio =[
    {squadra:"juventus",
        punti:"0",
        falliSubiti:"0",
    }
]