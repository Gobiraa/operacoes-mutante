const {
    soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
    fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
    arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
    diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
    logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
    grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
    produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
    inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
    isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes de Alta Eficácia', () => {

    test('Operações Aritméticas e Exceções', () => {
        expect(soma(2, 2)).toBe(4);
        expect(subtracao(5, 2)).toBe(3);
        expect(multiplicacao(3, 3)).toBe(9);
        expect(potencia(2, 3)).toBe(8);
        expect(restoDivisao(10, 3)).toBe(1);
        expect(raizQuadrada(9)).toBe(3);
        expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.');
        expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });

    test('Fatorial e Loops', () => {
        expect(fatorial(0)).toBe(1); // Mata mutante n === 0
        expect(fatorial(1)).toBe(1); // Mata mutante n === 1
        expect(fatorial(2)).toBe(2); // Mata mutante de loop i <= n
        expect(fatorial(5)).toBe(120);
        expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });

    test('Arrays, Estatística e Mensagens Específicas', () => {
        const nums = [10, 30, 20];
        expect(somaArray(nums)).toBe(60);
        expect(mediaArray(nums)).toBe(20);
        expect(mediaArray([])).toBe(0);
        expect(produtoArray([1, 2, 3])).toBe(6);
        expect(produtoArray([])).toBe(1);
        
        // Uso do "не" conforme código original
        expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
        expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
        expect(maximoArray(nums)).toBe(30);
        expect(minimoArray(nums)).toBe(10);
    });

    test('Mediana e Ordenação', () => {
        expect(medianaArray([3, 1, 2])).toBe(2); // Mata mutante que remove .sort()
        expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
        expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
    });

    test('Comparações e Valores de Borda', () => {
        expect(isMaiorQue(5, 5)).toBe(false); // Mata mutante > para >= [cite: 55]
        expect(isMaiorQue(6, 5)).toBe(true);
        expect(isMenorQue(5, 5)).toBe(false);
        expect(isMenorQue(4, 5)).toBe(true);
        expect(isEqual(5, 5)).toBe(true);
        expect(isEqual(5, 6)).toBe(false);
        expect(isDivisivel(10, 2)).toBe(true);
        expect(isDivisivel(10, 3)).toBe(false);
    });

    test('Lógica de Clamp e Sinais', () => {
        expect(clamp(10, 10, 20)).toBe(10); // Limite exato mínimo
        expect(clamp(20, 10, 20)).toBe(20); // Limite exato máximo
        expect(clamp(5, 10, 20)).toBe(10);
        expect(clamp(25, 10, 20)).toBe(20);
        
        expect(valorAbsoluto(-5)).toBe(5);
        expect(valorAbsoluto(0)).toBe(0);
        expect(inverterSinal(5)).toBe(-5);
        expect(inverterSinal(0)).toBe(-0); // Correção do zero negativo
    });

    test('Porcentagem e Trigonometria', () => {
        expect(calcularPorcentagem(10, 200)).toBeCloseTo(20);
        expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
        expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
        expect(seno(0)).toBe(0);
        expect(cosseno(0)).toBe(1);
        expect(tangente(Math.PI / 4)).toBeCloseTo(1);
        expect(hipotenusa(3, 4)).toBe(5);
    });

    test('Teoria dos Números e Conversões', () => {
        expect(isPrimo(1)).toBe(false);
        expect(isPrimo(2)).toBe(true);
        expect(isPrimo(4)).toBe(false);
        expect(isPrimo(9)).toBe(false); // Mata mutantes de loop ímpar
        
        expect(fibonacci(6)).toBe(8);
        expect(mdc(12, 18)).toBe(6);
        expect(mmc(12, 18)).toBe(36);
        expect(celsiusParaFahrenheit(0)).toBe(32);
        expect(fahrenheitParaCelsius(32)).toBe(0);
    });

    test('Utilitários de Arredondamento e Matemática', () => {
        expect(arredondar(4.5)).toBe(5);
        expect(arredondarParaBaixo(4.9)).toBe(4);
        expect(arredondarParaCima(4.1)).toBe(5);
        expect(dobro(10)).toBe(20);
        expect(triplo(10)).toBe(30);
        expect(metade(10)).toBe(5);
        expect(inverso(2)).toBe(0.5);
        expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });

    test('Geometria e Logaritmos', () => {
        expect(areaCirculo(2)).toBeCloseTo(12.56, 1);
        expect(areaRetangulo(2, 5)).toBe(10);
        expect(perimetroRetangulo(2, 5)).toBe(14);
        expect(logaritmoNatural(Math.E)).toBe(1);
        expect(logaritmoBase10(100)).toBe(2);
        expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
        expect(radianosParaGraus(Math.PI)).toBe(180);
    });
});