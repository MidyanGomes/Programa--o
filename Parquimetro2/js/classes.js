export class SaldoParquimetro {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }

    adicionar (valor) {
        this.#saldo += parseFloat(valor);
    }

    get saldo() {
        return this.#saldo;
    }
}

export class CalculadoraParquimetro {
    calcular(valorAdd) {
        if (valorAdd < 1.00) {
            return { tempo: 0, troco: 0, valido: false };
        }

        let tempo = 0;
        let troco = 0;

        if (valorAdd >= 1 && valorAdd < 1.75) {
            tempo = 30;
            troco = valorAdd - 1.00;
        } else if (valorAdd >= 1.75 && valorAdd < 3) {
            tempo = 60;
            troco = valorAdd - 1.75;
        } else if (valorAdd >= 3) {
            tempo = 120;
            troco = valorAdd - 3.00;
        }

        return { tempo, troco, valido: true };
    }
}