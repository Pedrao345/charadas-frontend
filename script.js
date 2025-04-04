const baseUrl = "http://127.0.0.1:5000/"
const aleatorio = "charadas"
let pergunta = document.getElementById('charada')
let resposta = document.getElementById('resposta')
let input_resposta = document.getElementById('input-resposta')
let resposta_charada = ''


async function getCharada() {
    try {
        const charada = await fetch(baseUrl + aleatorio)

        const charadaJson = await charada.json()
        pergunta.innerHTML = `<p>${charadaJson.charada}</p> `
        resposta_charada = charadaJson.resposta

    } catch (error){
        console.log('Erro ao chamar a API:'+error)
    }
}

getCharada()

function revelarCharada() {
    input_resposta.readOnly = true
    input_resposta = input_resposta.value.toLowerCase().replace(/\s/g, '').replace('.', '')
    res_charada_baixa = resposta_charada.toLowerCase().replace(/\s/g, '').replace('.', '')
    
    

    if (res_charada_baixa == input_resposta) {
        resposta.innerHTML =` <p class="text-green-500">Acertou! A resposta é "${resposta_charada}"</p> `
    }else {
        resposta.innerHTML =` <p class="text-red-500">Você errou!! A resposta é "${resposta_charada}"</p> `
    }

}

