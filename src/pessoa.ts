export class Pessoa { // classe Pessoa, que também é um tipo "abstrato"
    // definindo esses "atributos/variáveis/elementos" que fazem parte do molde pessoa desse sistema

    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    matricula: number = 0;
    nome: string = ''; 
    sobrenome: string = '';
    sexo: string = '';
    CPF: string = '';
    idade: number = 0;
    brasileiro: boolean = true;
    enderecos: string[] = []; // Ou ler enderecos: Array<string>, inicializado com array vazio

    ///////////////////////
    //ATRIBUTOS ESTÁTICOS//
    ///////////////////////

    static quantidadePessoas: number = 0;

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(matricula: number, nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[]) {
        this.matricula = matricula;
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

    exibirNomeCompleto(): string { // COMPORTAMENTOS OU MÉTODOS
    return (`O nome completo é: ${this.nome} ${this.sobrenome}`)
    }

    recuperarEndereco(posicao: number): string | undefined { // COMPORTAMENTOS OU MÉTODOS
    return this.enderecos[posicao]; // this.fulano reserva o atributo no contexto da classe
    }

    /////////////////////
    //MÉTODOS ESTÁTICOS//
    /////////////////////

    static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

}