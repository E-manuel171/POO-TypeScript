import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

class VisitanteDocente extends Pessoa {
    private _instituicaoOrigem: string;
    private _areaAtuacao: string;
    private _periodoPermanencia: string;

    public get instituicaoOrigem(): string {
        return this._instituicaoOrigem;
    }
    public set instituicaoOrigem(valor: string) {
        this._instituicaoOrigem = valor;
    }

    public get areaAtuacao(): string {
        return this._areaAtuacao;
    }
    public set areaAtuacao(valor: string) {
        this._areaAtuacao = valor;
    }

    public get periodoPermanencia(): string {
        return this._periodoPermanencia;
    }
    public set periodoPermanencia(valor: string) {
        this._periodoPermanencia = valor;
    }

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean,
        enderecos: Endereco[], instituicaoOrigem: string, areaAtuacao: string, periodoPermanencia: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this._instituicaoOrigem = instituicaoOrigem;
        this._areaAtuacao = areaAtuacao;
        this._periodoPermanencia = periodoPermanencia;
        this.matricula = this.gerarMatricula();
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    public descreverVinculo(): string {
        return `Visitante docente de ${this.instituicaoOrigem}; área de atuação: ${this.areaAtuacao}.`;
    }
}

export { VisitanteDocente }