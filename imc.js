const calculate = document.getElementById('calculate');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {

        const valorIMC = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valorIMC < 18.5) {
            classification = 'under weight.';
        } else if (valorIMC < 25) {
            classification = 'with ideal weight. Congratulations!!!';
        } else if (valorIMC < 30) {
            classification = 'slightly overweight.';
        } else if (valorIMC < 35) {
            classification = 'with grade I obesity.';
        } else if (valorIMC < 40) {
            classification = 'com obesidade grau II';
        } else {
            classification = 'com obesidade grau III. Caution!!';
        }

        result.textContent = `${name} your BMI is ${valorIMC} and you are ${classification}`;

    } else {
        result.textContent = 'Fill in all fields!!!';
    }

}

calculate.addEventListener('click', imc);