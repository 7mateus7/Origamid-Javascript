##### **VARIÁVEIS**

###### **var** nome = 'André';

###### **let** idade = 28;

###### **const** possuiFaculdade = true;



\*Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

EX.:

var nome = 'André',

&nbsp;   idade = 28,

&nbsp;   possuiFaculdade = true;



###### **Sem valor** - Pode declarar ela e não atribuir valor inicialmente.

Ex.: var precoAplicativo; // retorna undefined



##### **HOISTING**

São movidas para cima do código, porém o valor atribuído não é movido.

Ex.: a variável 'nome' existirá, mas sem valor atribuído.

console.log(nome); 

var nome = 'André';

// Retorna undefined





DECLARAR UMA VARIÁVEL COM ***LET*** É NECESSÁRIO SOMENTE UMA VEZ, POSTERIORMENTE PODE SER UTILIZADO SOMENTE O NOME DA VARIÁVEL. (RETORNA ERRO EM CONSOLE INFORMANDO QUE O REFERIDO VALOR JÁ FOI DECLARADO)

JÁ COM A ATRIBUIÇÃO ***VAR*** PODE SER DECLARADO TODAS AS VEZES, SEM QUE RETORNE NENHUM ERRO





##### **TIPOS DE DADOS**

var nome = 'André'; // **String**

var idade = 28; // **Number**

var possuiFaculdade = true; // **Boolean**

var time; // **Undefined**

var comida = null; // **Null**

var simbolo = Symbol() // **Symbol**

var novoObjeto = {} // **Object**



###### **Verificar tipo de Dado**

console.log(typeof nome\_da\_variavel);



2 Strings podem ser concatenadas utilizando o sinal de "+".

Ex.: let frase = "Olá, eu me chamado " + nomeCompleto + ", e tenho " + 21 + " anos!";



###### **UTILIZANDO ASPAS**

'JavaScript é "super" fácil'; - ✅

"JavaScript é 'super' fácil"; - ✅

"JavaScript é \\"super\\" fácil"; ✅

`JavaScript é "super" fácil"`; ✅

"JavaScript é "super" fácil"; // Inválido



##### **TAMPLATE STRING**

var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String



#### **NÚMEROS E OPERADORES**



var idade = 28;

var gols = 1000;

var pi = 3.14; // ponto para decimal

var exp = 2e10; // o número que vier após  e será a quantidade de 0's (Ex.: 20000000000)























