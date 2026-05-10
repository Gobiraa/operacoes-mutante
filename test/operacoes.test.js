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

describe('Suíte Definitiva - Meta 98%+', () => {

    test('Bloco 1: Operações Básicas e Fatorial', () => {
        expect(soma(2, 2)).toBe(4);
        expect(subtracao(5, 2)).toBe(3);
        expect(multiplicacao(3, 3)).toBe(9);
        
        // Divisão e Raiz Quadrada
        expect(divisao(10, 2)).toBe(5);
        expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.'); //
        expect(potencia(2, 3)).toBe(8);
        expect(raizQuadrada(9)).toBe(3);
        expect(raizQuadrada(0)).toBe(0); // Fronteira do n < 0
        expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); //
        expect(restoDivisao(10, 3)).toBe(1);

        // Fatorial Extremo
        expect(fatorial(0)).toBe(1);
        expect(fatorial(1)).toBe(1);
        expect(fatorial(2)).toBe(2);
        expect(fatorial(3)).toBe(6);
        expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); //
    });

    test('Bloco 2: Arrays, Paridade e Porcentagens', () => {
        const nums = [10, 20, 30];
        expect(somaArray(nums)).toBe(60);
        expect(mediaArray(nums)).toBe(20);
        expect(mediaArray([])).toBe(0);
        
        // Strings em Russo obrigatórias
        expect(maximoArray(nums)).toBe(30);
        expect(minimoArray(nums)).toBe(10);
        expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
        expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');

        expect(valorAbsoluto(-10)).toBe(10);
        expect(arredondar(4.6)).toBe(5);
        expect(isPar(2)).toBe(true);
        expect(isPar(3)).toBe(false);
        expect(isImpar(3)).toBe(true);
        expect(isImpar(2)).toBe(false);
        
        expect(calcularPorcentagem(10, 200)).toBeCloseTo(20);
        expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
        expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
        expect(inverterSinal(10)).toBe(-10);
        expect(inverterSinal(0)).toBe(-0); // Evita falha do Jest
    });

    test('Bloco 3: Trigonometria e Logs', () => {
        expect(seno(0)).toBe(0);
        expect(cosseno(0)).toBe(1);
        expect(tangente(0)).toBe(0);
        expect(logaritmoNatural(Math.E)).toBe(1);
        expect(logaritmoBase10(100)).toBe(2);
        expect(arredondarParaBaixo(4.9)).toBe(4);
        expect(arredondarParaCima(4.1)).toBe(5);
        expect(hipotenusa(3, 4)).toBe(5);
        expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
        expect(radianosParaGraus(Math.PI)).toBe(180);
    });

    test('Bloco 4: Números, Primos, Clamp e Inverso', () => {
        expect(mdc(12, 18)).toBe(6);
        expect(mmc(12, 18)).toBe(36);
        expect(fibonacci(6)).toBe(8);
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);

        // Primos
        expect(isPrimo(1)).toBe(false);
        expect(isPrimo(2)).toBe(true);
        expect(isPrimo(3)).toBe(true);
        expect(isPrimo(4)).toBe(false);
        expect(isPrimo(9)).toBe(false);

        // Produto Array
        expect(produtoArray([])).toBe(1); //
        expect(produtoArray([2, 3])).toBe(6);

        // Clamp Extremo
        expect(clamp(5, 10, 20)).toBe(10);
        expect(clamp(10, 10, 20)).toBe(10);
        expect(clamp(15, 10, 20)).toBe(15);
        expect(clamp(20, 10, 20)).toBe(20);
        expect(clamp(25, 10, 20)).toBe(20);

        // Conversões e Inverso
        expect(isDivisivel(10, 2)).toBe(true);
        expect(isDivisivel(10, 3)).toBe(false);
        expect(celsiusParaFahrenheit(0)).toBe(32);
        expect(celsiusParaFahrenheit(100)).toBe(212); //
        expect(fahrenheitParaCelsius(32)).toBe(0);
        expect(fahrenheitParaCelsius(212)).toBe(100); //
        
        expect(inverso(2)).toBe(0.5);
        expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); //
    });

    test('Bloco 5: Geometria, Comparações e Mediana', () => {
        expect(areaCirculo(2)).toBeCloseTo(12.56, 1);
        expect(areaRetangulo(2, 5)).toBe(10);
        expect(perimetroRetangulo(2, 5)).toBe(14);

        // Comparações
        expect(isMaiorQue(6, 5)).toBe(true);
        expect(isMaiorQue(5, 5)).toBe(false);
        expect(isMenorQue(4, 5)).toBe(true);
        expect(isMenorQue(5, 5)).toBe(false);
        expect(isEqual(5, 5)).toBe(true);
        expect(isEqual(5, 6)).toBe(false);

        // Mediana
        expect(medianaArray([3, 1, 2])).toBe(2);
        expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
        expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.'); // Erro em Russo obrigatório

        expect(dobro(10)).toBe(20);
        expect(triplo(10)).toBe(30);
        expect(metade(10)).toBe(5);
    });
});