const obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const atualizarInterface = (tempo, troco, saldo, valido) => {
    const tempoDisplay = obterElemento("tempo");
    const trocoDisplay = obterElemento("troco");
    const saldoDisplay = obterElemento("saldo");

    if (!valido) {
        tempoDisplay.textContent = "Tempo de estacionamento: 0min";
        trocoDisplay.textContent = "Valor insuficiente!";
        return;
    }

    tempoDisplay.textContent = `Tempo de estacionamento: ${tempo}min`;
    trocoDisplay.textContent = `Seu troco: R$ ${formataMoeda(troco)}`;
    saldoDisplay.textContent = `Saldo: R$ ${formataMoeda(saldo)}`;
}