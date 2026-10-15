import { Pessoa } from "./pessoa";
import { Aluno, SituacaoAluno } from "./aluno";
import { Professor } from "./professor";
import { Endereco } from "./endereco";

const endereco01 = new Endereco("49000-666",13, "Rua A", "Bairro B", "Cidade C", "Sergipe");
const endereco02 = new Endereco("47000-000",16, "Rua Z", "Bairro Q", "Cidade K", "Sergipe");

const felipe: Aluno = new Aluno("Felipe","Jose","Masculino","777.777.777-77",34,true,[endereco01],"Informática", SituacaoAluno.FORMANDO);
const luis: Professor = new Professor("Luís","Santos Silva","Masculino","666.666.666-66", 56, false, [endereco01, endereco02], 1000);

felipe.submeterProjetoPesquisa();
felipe.submeterProjetoExtensão();

luis.submeterProjetoPesquisa();
luis.submeterProjetoExtensão();

console.log("------------------------");
console.log(Pessoa.getQuantidadePessoas());