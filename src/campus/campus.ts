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

    constructor(nome: string, endereco: Endereco, alunos: Array<Aluno>, professores: Array<Professor>, tecnicosAdministrativos: Array<TecnicoAdministrativo>) {
        this.nome = nome;
        this.endereco = endereco;
        this.alunos = alunos;
        this.professores = professores;
        this.tecnicosAdministrativos = tecnicosAdministrativos;
    }

    // MÉTODOS DE INSTÂNCIA

    adicionarProfessor(professor: Professor): void {
        const campusAtual = professor.campus; // getter de qual campus esse professor é (Ou se não é de nenhum)

        if (professor.campus !== undefined && professor.campus !== this) { // Se o professor não for undefined e não pertencer a esse campus, ele pertence a outro campus qualquer, Então apresentamos um erro
            throw new Error(`O(A) professor(a) ${professor.nome} ${professor.sobrenome} já faz parte de outro campus.`);
        }

        professor.campus = this; // professor vai receber o objeto Campus que estamos chamando o método

       if (!this._professores.includes(professor)) { // se o Array dos professores do campus não incluir esse professor ainda
            this._professores.push(professor); // Então o adicione ao final do Array
        }
    }

    listarProfessores(): void {
        if (this._professores.length > 0) { // verifica o tamanho do Array de professores, caso seja maior que zero (tenha professores) ele faz a impressão, caso não ele exibe um aviso
            
            console.log(`---Professores do campus ${this._nome}---`);

            for (const professor of this._professores) { // for...of para percorre os professores na lista _professores
                console.log(`Professor(a) ${professor.nome} ${professor.sobrenome} - Matrícula: ${professor.matricula}`);
            }

        } else {
            console.log(`O ${this._nome} ainda não possuí professores`);
        }

    }
    
}

export { Campus }