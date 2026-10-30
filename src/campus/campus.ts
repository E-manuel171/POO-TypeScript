import { Aluno } from "../aluno/aluno";
import { Endereco } from "../endereco/endereco";
import { Professor } from "../professor/professor";
import { TecnicoAdministrativo } from "../tecnicos-administrativos/tecnico-administrativo";

class Campus {
    private _nome: string = '';
    private _endereco!: Endereco;
    private _alunos: Array<Aluno> = [];
    private _professores: Array<Professor> = [];
    private _tecnicosAdministrativos: Array<TecnicoAdministrativo> = [];

    // METODOS GET E SET DOS ATRIBUTOS ACIMA

    public get nome(): string {
        return this._nome;
    }
    public set nome(valor: string) {
        this._nome = valor;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(valor: Endereco) {
        this._endereco = valor;
    }

    public get alunos(): Array<Aluno> {
        return this._alunos;
    }
    public set alunos(valor: Array<Aluno>) {
        this._alunos = valor;
    }

    public get professores(): Array<Professor> {
        return this._professores;
    }
    public set professores(valor: Array<Professor>) {
        this._professores = valor;
    }

    public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
        return this._tecnicosAdministrativos;
    }
    public set tecnicosAdministrativos(valor: Array<TecnicoAdministrativo>) {
        this._tecnicosAdministrativos = valor;
    }

    // CONSTRUTOR

    constructor(nome: string, endereco: Endereco, alunos: Array<Aluno>, professores: Array<Professor>, TecnicosAdministrativos: Array<TecnicoAdministrativo>) {

    }

    // MÉTODOS DE INSTÂNCIA

    adicionarProfessor(professor: Professor): void {
        
    }

    listarProfessores(): void {
        this._professores.forEach(Professor => {
            console.log(Professor.nome);
            console.log(Professor.sobrenome);
            console.log(Professor.matricula);
            
        });
    }
}

export { Campus }