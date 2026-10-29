import { TecnicoAdministrativo } from "./tecnico-administrativo";
import { Endereco } from "../endereco/endereco";

class Psicologo extends TecnicoAdministrativo {

    private _CRP: number = 0;

    public get CRP(): number {
        return this._CRP;
    }

    public set CRP(valor: number) {
        this._CRP = valor;
    }

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRP: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, nacionalidade);
        this._CRP = CRP;
    }
}

export { Psicologo }