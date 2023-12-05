function calcular() {
  let peso = document.getElementById('pes').value;
  let alt = document.getElementById('altura').value;
  let p = Number(peso);
  let a = Number(alt);
  let imc = (p / (a * a)).toFixed(2);

  let res = document.getElementById('res');

  if (imc < 18.5){
      res.innerHTML = `Seu IMC é ${imc}. Abaixo do peso`;
  }  else if (imc >= 18.5 && imc <= 25.0) {
      res.innerHTML = `Seu IMC é ${imc}. Peso Normal`;
  }  else if (imc > 25.0 && imc <= 30.0) {
      res.innerHTML = `Seu IMC é ${imc}. Sobrepeso`;
  } else if (imc > 30.0 && imc <= 35.0) {
      res.innerHTML = `Seu IMC é ${imc}. Obesidade Grau 1`;
  } else if (imc > 35.0 && imc <= 40.0) {
      res.innerHTML = `Seu IMC é ${imc}. Obesidade Grau 2`;
  } else if (imc > 40.0) {
      res.innerHTML = `Seu IMC é ${imc}. Obesidade Mórbida`;
  } else {
      res.innerHTML = `Seu IMC é ${imc}. Obesidade Grave`;
  }
}