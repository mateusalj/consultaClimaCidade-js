const key = '0f93f14c04f497d288c2e40a4ee52f84'
const botao = document.querySelector('.botao-busca')
const caixaText = document.querySelector('.caixa-maior')
const titulo = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const foto = document.querySelector('.img-previsao')
const descricao = document.querySelector('.texto-previsao')
const umidade = document.querySelector('.umidade')



//primeira parte

botao.addEventListener('click',capturar)//chamada da função capturar
caixaText.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        const btn = document.querySelector('.botao-busca')
        btn.click()
    }
})

function capturar(){
    const cidade = document.querySelector('.input-cidade').value //pegando a informação digitada
    buscaCidade(cidade)
}

//segunda parte api

async function buscaCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())


    mostraNaTela(dados)
    console.log(dados)
}

//terceira parte mostra dados na tela

function mostraNaTela(dados){

    titulo.innerHTML = "Tempo em: " + dados.name // buscando dado do nome da cidade no console
    temperatura.innerHTML = Math.ceil(dados.main.temp) + "°C" //buscando dado temperatura na api vizualizado no console
    foto.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` //buscando o dado icon na api vista no console
    descricao.innerHTML = dados.weather[0].description //buscando dado da descrição do tempo
    umidade.innerHTML = "Umidade " + dados.main.humidity + '%'

}