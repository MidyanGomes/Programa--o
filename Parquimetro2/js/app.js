import { SaldoParquimetro, CalculadoraParquimetro } from "./classes.js";
import { atualizarInterface } from "./utils.js";

const minhaConta = new SaldoParquimetro();
const calculadora = new CalculadoraParquimetro();

const botaoAdicionar = document.getElementById("btn-adicionar");
const inputValor = document.getElementById("valorAdicionado");

botaoAdicionar.addEventListener("click", () => {
    const valorInformado = parseFloat(inputValor.value);
    if (isNaN(valorInformado)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const resultado = calculadora.calcular(valorInformado);

    if (resultado.valido) {
        minhaConta.adicionar(valorInformado);
    }

    atualizarInterface(resultado.tempo, resultado.troco, minhaConta.saldo, resultado.valido);
    inputValor.value = "";
})