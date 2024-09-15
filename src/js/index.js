function pertenceFibonacci(n) {
    let a = 0, b = 1; // Início da sequência de Fibonacci (0, 1)

    // Gerar a sequência de Fibonacci até que b seja maior ou igual ao número n
    while (b < n) {
        let temp = b;
        b = a + b; // Próximo número da sequência é a soma dos dois anteriores
        a = temp;
    }

    // Verificar se o número informado pertence à sequência
    return (b === n || a === n);
}

function verificarFibonacci() {
    const numeroInformado = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numeroInformado)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (pertenceFibonacci(numeroInformado)) {
        document.getElementById("resultado").textContent = `O número ${numeroInformado} pertence à sequência de Fibonacci!`;
    } else {
        document.getElementById("resultado").textContent = `O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`;
    }
}
