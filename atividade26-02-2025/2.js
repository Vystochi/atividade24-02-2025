function gerarCNPJ() {
    let base = '';
    for (let i = 0; i < 12; i++) {
        base += Math.floor(Math.random() * 10); 
    }
    function calcularDigitoVerificador(digitos, numero) {
        let soma = 0;
        for (let i = 0; i < digitos.length; i++) {
            soma += parseInt(digitos[i]) * numero[i];
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
    const numero1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const numero2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let primeiroDigito = calcularDigitoVerificador(base, numero1);
    let segundoDigito = calcularDigitoVerificador(base + primeiroDigito, numero2);
    let cnpj = base + primeiroDigito + segundoDigito;
    cnpj = cnpj.slice(0, 2) + '.' +
       cnpj.slice(2, 5) + '.' +
       cnpj.slice(5, 8) + '/' +
       cnpj.slice(8, 12) + '-' +
       cnpj.slice(12, 14);
    return cnpj;
}

console.log(gerarCNPJ());
