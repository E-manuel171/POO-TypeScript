import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";
import { Projeto } from "./projeto";

class Professor extends Pessoa implements Projeto {
    
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    salario: number;

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], salario: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    //////////////////////// O método gerarMatricula se sobrescreve (Override) implementação
    //MÉTODOS DE INSTÂNCIA// do método abstrato definido  na classe Pessoa.
    //////////////////////// classe Professor depende do Math, associação comportamental

    gerarMatricula(): number {
        let numero: number = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        return Number(`${numero}`);
    }

    submeterProjetoPesquisa(): void {
        console.log(`Parabéns PROFESSOR(A) ${this.nome} por submeter um projeto de PESQUISA`);
    }

    submeterProjetoExtensão(): void {
        console.log(`Parabéns PROFESSOR(A) ${this.nome} por submeter um projeto de EXTENSÃO`);
    }
}

export { Professor }