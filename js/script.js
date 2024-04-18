function areaCirculo() {
    let raio = parseFloat(document.querySelector('#inputRaio').value);
    let area = Math.PI * (raio * raio);
    let resultado = document.querySelector('#resultado');
    resultado.textContent = "Área do círculo: " + area.toFixed(2);
  }
