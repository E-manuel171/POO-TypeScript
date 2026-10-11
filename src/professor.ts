import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    salario: number;

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(matricula: number, nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[], salario: number) {
        super(matricula, nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.salario = salario;
    }

    recuperarEndereco(posicao: number): string | undefined { // COMPORTAMENTOS OU MÉTODOS
    return this.enderecos[posicao]; // this.fulano reserva o atributo no contexto da classe
    }

}