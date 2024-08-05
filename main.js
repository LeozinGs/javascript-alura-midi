//Cria a função para tocar o som, recebendo um parâmetro específico.
function tocarSom(nomeInstrumento) {

    //Cria a constante que pega o som desejado usando como parâmetro o próprio nome da tecla.
    const som = document.querySelector(nomeInstrumento);

    //Verificando se o elemento é nulo ou se contém um elemento audio.
    if (som != null && som.localName === 'audio') {

        som.play();

    } 
    //Caso as duas condições anteriores forem falsas.
    else {

        alert('Elemento não encontrado!');

    }

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
    instrumento.push(`#som_${tecla.classList[1]}`);

    //Adiciona o atributo onclick nos botões usando uma arrow function(Lambda) para adicionar o parâmetro na função chamada no onclick.
    tecla.onclick = () => {

        //Chamando a função dentro do botão pelo atributo onclick, com o parâmetro desejado.
        tocarSom(instrumento[i]);

    }

    //Quando a tecla estiver apertada, adiciona o estilo 'ativo'.
    tecla.onkeydown = (e) => {

        //Condicional para saber se o Enter ou a Barra de Espaço foi apertada.
        if (e.code === 'Enter' || e.code === 'Space') {

            tecla.classList.add('ativa');

        }

    }

    //Quando a tecla não está mais sendo apertada, remove o estilo 'ativo'.
    tecla.onkeyup = () => {

        tecla.classList.remove('ativa');

    }

}
