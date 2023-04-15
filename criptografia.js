function criptografar(texto) {
  let resultado = texto;
  resultado = resultado.replace(/e/g, 'enter');
  resultado = resultado.replace(/i/g, 'imes');
  resultado = resultado.replace(/a/g, 'ai');
  resultado = resultado.replace(/o/g, 'ober');
  resultado = resultado.replace(/u/g, 'ufat');
  return resultado;
}

function descriptografar(texto) {
  let resultado = texto;
  resultado = resultado.replace(/enter/g, 'e');
  resultado = resultado.replace(/imes/g, 'i');
  resultado = resultado.replace(/ai/g, 'a');
  resultado = resultado.replace(/ober/g, 'o');
  resultado = resultado.replace(/ufat/g, 'u');
  return resultado;
}

function atualizarResultado() {
  const entrada = document.getElementById('entrada');
  const saida = document.getElementById('saida');
  const opcao = document.getElementById('opcao').value;

  if (opcao === 'criptografar') {
    saida.value = criptografar(entrada.value.toLowerCase());
  } else if (opcao === 'descriptografar') {
    saida.value = descriptografar(entrada.value.toLowerCase());
  }
}

function copiarResultado() {
  const saida = document.getElementById('saida');
  saida.select();
  document.execCommand('copy');
}

const btnCriptografar = document.getElementById('btn-criptografar');
btnCriptografar.addEventListener('click', atualizarResultado);

const btnDescriptografar = document.getElementById('btn-descriptografar');
btnDescriptografar.addEventListener('click', atualizarResultado);

const btnCopiar = document.getElementById('btn-copiar');
btnCopiar.addEventListener('click', copiarResultado);
