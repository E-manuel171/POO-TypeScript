import { Endereco } from "../endereco/endereco";
import { TecnicoAdministrativo } from "./tecnico-administrativo";

class Bibliotecario extends TecnicoAdministrativo {

    private _CBR: number = 0;

    public get CBR(): number {
        return this._CBR;
    }

    public set CBR(valor: number) {
        this._CBR = valor;
    }

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CBR: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, nacionalidade);
        this._CBR = CBR;
    }
}

export { Bibliotecario }