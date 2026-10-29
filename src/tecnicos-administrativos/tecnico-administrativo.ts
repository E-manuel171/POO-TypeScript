import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

abstract class TecnicoAdministrativo extends Pessoa {
    private _nacionalidade: string = "";


    public get nacionalidade(): string {
        return this._nacionalidade;
    }

    public set nacionalidade(valor: string) {
        this._nacionalidade = valor;
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
}

export { TecnicoAdministrativo }