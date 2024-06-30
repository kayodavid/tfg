function calcularTFG() {
  // Obtendo os valores dos inputs
  var creatinina = parseFloat(document.getElementById('creatinina').value);
  var idade = parseInt(document.getElementById('idade').value);
  var sexo = document.getElementById('sexo').value;

  // Definindo os valores de k e a baseado no sexo
  var k, a, multiplicador_sexo;
  if (sexo === 'F') { // Feminino
    k = 0.7;
    a = -0.248;
    multiplicador_sexo = 1.012;
  } else { // Masculino
    k = 0.9;
    a = -0.207;
    multiplicador_sexo = 1;
  }

  // Calculando o TFG usando a fórmula CKD-EPI 2021
  var tfg = 142 * Math.min(creatinina / k, 1)**a * Math.max(creatinina / k, 1)**-1.200 * Math.pow(0.9938, idade) * multiplicador_sexo;

  // Exibindo o resultado arredondado para duas casas decimais
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = 'Taxa de Filtração Glomerular (TFG): ' + tfg.toFixed(2) + ' mL/min/1.73m²';

  // Mostrar o conteúdo da div #texto
  var textoElement = document.getElementById('texto');
  textoElement.style.display = 'block';
}
