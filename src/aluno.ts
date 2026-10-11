import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa{

    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    curso: string;
    situacao: string;

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(matricula: number, nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[], curso: string, situacao: string) {
        super(matricula, nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.curso = curso;
        this.situacao = situacao;
    }

}