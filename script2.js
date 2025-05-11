let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

checkBtn.addEventListener("click", () => {
  const palpite = Number(guessInput.value);
  tentativas++;

  if (palpite < 1 || palpite > 100) {
    message.textContent = "Digite um número entre 1 e 100.";
  } else if (palpite === numeroSecreto) {
    message.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else if (palpite < numeroSecreto) {
    message.textContent = "🔼 Muito baixo!";
  } else {
    message.textContent = "🔽 Muito alto!";
  }
});

restartBtn.addEventListener("click", () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  checkBtn.disabled = false;
});
