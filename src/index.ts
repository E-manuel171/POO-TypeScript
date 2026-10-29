import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";
import { TecnicoAdministrativo } from "./tecnicos-administrativos/tecnico-administrativo";
import { Bibliotecario } from "./tecnicos-administrativos/bibliotecario";
import { Psicologo } from "./tecnicos-administrativos/psicologo";

const endereco01 = new Endereco("49000-666",13, "Rua A", "Bairro B", "Cidade C", "Sergipe");
const endereco02 = new Endereco("47000-000",16, "Rua Z", "Bairro Q", "Cidade K", "Sergipe");
const endereco03 = new Endereco("67676-677", 67, "Rua six seven", "Bairro Ishow", "Cidade Speed", "Bahia");
const endereco04 = new Endereco("40000-300", 89, "Rua das Palmeiras", "Barra", "Salvador", "Bahia");

const felipe: Aluno = new Aluno("Felipe","Jose","Masculino","777.777.777-77",34,true,[endereco01],"Informática", SituacaoAluno.FORMANDO);
const luis: Professor = new Professor("Luís","Santos Silva","Masculino","666.666.666-66", 56, false, [endereco01, endereco02], 1000);
const judeu: Bibliotecario = new Bibliotecario("Rudeus", "Rudolf", "Masculino", "555.555.555-55", 27, false, [endereco03], "Brasileiro-Austro-Húngaro", 676767);
const jessica: Psicologo = new Psicologo("Jéssica", "Freya", "Feminino", "012.345.678-90", 31, true, [endereco04], "Dinamarquesa", 789123);

console.log(jessica);
console.log("------------------------");
console.log(Pessoa.getQuantidadePessoas());