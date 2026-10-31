import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

class VisitanteDiscente extends Pessoa {
    private _instituicaoOrigem: string;
    private _cursoOrigem: string;
    private _periodoPermanencia: string;

    public get instituicaoOrigem(): string {
        return this._instituicaoOrigem; 
    }
    public set instituicaoOrigem(valor: string) {
        this._instituicaoOrigem = valor;
    }

    public get cursoOrigem(): string {
        return this._cursoOrigem;
    }
    public set cursoOrigem(valor: string) {
        this._cursoOrigem = valor;
    }

    public get periodoPermanencia(): string {
        return this._periodoPermanencia;
    }
    public set periodoPermanencia(valor: string) {
        this._periodoPermanencia = valor;
    }

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean,
        enderecos: Endereco[], instituicaoOrigem: string, cursoOrigem: string, periodoPermanencia: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this._instituicaoOrigem = instituicaoOrigem;
        this._cursoOrigem = cursoOrigem;
        this._periodoPermanencia = periodoPermanencia;
        this.matricula = this.gerarMatricula();
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 90000) + 10000;
    }

    public descreverVinculo(): string {
        return `Visitante discente de ${this.instituicaoOrigem}; curso de origem: ${this.cursoOrigem}; permanência: ${this.periodoPermanencia}.`;
    }
}

export { VisitanteDiscente }