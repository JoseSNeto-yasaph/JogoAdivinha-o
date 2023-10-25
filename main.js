//Variáveis

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

const inputNumber = document.querySelector("#inputNumber")
const userGuess = Number(inputNumber.value)

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleClickEnter)



//Funções callback
function handleTryClick(event) {
  event.preventDefault()

  XXX
  if(userGuess >= 0 && userGuess <= 10) {

    if(userGuess == randomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText =`Acertou em ${xAttempts} tentativas!`
    }
      
  } else {
    alert(`O número ${userGuess} não e válido`)
  }

  inputNumber.value = ""  //para esvaziar o campo do numero a cada tentativa
  xAttempts++
}





function handleResetClick () { //Função para resetar o jogo e resetar a quantidade de chances que precisaram para acertar o numero randomico
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10) //para resetar o randon number
}

function toggleScreen() {  //Função para alternar as janelas visíveis
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleClickEnter(e) {  //Evento para usar o enter para selecionar o segundo botão
  if(e.key =='Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}   //e.key = Por exemplo, se você pressionar a tecla "A" no teclado, e.key retornará a string "A". Se você pressionar a tecla "Enter", e.key retornará a string "Enter".
