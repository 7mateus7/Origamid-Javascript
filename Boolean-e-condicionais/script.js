// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

//Início Exercício 01
let idadeMateus = 21;
let idadePai = 54;

if(idadeMateus > idadePai){
    console.log('Mateus é mais velho que o seu pai.')
}else if(idadeMateus === idadePai){
    console.log('O Mateus tem a mesma idade do seu pai.')
}else{
    console.log('O Mateus é mais novo que o seu pai.')
}
//Fim eExercício 01

//Início exercício 02
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//Retorna o valor 3 que é a última condição que retorna TRUE.
console.log(expressao);

/*// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
    */