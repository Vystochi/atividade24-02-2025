function validarNumeroCartao(numero) {
    numero = numero.replace(/\s+/g, '');
  
    if (/^\d+$/.test(numero) && numero.length >= 14 && numero.length <= 16) {
      return true;  
    } else {
      return false;
    }
  }
  
  console.log(validarNumeroCartao("1582 8115 3252 9124"));
  console.log(validarNumeroCartao("182 8115 352 912"));
  console.log(validarNumeroCartao("1582 8115 3252 9124153"));