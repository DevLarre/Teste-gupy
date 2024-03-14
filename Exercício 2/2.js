function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }
    return sequence;
}

function calculateFibonacci() {
    let fnacci = document.getElementById("inputNumber").value;
    let result = '';
    n = parseInt(fnacci);

    if (!isNaN(fnacci) && fnacci > 0) {
        let fibonacciSequence = fibonacci(n);
        result = `Os primeiros ${fnacci} números da sequência de Fibonacci são: ${fibonacciSequence.join(", ")}`;
    } else {
        result = "Insira um número válido maior que 0...";
    }

    document.querySelector('.fnacci').innerHTML = result;
}

inputNumber.addEventListener('focus', function() {
    if (this.placeholder === 'Insira um número para começar...') {
        this.placeholder = '';
    }
});

inputNumber.addEventListener('blur', function() {
    if (this.placeholder === '') {
        this.placeholder = 'Insira um número para começar...';
    }
});

inputNumber.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateFibonacci();
            }
});