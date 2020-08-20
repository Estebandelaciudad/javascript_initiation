given_floors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))
for(let i = 1; i <= given_floors; i++){ 
    output = "";
    test = "";
    for (let j = 0; j < given_floors - i ; j++) output += ' ';
    for (let k = 0; k < i ; k++) test += '#';

    console.log(output+test);
}