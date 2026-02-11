function generateNumber() {
    const minInput = document.querySelector('.input-min');
    const maxInput = document.querySelector('.input-max');
    const resultText = document.querySelector('.resultado');

    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    // validações
    if (minInput.value === '' || maxInput.value === '') {
        resultText.textContent = 'Preencha os dois campos.';
        resultText.style.color = '#ff4d4d';
        return;
    }

    if (min >= max) {
        resultText.textContent = 'O mínimo deve ser menor que o máximo.';
        resultText.style.color = '#ff4d4d';
        return;
    }

    // animação 🎲
    resultText.style.color = '#fff';
    let contador = 0;

    const animacao = setInterval(() => {
        const numeroFake = Math.floor(Math.random() * (max - min + 1)) + min;
        resultText.textContent = numeroFake;
        contador++;
    }, 80);

    setTimeout(() => {
        clearInterval(animacao);
        const resultadoFinal = Math.floor(Math.random() * (max - min + 1)) + min; 
        resultText.textContent = `🎲 O número sorteado é… ${resultadoFinal}`; //resultSpan.textContent = `🎲 O número sorteado é… ${randomNumber}`;
        resultText.style.color = '#35c644';
    }, 1500);
}