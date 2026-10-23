import { Endereco } from "../endereco/endereco";

abstract class Pessoa { // classe Pessoa, que também é um tipo "abstrato"
    // definindo esses "atributos/variáveis/elementos" que fazem parte do molde pessoa desse sistema

    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    protected _matricula: number = 0; // filhos da classe podem acessar
    private _nome: string = ''; 
    private _sobrenome: string = '';
    private _sexo: string = '';
    private _CPF: string = '';
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _enderecos: Endereco[] = []; // Ou ler enderecos: Array<string>, inicializado com array vazio

    ///////////////////////
    //ATRIBUTOS ESTÁTICOS//
    ///////////////////////

    private static quantidadePessoas: number = 0;

    ///////////////
    //GETs E SETs//
    ///////////////

    public get matricula(): number {
        return this._matricula;
    }

    protected set matricula(valor: number) {
        this._matricula = valor;    
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(valor: string) {
        this._nome = valor;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }

    public set sobrenome(valor: string) {
        this._sobrenome = valor;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(valor: string) {
        this._sexo = valor;    
    }

    public get CPF(): string {
        return this._CPF;
    }

    public set CPF(valor: string) {
        let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/; // Associação Comportamental de Dependência
        if (padraoCPF.test(valor)) {
            this._CPF = valor;
        } 
        else {
            throw Error("CPF Inválido");
        }
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(valor: number) {
        this._idade = valor;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }

    public set brasileiro(valor: boolean) {
        this._brasileiro = valor;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }

    public set enderecos(valor: Endereco[]) {
        this._enderecos = valor;
    }

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[]) {
        this.nome = nome; // this para acessar métodos e atributos de instância
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;

        Pessoa.quantidadePessoas++; //tipo Pessoa chama método de verificação da quantidade e incrementa +1 a cada novo objeto criado com new.
    }

    ////////////////////////
    //MÉTODOS DE INSTÂNCIA//
    ////////////////////////

    public exibirNomeCompleto(): string { // COMPORTAMENTOS OU MÉTODOS
    return (`O nome completo é: ${this.nome} ${this.sobrenome}`)
    }

    public recuperarEndereco(posicao: number): Endereco | undefined { // COMPORTAMENTOS OU MÉTODOS
    console.log("MÉTODO DE RETORNO DE ENDEREÇO AQUI <-----");
    return this.enderecos[posicao]; // this.fulano reserva o atributo no contexto da classe
    
    }

    /////////////////////
    //MÉTODOS ESTÁTICOS//
    /////////////////////

    public static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    ///////////////////// sem implementação, para garantir que as classes que sejam filhas de
    //MÉTODOS ABSTRATOS// Pessoa possuam uma implementação desses métodos, assim é possível que
    ///////////////////// cada classe herde sua maneira específica de gerar matrícula (Polimorfismo)

    protected abstract gerarMatricula(): number;

}

export { Pessoa }