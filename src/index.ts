import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";
import { TecnicoAdministrativo } from "./tecnicos-administrativos/tecnico-administrativo";
import { Bibliotecario } from "./tecnicos-administrativos/bibliotecario";
import { Psicologo } from "./tecnicos-administrativos/psicologo";
import { Campus } from "./campus/campus";

const endereco01 = new Endereco("49000-666",13, "Rua A", "Bairro B", "Cidade C", "Sergipe");
const endereco02 = new Endereco("47000-000",16, "Rua Z", "Bairro Q", "Cidade K", "Sergipe");
const endereco03 = new Endereco("67676-677", 67, "Rua six seven", "Bairro Ishow", "Cidade Speed", "Bahia");
const endereco04 = new Endereco("40000-300", 89, "Rua das Palmeiras", "Barra", "Salvador", "Bahia");


const alunos01: Aluno[] = [
    new Aluno("Ana", "Silva", "Feminino", "111.111.111-11", 20, true, [endereco01], "Informática", SituacaoAluno.FORMANDO),
    new Aluno("Carlos", "Santos", "Masculino", "222.222.222-22", 22, true, [endereco02], "Informática", SituacaoAluno.FORMANDO),
    new Aluno("Pedro", "Oliveira", "Masculino", "333.333.333-33", 19, false, [endereco03], "Informática", SituacaoAluno.FORMANDO),
    new Aluno("Mariana", "Costa", "Feminino", "444.444.444-44", 21, true, [endereco04], "Informática", SituacaoAluno.FORMANDO)
];
const professores01: Professor[] = [
    new Professor("Carol", "Silva", "Feminino", "111.111.111-11", 20, true, [endereco01], 1001),
    new Professor("Eliel", "Santos", "Masculino", "222.222.222-22", 22, true, [endereco02], 1002),
    new Professor("Diego", "Oliveira", "Masculino", "333.333.333-33", 19, false, [endereco03], 1003),
    new Professor("Alice", "Costa", "Feminino", "444.444.444-44", 21, true, [endereco04], 1004)
];
const tecnicosAdministrativos01: TecnicoAdministrativo[] = [
    new Bibliotecario("Zageht", "Silva", "Masculino", "111.111.111-11", 20, true, [endereco01], "Brasileiro", 123456),
    new Psicologo("Jaboat", "Santos", "Masculino", "222.222.222-22", 22, true, [endereco02], "Brasileiro", 654321),
    new Bibliotecario("Django", "Oliveira", "Masculino", "333.333.333-33", 19, false, [endereco03], "Brasileiro", 789123),
    new Psicologo("Birula", "Costa", "Feminino", "444.444.444-44", 21, true, [endereco04], "Brasileiro", 321789)
];

const ifs: Campus = new Campus("Campus Lagarto", endereco04, alunos01, professores01, tecnicosAdministrativos01);
ifs.nome = "Campus Lagartixa";
console.log(`O nome do Campus é: ${ifs.nome}`);
console.log("------------------------");
console.log(Pessoa.getQuantidadePessoas());