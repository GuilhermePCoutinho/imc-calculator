const calculate = document.getElementById('calculate');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {

        const valorIMC = (weight / (height * height)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        result.textContent = `${name} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        result.textContent = 'Preencha todos os campos!!!';
    }

}

calculate.addEventListener('click', imc);