import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";
import { TecnicoAdministrativo } from "./tecnicos-administrativos/tecnico-administrativo";
import { Bibliotecario } from "./tecnicos-administrativos/bibliotecario";
import { Psicologo } from "./tecnicos-administrativos/psicologo";
import { Campus } from "./campus/campus";
import { Evento } from "./eventos-academicos/evento";

const endereco01 = new Endereco("49000-666",13, "Rua A", "Bairro B", "Cidade C", "Sergipe");
const endereco02 = new Endereco("47000-000",16, "Rua Z", "Bairro Q", "Cidade K", "Sergipe");
const endereco03 = new Endereco("67676-677", 67, "Rua six seven", "Bairro Ishow", "Cidade Speed", "Bahia");
const endereco04 = new Endereco("40000-300", 89, "Rua das Palmeiras", "Barra", "Salvador", "Bahia");

const eventoPOO = new Evento("Seminário de POO", endereco01);
const alunoEvento = new Aluno(
    "Luana",
    "Costa",
    "Feminino",
    "777.777.777-77",
    20,
    true,
    [endereco01],
    "Informática",
    SituacaoAluno.ATIVO
);
const professorEvento = new Professor(
    "Marcos",
    "Lima",
    "Masculino",
    "666.666.666-66",
    45,
    true,
    [endereco01],
    1500
);

eventoPOO.adicionarAluno(alunoEvento);
eventoPOO.adicionarProfessor(professorEvento);

eventoPOO.listarParticipantes();
console.log(`Evento do aluno ${alunoEvento.nome}: ${alunoEvento.consultarEventoInscrito()?.nome ?? "nenhum"}`);
console.log(`Evento do professor ${professorEvento.nome}: ${professorEvento.consultarEventoInscrito()?.nome ?? "nenhum"}`);

console.log("------------------------");
console.log(Pessoa.getQuantidadePessoas());