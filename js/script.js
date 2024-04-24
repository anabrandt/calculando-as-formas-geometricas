function areaCirculo() {
  let raio = parseFloat(document.querySelector('#inputRaio').value);
  let area = Math.PI * (raio * raio);
  let resultado = document.querySelector('#resultado');
  resultado.textContent = "Área do círculo: " + area.toFixed(2);
}

function areaTriangulo() {
  let base = parseFloat(document.querySelector('#inputBase').value);
  let altura = parseFloat(document.querySelector('#inputAltura').value);
  let area = (base * altura) / 2;
  let resultado = document.querySelector('#resultadoTriangulo');
  resultado.textContent = "Área do triângulo: " + area.toFixed(2);
}

function areaCubo() {
  let lado = parseFloat(document.querySelector('#inputLadoCubo').value);
  let areaFace = lado * lado;
  let areaTotal = 6 * areaFace;
  let resultado = document.querySelector('#resultadoCubo');
  resultado.textContent = "Área do cubo: " + areaTotal.toFixed(2);
}

function areaRetangulo() {
  let base = parseFloat(document.querySelector('#inputBaseRetangulo').value);
  let altura = parseFloat(document.querySelector('#inputAlturaRetangulo').value);
  let area = base * altura;
  let resultado = document.querySelector('#resultadoRetangulo');
  resultado.textContent = "Área do retângulo: " + area.toFixed(2);
}

function areaRomboedro() {
  let diagonalMaior = parseFloat(document.querySelector('#inputDiagonalMaior').value);
  let diagonalMenor = parseFloat(document.querySelector('#inputDiagonalMenor').value);
  let areaLosango = (diagonalMaior * diagonalMenor) / 2;
  let numeroFaces = 6;
  let areaTotal = areaLosango * numeroFaces;
  let resultado = document.querySelector('#resultadoRomboedro');
  resultado.textContent = "Área do romboedro: " + areaTotal.toFixed(2);
}

function areaTrapezoide() {
  let baseMaior = parseFloat(document.querySelector('#inputBaseMaior').value);
  let baseMenor = parseFloat(document.querySelector('#inputBaseMenor').value);
  let altura = parseFloat(document.querySelector('#inputAlturaTrapezoide').value);
  let area = (baseMaior + baseMenor) * altura / 2;
  let resultado = document.querySelector('#resultadoTrapezoide');
  resultado.textContent = "Área do Trapezoide: " + area.toFixed(2);
}

function areaQuadrado() {
  let lado = parseFloat(document.querySelector('#inputLadoQuadrado').value);
  let area = lado * lado;
  let resultado = document.querySelector('#resultadoQuadrado');
  resultado.textContent = "Área do quadrado: " + area.toFixed(2);
}

function areaPoligonoRegular() {
  let numLados = parseFloat(document.querySelector('#inputNumLados').value);
  let comprimentoLado = parseFloat(document.querySelector('#inputComprimentoLado').value);
  let area = (numLados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLados));
  let resultado = document.querySelector('#resultadoPoligonoRegular');
  resultado.textContent = "Área do polígono regular: " + area.toFixed(2);
}

function areaCuboide() {
  let comprimento = parseFloat(document.querySelector('#inputComprimento').value);
  let largura = parseFloat(document.querySelector('#inputLargura').value);
  let altura = parseFloat(document.querySelector('#inputAltura').value);
  let area = 2 * (comprimento * largura + largura * altura + altura * comprimento);
  let resultado = document.querySelector('#resultadoCuboide');
  resultado.textContent = "Área do cuboide: " + area.toFixed(2);
}

  