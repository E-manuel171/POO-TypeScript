import type { Aluno } from "../aluno/aluno";
import type { Endereco } from "../endereco/endereco";
import type { Professor } from "../professor/professor";

class Evento {
    private _nome: string = "";
    private _endereco!: Endereco;
    private _alunos: Aluno[] = [];
    private _professores: Professor[] = [];

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
    public get professores(): Array<Professor> {
        return this._professores;
    }

    constructor(nome: string, endereco: Endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }

    public adicionarAluno(aluno: Aluno): void {
        const eventoAtual = aluno.evento;

        if (eventoAtual !== undefined && eventoAtual !== this) {
            throw new Error(`O aluno ${aluno.nome} ${aluno.sobrenome} já está inscrito em outro evento.`);
        }

        aluno.evento = this;

        if (!this._alunos.includes(aluno)) {
            this._alunos.push(aluno);
        }
    }

    public adicionarProfessor(professor: Professor): void {
        const eventoAtual = professor.evento;

        if (eventoAtual !== undefined && eventoAtual !== this) {
            throw new Error(`O professor ${professor.nome} ${professor.sobrenome} já está inscrito em outro evento.`);
        }

        professor.evento = this;

        if (!this._professores.includes(professor)) {
            this._professores.push(professor);
        }
    }

    public listarParticipantes(): void {
        if (this._alunos.length === 0 && this._professores.length === 0) {
            console.log(`O evento ${this._nome} ainda não possui participantes.`);
        }
        console.log(`Participantes do evento ${this._nome}:`);

        for (const aluno of this._alunos) {
            console.log(`Aluno: ${aluno.nome} ${aluno.sobrenome} - Matrícula: ${aluno.matricula}`);
        }

        for (const professor of this._professores) {
            console.log(`Professor: ${professor.nome} ${professor.sobrenome} - Matrícula: ${professor.matricula}`);
        }
    }
}

export { Evento };
