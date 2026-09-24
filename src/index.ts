let nome: string;
let sobrenome: string;
let nomecompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[]; // Ou ler enderecos: Array<string>

nome = `Emanuel`;
sobrenome = `Messias`;
idade = 18;
nomecompleto = `${nome} ${sobrenome}`;
brasileiro = false;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto", "Rua D, Lagarto"];

let exibirNomeCompleto = function(): string {
    return (`O nome completo é: ${nomecompleto}`)
}

let recuperaEndereco = function(posicao: number): string | undefined{
    return enderecos[posicao];
}

console.log(exibirNomeCompleto());
console.log(recuperaEndereco(2));
console.log(`E eu tenho ${idade} anos`);