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