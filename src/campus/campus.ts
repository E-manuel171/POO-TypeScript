import { Aluno } from "../aluno/aluno";
import { Endereco } from "../endereco/endereco";
import { Professor } from "../professor/professor";
import { TecnicoAdministrativo } from "../tecnicos-administrativos/tecnico-administrativo";
import { VisitanteDiscente } from "../aluno/visitante-discente";
import { VisitanteDocente } from "../professor/visitante-docente";

type MembroDiscente = Aluno | VisitanteDiscente;
type MembroDocente = Professor | VisitanteDocente;

class Campus {
    private _nome: string = '';
    private _endereco!: Endereco;
    private _alunos: Array<MembroDiscente> = [];
    private _professores: Array<MembroDocente> = [];
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

    public get alunos(): Array<MembroDiscente> {
        return this._alunos;
    }
    public set alunos(valor: Array<MembroDiscente>) {
        this._alunos = valor;
    }

    public get professores(): Array<MembroDocente> {
        return this._professores;
    }
    public set professores(valor: Array<MembroDocente>) {
        this._professores = valor;
    }

    public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
        return this._tecnicosAdministrativos;
    }
    public set tecnicosAdministrativos(valor: Array<TecnicoAdministrativo>) {
        this._tecnicosAdministrativos = valor;
    }

    // CONSTRUTOR

    constructor(nome: string, endereco: Endereco, alunos: Array<MembroDiscente>, professores: Array<MembroDocente>, tecnicosAdministrativos: Array<TecnicoAdministrativo>) {
        this._nome = nome;
        this._endereco = endereco;
        this._alunos = alunos;
        this._tecnicosAdministrativos = tecnicosAdministrativos;

        for (const membroDocente of professores) {
            this.adicionarProfessor(membroDocente);
        }

    }

    // MÉTODOS DE INSTÂNCIA

    public adicionarAluno(aluno: MembroDiscente): void {
        if (!this._alunos.includes(aluno)) this._alunos.push(aluno);
    }

    public adicionarProfessor(professor: MembroDocente): void {
        if (professor instanceof Professor) {
            const campusAtual = professor.campus; // Getter do campus ao qual este professor já está associado.

            if (campusAtual !== undefined && campusAtual !== this) { // Impede que o professor pertença a outro campus.
                throw new Error(
                    `O professor ${professor.nome} ${professor.sobrenome} já está associado a outro campus.`
                );
            }

            professor.campus = this; // Associa o professor efetivo a este campus.
        }

        if (!this._professores.includes(professor)) { // Evita adicionar o mesmo docente mais de uma vez.
            this._professores.push(professor); // Adiciona o docente ao final da lista.
        }
    }

    public listarProfessores(): void {
        if (this._professores.length === 0) { // Verifica se há docentes antes de listar.
            console.log(`O campus ${this._nome} ainda não possui professores.`);
            return;
        }

        console.log(`Professores do campus ${this._nome}:`);

        for (const professor of this._professores) { // Percorre os docentes vinculados ao campus.
            console.log(
                `${professor.nome} ${professor.sobrenome} - Matrícula: ${professor.matricula} - ${professor.descreverVinculo()}`
            );
        }
    }
    
}

export { Campus }