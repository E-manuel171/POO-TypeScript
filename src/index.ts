import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";
import { Bibliotecario } from "./tecnicos-administrativos/bibliotecario";
import { Emprestimo } from "./emprestimo/emprestimo";
import { ProcessadorEmprestimo } from "./emprestimo/processador-emprestimo";
import type { UsuarioBiblioteca } from "./emprestimo/usuario-biblioteca";

const endereco01 = new Endereco("49000-666",13, "Rua A", "Bairro B", "Cidade C", "Sergipe");
const endereco02 = new Endereco("47000-000",16, "Rua Z", "Bairro Q", "Cidade K", "Sergipe");
const endereco03 = new Endereco("67676-677", 67, "Rua Y", "Bairro K", "Cidade Speed", "Bahia");
const endereco04 = new Endereco("40000-300", 89, "Rua das Palmeiras", "Barra", "Salvador", "Bahia");