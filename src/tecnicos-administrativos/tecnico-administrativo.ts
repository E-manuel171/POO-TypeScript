import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import type { UsuarioBiblioteca } from "../emprestimo/usuario-biblioteca";

abstract class TecnicoAdministrativo extends Pessoa implements UsuarioBiblioteca {
    private _nacionalidade: string = "";
    private _autorizadoParaEmprestimo: boolean = false;


    public get nacionalidade(): string {
        return this._nacionalidade;
    }
    public set nacionalidade(valor: string) {
        this._nacionalidade = valor;
    }

    public get autorizadoParaEmprestimo(): boolean {
        return this._autorizadoParaEmprestimo;
    }
    public set autorizadoParaEmprestimo(valor: boolean) {
        this._autorizadoParaEmprestimo = valor;
    }

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this._nacionalidade = nacionalidade;
    }

    protected gerarMatricula(): number {
        let numero: number = Math.floor(Math.random() * 9000 ) + 1000;
        return numero;
    }

    public identificar(): string {
        return `Técnico-administrativo ${this.nome} ${this.sobrenome} - Matrícula: ${this.matricula}`;
    }

    public estarAptoParaNovoEmprestimo(): boolean {
        return this.autorizadoParaEmprestimo;
    }
}

export { TecnicoAdministrativo }