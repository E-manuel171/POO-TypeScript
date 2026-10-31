import type { Endereco } from "../endereco/endereco";
import type { UsuarioBiblioteca } from "./usuario-biblioteca";

class Emprestimo {
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    private _tituloLivro: string;
    private _usuarioResponsavel: UsuarioBiblioteca;
    private _enderecoUnidadeBiblioteca: Endereco;
    private _dataEmprestimo: Date;
    private _dataPrevistaDevolucao: Date;

    /////////////////
    //GETs PÚBLICOS//
    /////////////////

    public get tituloLivro(): string {
        return this._tituloLivro;
    }

    public get usuarioResponsavel(): UsuarioBiblioteca {
        return this._usuarioResponsavel;
    }

    public get enderecoUnidadeBiblioteca(): Endereco {
        return this._enderecoUnidadeBiblioteca;
    }

    public get dataEmprestimo(): Date {
        return new Date(this._dataEmprestimo.getTime());
    }

    public get dataPrevistaDevolucao(): Date {
        return new Date(this._dataPrevistaDevolucao.getTime());
    }

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(tituloLivro: string, usuarioResponsavel: UsuarioBiblioteca, enderecoUnidadeBiblioteca: Endereco, dataEmprestimo: Date, dataPrevistaDevolucao: Date) {
        this._tituloLivro = tituloLivro;
        this._usuarioResponsavel = usuarioResponsavel;
        this._enderecoUnidadeBiblioteca = enderecoUnidadeBiblioteca;
        this._dataEmprestimo = new Date(dataEmprestimo.getTime());
        this._dataPrevistaDevolucao = new Date(dataPrevistaDevolucao.getTime());
    }
}

export { Emprestimo }