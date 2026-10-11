import { Pessoa } from "./pessoa";
import { Aluno } from "./aluno";
import { Professor } from "./professor";

const diego: Pessoa = new Pessoa(111,"Diego", "Armando de Oliveira","Masculino","888.888.888-88", 36, true, [`Rua A`,`Rua C`]);
const felipe: Aluno = new Aluno(123,"Felipe","Jose","Masculino","777.777.777-77",34,true,["Rua F"],"Informática","Matriculado");
const luis: Professor = new Professor(234, "Luís","Santos Silva","Masculino","666.666.666-66", 56, false, [`Portugal`], 1000);

console.log(diego);
console.log(felipe.recuperarEndereco(0));
console.log(luis);
console.log("------------------------");
console.log(Pessoa.getQuantidadePessoas());