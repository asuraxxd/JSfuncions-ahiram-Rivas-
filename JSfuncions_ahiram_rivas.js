//exercici 1
function mostrarNomICognoms(nom, cognoms) {
    console.log(`Nom: ${nom}, Cognoms: ${cognoms}`);
}
mostrarNomICognoms("Ahiram", "Rivas");

//exercici 2
function mostrarTipus(valor) {
    console.log(`El valor ${valor} és de tipus ${typeof valor}`);
}
mostrarTipus(42);
mostrarTipus("Hola");

//exercici 3
function mostrarDataActual() {
    console.log(`Data actual: ${new Date()}`);
}
mostrarDataActual();

//exercici 4
function declararVariable() {
    let variableLocal = "Aquest és un valor local";
    console.log(variableLocal);
}
declararVariable();
// console.log(variableLocal); // Error: variableLocal is not defined

//Explicació: Les variables declarades dins d'una funció només existeixen en el seu àmbit (scope).

//exercici 5
function comptarVocals(text) {
    const vocals = text.match(/[aeiouàèéíòóúü]/gi);
    return vocals ? vocals.length : 0;
}
console.log(comptarVocals("Hola, com estàs?"));

//exercici 6
function sumarTresValors(a, b, c = 0) {
    return a + b + c;
}
console.log(sumarTresValors(5, 10));

//exercici 7
function executar() {
    mostrarDataActual();
    return sumarTresValors(3, 7, 10);
}
console.log(executar());

//exercici 8
function esTrenta(a, b) {
    return a === 30 || b === 30 || (a + b === 30);
}
console.log(esTrenta(10, 20));

//exercici 9
const esTrentaAnonim = function(a, b) {
    return a === 30 || b === 30 || (a + b === 30);
};
console.log(esTrentaAnonim(15, 15));

//exercici 10
const mateixTipusIValor = (a, b) => a === b;
console.log(mateixTipusIValor(5, "5"));

//exercici 11
const arrelQuadrada = (x) => Math.sqrt(x).toFixed(2);
console.log(arrelQuadrada(45));

//exercici 12
const convertirMinuscules = (text) => text.toLowerCase();
console.log(convertirMinuscules("BONA TARDA"));

//exercici 13
const valorNoNull = (a, b) => a ?? b;
console.log(valorNoNull(null, "Hola"));

//exercici 14
const posicio = (frase, paraula) => {
    const index = frase.indexOf(paraula);
    return frase.length - index - paraula.length;
};

const dividir = (frase, paraula) => {
    const inici = posicio(frase, paraula);
    return frase.slice(inici);
};

console.log(dividir("Hola com estàs", "com"));

//exercici 15
// Aquesta funció rep un valor `x` i el multiplica per 3.
const multiplicarPerTres = (x) => x + x + x;
console.log(multiplicarPerTres(5)); // Exemple: retorna 15.


