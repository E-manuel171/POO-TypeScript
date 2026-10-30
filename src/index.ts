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

const alunosLagarto: Aluno[] = [];
const professoresLagarto: Professor[] = [];
const tecnicosAdministrativosLagarto: TecnicoAdministrativo[] = [];

const alunosAracaju: Aluno[] = [];
const professoresAracaju: Professor[] = [];
const tecnicosAdministrativosAracaju: TecnicoAdministrativo[] = [];

const eliel = new Professor("Eliel", "Santos", "Masculino", "222.222.222-22", 22, true, [endereco02], 1002);
const diego = new Professor("Diego", "Oliveira", "Masculino", "333.333.333-33", 19, false, [endereco03], 1003);
const alice = new Professor("Alice", "Costa", "Feminino", "444.444.444-44", 21, true, [endereco04], 1004);
const roberta = new Professor("Roberta", "Cof", "Feminino", "444.444.444-88", 21, true, [endereco01], 1864);

const ifsLagarto: Campus = new Campus("Campus Lagarto", endereco04, alunosLagarto, professoresLagarto, tecnicosAdministrativosLagarto);
const ifsAracaju: Campus = new Campus("Campus Aracaju", endereco02, alunosAracaju, professoresAracaju, tecnicosAdministrativosAracaju);

ifsLagarto.adicionarProfessor(diego);
ifsLagarto.listarProfessores();
ifsLagarto.adicionarProfessor(diego);
ifsLagarto.listarProfessores();