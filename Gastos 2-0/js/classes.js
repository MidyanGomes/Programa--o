export class Categoria{
    //Encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    //Uso de getters
    get valor(){
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }
    //Manipulacao do estado
    adicionarValor(valor){
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria{
    #categorias;
    //Rest operator
    constructor(...categorias){
        this.#categorias = categorias;
    }

    get categorias(){
        return this.#categorias;
    }

    obterCategoriaPorNome(nome){
        //Progamacao funcional
        return this.#categorias.find((categoria) => categoria.nome == nome);
    }

    obterTotal() {
        //Reducao de dados com Reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }
}