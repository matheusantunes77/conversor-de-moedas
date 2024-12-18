/* Passo a Passo
1.Captar o botão, para chamar uma função quando for clicado.
{
   
    1.1 - Pegar o click do botão - adicionar um evento
    1.2 - Vou criar uma função para quando for clicada, converta os valores
    1.3 - Para converter eu preciso saber o valor que a pessoa digitou no input
    1.4 - Mapea o input para que o valor que digitar seja guardado em uma varíavel
    1.5- Cria uma varíavel para o valor do dólar hoje
    1.6 - Cria uma variável para converter os valores e exibir no console para testar.

}
*/
/*Criando uma variavel para ser chamada dentro do JS.*/
const convertButton = document.querySelector('.button-convert') // button-convert botao

const currencySelect = document.querySelector('.currency-select') // opções das moedas para converter

const primeiroSelect = document.querySelector('.primeiro-select') // moeda atual







function convertValues() {
    const currencyConvert = document.querySelector('.valor-convert').value // valor da moeda a ser convertida no input

    const valueToConvert = document.querySelector('.currency-value-to-convert')// valor da moeda a ser convertida na div

    const valueAlreadyConverted = document.querySelector('.currency-value') // valor convertido na div




    if (primeiroSelect.value == 'opcao_real' && currencySelect.value == 'dolar') {

        //Se o select estiver selecionado o valor de dólar para converter
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'

            }).format(currencyConvert * 0.1650)
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
        ).format(currencyConvert)
    }

    if (primeiroSelect.value == 'opcao_real' && currencySelect.value == 'euro') {
        // Se o select estiver selecionado o valor de euro para converter.
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert * 0.1568)
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
        ).format(currencyConvert)
    }

    if (primeiroSelect.value == 'opcao_real' && currencySelect.value == 'libra') {
        // Se o select estiver selecionado o valor de libra para converter
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert * 0.1292)
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
        ).format(currencyConvert)

    }
    if (primeiroSelect.value == 'opcao_real' && currencySelect.value == 'dinar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KWD'
        }).format(currencyConvert / 19.72)
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
        ).format(currencyConvert)
    }
    // dolar
    if (primeiroSelect.value == 'opcao_dolar' && currencySelect.value == 'euro') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert * 0.9499)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyConvert)
    }
    
    if (primeiroSelect.value == 'opcao_dolar' && currencySelect.value == 'libra') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert * 0.7842)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyConvert)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyConvert)
    }
    if (primeiroSelect.value == 'opcao_dolar' && currencySelect.value == 'dinar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KWD'
        }).format(currencyConvert * 0.3076)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyConvert)
    }
    
    // euro
    if (primeiroSelect.value == 'opcao_euro' && currencySelect.value == 'dolar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'

            }).format(currencyConvert * 1.05125)
        valueToConvert.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert)


    }
    if (primeiroSelect.value == 'opcao_euro' && currencySelect.value == 'libra') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert * 0.8241)
        valueToConvert.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert)
    
    }
    if (primeiroSelect.value == 'opcao_euro' && currencySelect.value == 'dinar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KWD'
        }).format(currencyConvert * 0.3233)
        valueToConvert.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert)
    
    }
    // libra
    if (primeiroSelect.value == 'opcao_libra' && currencySelect.value == 'dolar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyConvert * 1.276)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert)

    }
    if (primeiroSelect.value == 'opcao_libra' && currencySelect.value == 'euro') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyConvert * 1.214)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert)

    }
    if (primeiroSelect.value == 'opcao_libra' && currencySelect.value == 'dinar') {
        valueAlreadyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KWD'
        }).format(currencyConvert * 0.3925)
        valueToConvert.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyConvert)

    }
    

    

}

function changeCurrency() {


    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')
    
    

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImg.src = './assets/dolar.png'
        if(primeiroSelect.value == 'opcao_dolar' && currencySelect.value == 'dolar'){
            alert("As moedas selecionadas são iguais!")
    
        }


    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Euro.png'
        if(primeiroSelect.value == 'opcao_euro' && currencySelect.value == 'euro'){
            alert("As moedas selecionadas são iguais!")
    
        }

    }
    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = './assets/libra 1.png'
        if(primeiroSelect.value == 'opcao_libra' && currencySelect.value == 'libra'){
            alert("As moedas selecionadas são iguais!!")
    
        }
    }
    if (currencySelect.value == 'dinar') {
        currencyName.innerHTML = 'Dinar Kwaitiano'
        currencyImg.src = './assets/libra 1.png'
    }
    


}

function primeiro_Input() {
    const primeiro_moeda = document.getElementById('currency-real')
    const flag_img = document.getElementById('primeira')
    const values = document.getElementById('valor-para-converter')
    if (primeiroSelect.value == 'opcao_dolar') {
        primeiro_moeda.innerHTML = 'Dólar americano'
        flag_img.src = './assets/dolar.png'
        values.innerHTML = 'U$$0,00'
    
    }
    if (primeiroSelect.value == 'opcao_real') {
        primeiro_moeda.innerHTML = 'R$ Real'
        flag_img.src = "./assets/real.png"
        values.innerHTML = 'R$ 0,00'

    }
    if (primeiroSelect.value == 'opcao_euro') {
        primeiro_moeda.innerHTML = '€ Euro'
        flag_img.src = './assets/Euro.png'
        values.innerHTML = '€ 0,00'
        if(primeiroSelect.value == 'opcao_euro' && currencySelect == 'euro'){
            alert("As moedas selecionadas são iguais!")
        }

    }
    if (primeiroSelect.value == 'opcao_libra') {
        primeiro_moeda.innerHTML = '£ Libra Esterlina'
        flag_img.src = './assets/libra 1.png'
        values.innerHTML = '£ 0,00'

    }
   
    if(primeiroSelect.value == 'opcao_libra' && currencySelect == 'libra'){
        alert("As moedas selecionadas são iguais!")
    }

}



primeiroSelect.addEventListener('change', primeiro_Input)
currencySelect.addEventListener('click', changeCurrency)
/* Ele está ouvindo meu botão, quando ele é clicado, chamar a função */
convertButton.addEventListener('click', convertValues)









