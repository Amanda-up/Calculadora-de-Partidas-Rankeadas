let saldo = ranking(1000, 350)
console.log("O Heroí tem de saldo de " 
+ saldo, "está no nível de: " + nivelRanking()
)

function ranking (qtdV, qtdD){
    return qtdV - qtdD
}

function nivelRanking(nivel){
    if(saldo <= 10){
        nivel = "Ferro"
     }else if (saldo <= 20){
         nivel = "Bronze"
     }else if (saldo <= 50){
         nivel = "Prata"
     }else if (saldo <= 80){
         nivel = "Ouro"
     }else if (saldo <= 90){
         nivel = "Diamante"
     }else if (saldo <= 100){
         nivel = "Lendário"
     }else if (saldo >= 101){
         nivel = "Imortal"
     }
     return nivel
}