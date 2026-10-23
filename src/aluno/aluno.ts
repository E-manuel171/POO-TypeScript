import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import { Projeto } from "../projeto/projeto"

class Aluno extends Pessoa implements Projeto { // Aluno tem a herança da classe Pessoa
    
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    private _curso: string = '';
    private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;

    ///////////////
    //GETs E SETs//
    ///////////////

    public get curso(): string {
        return this._curso;
    }

    public set curso(valor: string) {
        this._curso = valor;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }

    public set situacao(valor: SituacaoAluno) {
        this._situacao = valor;
    }

    //////////////
    //CONSTRUTOR//
    //////////////

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], curso: string, situacao: SituacaoAluno) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.curso = curso;
        this.situacao = situacao;
    }

    //////////////////////// O método gerarMatricula se sobrescreve (Override) a implementação
    //MÉTODOS DE INSTÂNCIA// do método abstrato definido  na classe Pessoa.
    //////////////////////// classe Aluno depende do Date e do Math, associação comportamental

    protected gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return Number(`${ano}${numero}`);
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Isso é uma submissão de projeto de PESQUISA do aluno ${this.nome}`);
    }

    public submeterProjetoExtensão(): void {
        console.log(`Isso é uma submissão de um projeto de EXTENSÃO do aluno ${this.nome}`);
    }
}

enum SituacaoAluno { // enum é um tipo de classe especial que não pode ser instânciada
    ATIVO = 'Ativo',
    MATRICULADO = 'Matriculado',
    TRANCADO = 'Trancado',
    CONCLUIDO = 'Concluído',
    CANCELADO = 'Cancelado',
    FORMANDO = 'Formando'
}

export { Aluno, SituacaoAluno }