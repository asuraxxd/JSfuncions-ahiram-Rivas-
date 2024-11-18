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
