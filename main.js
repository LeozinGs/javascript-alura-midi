//Cria a função para tocar o som, recebendo um parâmetro específico.
function tocarSom(nomeInstrumento) {

    //Cria a constante que pega o som desejado usando como parâmetro o próprio nome da tecla.
    const som = document.querySelector(`#som_${nomeInstrumento}`);

    //Da play no som.
    som.play();

}

//Cria a variável que será usada como parâmetro.
let instrumento = [];

//Cria a constante que pega todas as teclas do nosso teclado de som.
const listaDeTeclas = document.querySelectorAll('.tecla');

//Loop para percorrer toda a lista, adicionar o nome da classe que será usada de parâmetro na função e adiciona o atributo onclick nos botões.
for (let i = 0; i < listaDeTeclas.length; i++) {

    //Criando constante para guardar a lista de teclas
    const tecla = listaDeTeclas[i];

    //Adiciona o nome da classe à variável, dividindo os dois nome e pegando só aquele que será usado como parâmetro.
    instrumento.push(tecla.classList[1]);

    //Adiciona o atributo onclick nos botões usando uma arrow function(Lambda) para adicionar o parâmetro na função chamada no onclick.
    tecla.onclick = () => {

        //Chamando a função dentro do botão pelo atributo onclick, com o parâmetro desejado.
        tocarSom(instrumento[i]);

    }
}
