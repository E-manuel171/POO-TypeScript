import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import { Projeto } from "../projeto/projeto";
import { Campus } from "../campus/campus";
import { Evento } from "../eventos-academicos/evento";

class Professor extends Pessoa implements Projeto {
    
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    private _salario: number = 0;
    private _campus?: Campus;
    private _evento?: Evento;

    ///////////////
    //GETs E SETs//
    ///////////////

    public get salario(): number {
        return this._salario;
    }
    public set salario(valor: number) {
        this._salario = valor;
    }

    public get campus(): Campus | undefined {
        return this._campus;
    }
    public set campus(valor: Campus) {
        this._campus = valor;
    }

    public get evento(): Evento | undefined {
        return this._evento;
    }
    public set evento(valor: Evento) {
        if (this._evento !== undefined && this._evento !== valor) {
            throw new Error("O professor já está inscrito em outro evento.");
        }

        this._evento = valor;
    }

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

    protected gerarMatricula(): number {
        let numero: number = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        return Number(`${numero}`);
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Parabéns PROFESSOR(A) ${this.nome} por submeter um projeto de PESQUISA`);
    }

    public submeterProjetoExtensão(): void {
        console.log(`Parabéns PROFESSOR(A) ${this.nome} por submeter um projeto de EXTENSÃO`);
    }

    public consultarEventoInscrito(): Evento | undefined {
        return this._evento;
    }

    public descreverVinculo(): string {
        return `Professor regular vinculado ao campus ${this.campus?.nome ?? "ainda não definido"}.`;
    }
}

export { Professor }