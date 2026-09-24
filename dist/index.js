"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome;
let sobrenome;
let nomecompleto;
let idade;
let brasileiro;
let enderecos; // Ou ler enderecos: Array<string>
nome = `Emanuel`;
sobrenome = `Messias`;
idade = 43;
nomecompleto = `${nome} ${sobrenome}`;
brasileiro = false;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto", "Rua D, Lagarto"];
let exibirNomeCompleto = function () {
    return (`O nome completo é: ${nomecompleto}`);
};
let recuperaEndereco = function (posicao) {
    return enderecos[posicao];
};
console.log(exibirNomeCompleto());
console.log(recuperaEndereco(2));
//# sourceMappingURL=index.js.map